import { books, decodeBookIds, encodeBookIds } from './books';
import { createTooltip } from "./tooltip";
import { initializeWordCloud } from "./wordcloud";

// Type definitions for DOM elements
const canvas = document.getElementById('my_canvas') as HTMLCanvasElement;
const form = document.getElementById('read_books_form') as HTMLFormElement;
const readBooksFieldset = document.getElementById('read_books_fieldset') as HTMLFieldSetElement;
const shareUrl = document.getElementById('share_url') as HTMLAnchorElement;
const downloadButton = document.getElementById('download_button') as HTMLButtonElement;
const readCount = document.getElementById('read_count') as HTMLElement;
const totalCount = document.getElementById('total_count') as HTMLElement;
const copyUrlButton = document.getElementById('copy_url_button') as HTMLButtonElement;
const colorPicker = document.querySelector('input[name="color"]') as HTMLInputElement;

// Update the mapping objects to use the new structure
const bookToId: { [key: string]: string } = {};
const idToBook: { [key: string]: string } = {};
const bookToIsbn: { [key: string]: string } = {};
const bookToAuthor: { [key: string]: string } = {};

// Generate mappings from the books array
books.forEach(book => {
  bookToId[book.name] = book.id;
  idToBook[book.id] = book.name;
  bookToIsbn[book.name] = book.isbn;
  bookToAuthor[book.name] = book.author;
});

// Track selected books
let selectedBookIds: string[] = [];

// Create a tooltip element
const tooltip = createTooltip();


// Initialize WordCloud if canvas exists
if (canvas) {
  // Get initial selected books from URL
  const urlParams = new URLSearchParams(window.location.search);
  const encodedBooks = urlParams.get('books');
  selectedBookIds = encodedBooks ? decodeBookIds(encodedBooks) : [];
  
  // Get initial color from URL or use default
  const initialColor = urlParams.get('color') || '#00FF00';
  if (colorPicker) {
    colorPicker.value = initialColor;
  }
  
  initializeWordCloud(canvas, books, selectedBookIds, tooltip, initialColor);

  // Add mouseout event to hide tooltip
  canvas.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
}

// Initialize form if it exists
if (form) {
  // Create checkboxes for each book
  books.forEach(book => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = book.name;
    checkbox.name = 'book';
    
    // Check if this book is in the URL parameters
    if (selectedBookIds.includes(book.id)) {
      checkbox.checked = true;
    }
    
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(`${book.name} (by ${book.author})`));
    readBooksFieldset.appendChild(label);
    readBooksFieldset.appendChild(document.createElement('br'));
  });

  // Handle checkbox changes
  form.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    if (target.type === 'checkbox') {
      const checkboxes = Array.from(form.querySelectorAll('input[type="checkbox"]')) as HTMLInputElement[];
      selectedBookIds = checkboxes
        .filter(cb => cb.checked)
        .map(cb => bookToId[cb.value]);
      
      // Update URL with selected books and color
      const url = new URL(window.location.href);
      if (selectedBookIds.length > 0) {
        url.searchParams.set('books', encodeBookIds(selectedBookIds));
      } else {
        url.searchParams.delete('books');
      }
      url.searchParams.set('color', colorPicker.value);
      window.history.pushState({}, '', url.toString());

      if (shareUrl) {
        shareUrl.textContent = url.toString();
        shareUrl.href = url.toString();
      }

      // Update read count
      if (readCount) {
        readCount.textContent = selectedBookIds.length.toString();
      }

      // Redraw the word cloud
      initializeWordCloud(canvas, books, selectedBookIds, tooltip, colorPicker.value);
    }
  });
}

// Initialize download button
if (downloadButton && canvas) {
  downloadButton.addEventListener('click', () => {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'books_everyone_should_read.png';
    link.click();
  });
}

// Initialize counters
if (readCount) {
  readCount.textContent = selectedBookIds.length.toString();
}

if (totalCount) {
  totalCount.textContent = books.length.toString();
}

// Initialize copy URL button
if (copyUrlButton) {
  copyUrlButton.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
    window.alert('URL copied to clipboard');
  });
}

// Add event listener to color picker
colorPicker.addEventListener('change', (event) => {
  const color = (event.target as HTMLInputElement).value;
  // Update URL with new color
  const url = new URL(window.location.href);
  url.searchParams.set('color', color);
  window.history.pushState({}, '', url.toString());
  initializeWordCloud(canvas, books, selectedBookIds, tooltip, color);
});

