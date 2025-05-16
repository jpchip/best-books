import WordCloud from "wordcloud";
import type { Book } from './books';
import { books } from './books';

// Type definitions for DOM elements
const canvas = document.getElementById('my_canvas') as HTMLCanvasElement;
const form = document.getElementById('read_books_form') as HTMLFormElement;
const shareUrl = document.getElementById('share_url') as HTMLAnchorElement;
const downloadButton = document.getElementById('download_button') as HTMLButtonElement;
const readCount = document.getElementById('read_count') as HTMLElement;
const totalCount = document.getElementById('total_count') as HTMLElement;
const copyUrlButton = document.getElementById('copy_url_button') as HTMLButtonElement;
// Convert books array to WordCloud.ListEntry format
const list: WordCloud.ListEntry[] = books.map((book: Book) => [book.name, book.weight]);

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
const tooltip = document.createElement('div');
tooltip.style.position = 'absolute';
tooltip.style.display = 'none';
tooltip.style.backgroundColor = 'white';
tooltip.style.border = '1px solid #ccc';
tooltip.style.padding = '10px';
tooltip.style.borderRadius = '5px';
tooltip.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
tooltip.style.zIndex = '1000';
document.body.appendChild(tooltip);

// Add these utility functions at the top level
function encodeBookIds(ids: string[]): string {
  // Create a bit array where each bit represents a book (1 if selected, 0 if not)
  const bits = new Array(books.length).fill(0);
  ids.forEach(id => {
    const index = parseInt(id.substring(1)) - 1; // Convert "b1" to 0, "b2" to 1, etc.
    if (index >= 0 && index < bits.length) {
      bits[index] = 1;
    }
  });
  
  // Convert bits to bytes
  const bytes = [];
  for (let i = 0; i < bits.length; i += 8) {
    let byte = 0;
    for (let j = 0; j < 8 && i + j < bits.length; j++) {
      byte |= bits[i + j] << (7 - j);
    }
    bytes.push(byte);
  }
  
  // Convert to base64
  return btoa(String.fromCharCode(...bytes));
}

function decodeBookIds(encoded: string): string[] {
  try {
    // Convert from base64 to bytes
    const bytes = atob(encoded).split('').map(c => c.charCodeAt(0));
    
    // Convert bytes to bits
    const bits: number[] = [];
    bytes.forEach(byte => {
      for (let i = 7; i >= 0; i--) {
        bits.push((byte >> i) & 1);
      }
    });
    
    // Convert bits to book IDs
    return bits
      .slice(0, books.length)
      .map((bit, index) => bit ? `b${index + 1}` : null)
      .filter((id): id is string => id !== null);
  } catch {
    return [];
  }
}

// Function to initialize WordCloud
function initializeWordCloud() {
  if (!canvas) return;

  WordCloud(canvas, {
    list: list,
    minRotation: 0,
    maxRotation: 0,
    weightFactor: 3,
    fontFamily: 'Average, Times, serif',
    color: (word: string) => {
      const wordId = bookToId[word];
      return selectedBookIds.includes(wordId) ? '#00FF00' : '#000000';
    },
    hover: (item: WordCloud.ListEntry, dimension: WordCloud.Dimension, event: MouseEvent) => {
      const bookTitle = item[0] as string;
      const isbn = bookToIsbn[bookTitle];
      const author = bookToAuthor[bookTitle];
      
      if (isbn) {
        const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`;
        tooltip.innerHTML = `
          <img src="${coverUrl}" alt="${bookTitle}" style="max-width: 100px; height: auto;">
          <div style="margin-top: 5px;font-weight: bold;">${bookTitle}</div>
          <div style="margin-top: 5px;"> by ${author}</div>
        `;
        tooltip.style.display = 'block';
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
      }
    }
  });
}

// Initialize WordCloud if canvas exists
if (canvas) {
  // Get initial selected books from URL
  const urlParams = new URLSearchParams(window.location.search);
  const encodedBooks = urlParams.get('books');
  selectedBookIds = encodedBooks ? decodeBookIds(encodedBooks) : [];
  
  initializeWordCloud();

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
    label.appendChild(document.createTextNode(`${book.name} (${book.author})`));
    form.appendChild(label);
    form.appendChild(document.createElement('br'));
  });

  // Handle checkbox changes
  form.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    if (target.type === 'checkbox') {
      const checkboxes = Array.from(form.querySelectorAll('input[type="checkbox"]')) as HTMLInputElement[];
      selectedBookIds = checkboxes
        .filter(cb => cb.checked)
        .map(cb => bookToId[cb.value]);
      
      // Update URL with selected books
      const url = new URL(window.location.href);
      if (selectedBookIds.length > 0) {
        url.searchParams.set('books', encodeBookIds(selectedBookIds));
      } else {
        url.searchParams.delete('books');
      }
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
      initializeWordCloud();
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

if (copyUrlButton) {
  copyUrlButton.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
    window.alert('URL copied to clipboard');
  });
}