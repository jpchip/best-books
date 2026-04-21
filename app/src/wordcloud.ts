import WordCloud from "wordcloud";
import type { Book } from "./books";

let lastWordCloudStopHandler: (() => void) | null = null;

function drawReadSummaryOnCanvas(canvas: HTMLCanvasElement, read: number, total: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const padding = Math.max(10, Math.round(canvas.width * 0.02));
  const fontSize = Math.max(14, Math.round(canvas.width * 0.028));
  const text = `Read ${read} of ${total} books`;

  ctx.save();
  ctx.font = `${fontSize}px system-ui, -apple-system, "Segoe UI", sans-serif`;
  ctx.textBaseline = "bottom";
  ctx.textAlign = "left";

  const x = padding;
  const y = canvas.height - padding;

  ctx.lineJoin = "round";
  ctx.lineWidth = Math.max(3, fontSize * 0.2);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
  ctx.strokeText(text, x, y);

  ctx.fillStyle = "#212529";
  ctx.fillText(text, x, y);
  ctx.restore();
}

// Function to initialize WordCloud
export function initializeWordCloud(
  canvas: HTMLCanvasElement,
  books: Book[],
  selectedBookIds: string[],
  tooltip: HTMLDivElement,
  color: string = "#1d4ed8",
  readCount: number,
  totalCount: number
) {
    if (!canvas) return;

    // Set canvas dimensions based on parent container
    const parentWidth = canvas.parentElement?.clientWidth || 1000;
    const padding = 15; // 10px padding on each side
    canvas.width = parentWidth - (padding * 2);
    canvas.height = parentWidth - (padding * 2); // Keep it square

    // Deterministic order: largest first (required for packing), then title for stable ties.
    const list: WordCloud.ListEntry[] = [...books]
      .sort((a, b) => b.weight - a.weight || a.name.localeCompare(b.name))
      .map((book: Book) => [book.name, book.weight]);
    
    const bookToId: { [key: string]: string } = {};
    const bookToIsbn: { [key: string]: string } = {};
    const bookToAuthor: { [key: string]: string } = {};

    books.forEach(book => {
        bookToId[book.name] = book.id;
        bookToIsbn[book.name] = book.isbn;
        bookToAuthor[book.name] = book.author;
      });

    if (lastWordCloudStopHandler) {
      canvas.removeEventListener("wordcloudstop", lastWordCloudStopHandler);
    }
    lastWordCloudStopHandler = () => {
      drawReadSummaryOnCanvas(canvas, readCount, totalCount);
    };
    canvas.addEventListener("wordcloudstop", lastWordCloudStopHandler);
  
    WordCloud(canvas, {
      list: list,
      minRotation: 0,
      maxRotation: 0,
      gridSize: parentWidth < 768 ? 5 : 10,
      weightFactor: parentWidth < 768 ? 2 : 5,
      fontFamily: 'Average, Times, serif',
      shuffle: false,
      rotateRatio: 0,
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