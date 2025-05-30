import WordCloud from "wordcloud";
import type { Book } from "./books";



// Function to initialize WordCloud
export function initializeWordCloud(canvas: HTMLCanvasElement, books: Book[], selectedBookIds: string[], tooltip: HTMLDivElement, color: string = '#00FF00') {
    if (!canvas) return;

    // Set canvas dimensions based on parent container
    const parentWidth = canvas.parentElement?.clientWidth || 1000;
    canvas.width = parentWidth;
    canvas.height = parentWidth; // Keep it square

    const list: WordCloud.ListEntry[] = books.map((book: Book) => [book.name, book.weight]);
    
    const bookToId: { [key: string]: string } = {};
    const bookToIsbn: { [key: string]: string } = {};
    const bookToAuthor: { [key: string]: string } = {};

    books.forEach(book => {
        bookToId[book.name] = book.id;
        bookToIsbn[book.name] = book.isbn;
        bookToAuthor[book.name] = book.author;
      });
  
    WordCloud(canvas, {
      list: list,
      minRotation: 0,
      maxRotation: 0,
      gridSize: canvas.parentElement?.clientWidth < 768 ? 5 : 10,
      weightFactor: canvas.parentElement?.clientWidth < 768 ? 2 : 5,
      fontFamily: 'Average, Times, serif',
      shuffle: false,
      color: (word: string) => {
        const wordId = bookToId[word];
        return selectedBookIds.includes(wordId) ? color : '#000000';
      },
      hover: (item: WordCloud.ListEntry, _dimension: WordCloud.Dimension, event: MouseEvent) => {
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