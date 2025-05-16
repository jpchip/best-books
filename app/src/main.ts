import WordCloud from "wordcloud";
import type { Book } from './books';
import { books } from './books';

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

// Add this at the top level to track selected books
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

// Update the WordCloud initialization with hover functionality
const canvas = document.getElementById('my_canvas');
if (canvas) {
  // Get initial selected books from URL
  const urlParams = new URLSearchParams(window.location.search);
  selectedBookIds = urlParams.get('books')?.split(',') || [];

  WordCloud(canvas, { 
    list: list, 
    minRotation: 0, 
    maxRotation: 0, 
    weightFactor: 3,
    fontFamily: 'Average, Times, serif',
    color: function(word: string) {
      // Convert the word back to its ID to check if it's selected
      const wordId = bookToId[word];
      return selectedBookIds.includes(wordId) ? '#00FF00' : '#000000';
    },
    hover: function(item: WordCloud.ListEntry, dimension: WordCloud.Dimension, event: MouseEvent) {
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

  // Add mouseout event to hide tooltip
  canvas.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
}

const form = document.getElementById('read_books_form');
if (form) {
  // Create checkboxes for each book
  books.forEach(book => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = book.name;
    checkbox.name = 'book';
    
    // Check if this book is in the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const selectedIds = urlParams.get('books')?.split(',') || [];
    if (selectedIds.includes(book.id)) {
      checkbox.checked = true;
    }
    
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(book.name));
    form.appendChild(label);
    form.appendChild(document.createElement('br'));
  });

  // Handle checkbox changes
  form.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    if (target.type === 'checkbox') {
      const checkboxes = form.querySelectorAll('input[type="checkbox"]');
      selectedBookIds = Array.from(checkboxes)
        .filter((cb: HTMLInputElement) => cb.checked)
        .map((cb: HTMLInputElement) => bookToId[cb.value]);
      
      // Update URL with selected books
      const url = new URL(window.location.href);
      if (selectedBookIds.length > 0) {
        url.searchParams.set('books', selectedBookIds.join(','));
      } else {
        url.searchParams.delete('books');
      }
      window.history.pushState({}, '', url.toString());

      const shareUrl = document.getElementById('share_url');
      if (shareUrl) {
        shareUrl.textContent = url.toString();
        shareUrl.href = url.toString();
      }

      // Redraw the word cloud with updated colors
      if (canvas) {
        WordCloud(canvas, { 
          list: list, 
          minRotation: 0, 
          maxRotation: 0, 
          weightFactor: 3,
          fontFamily: 'Average, Times, serif',
          color: function(word: string) {
            const wordId = bookToId[word];
            return selectedBookIds.includes(wordId) ? '#00FF00' : '#000000';
          },
          hover: function(item: WordCloud.ListEntry, dimension: WordCloud.Dimension, event: MouseEvent) {
            
          }
        });
      }
    }
  });
}

const downloadButton = document.getElementById('download_button');
if (downloadButton) {
  downloadButton.addEventListener('click', () => {
    if (canvas) {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'books_everyone_should_read.png';
      link.click();

      
    }
  });
}

const readCount = document.getElementById('read_count');
if (readCount) {
  readCount.textContent = selectedBookIds.length.toString();
}

const totalCount = document.getElementById('total_count');
if (totalCount) {
  totalCount.textContent = books.length.toString();
}