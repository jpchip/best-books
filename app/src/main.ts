import WordCloud from "wordcloud";

const list: WordCloud.ListEntry[] = [
  ['To Kill a Mockingbird', 11],
  ['1984', 9],
  ['Catch-22', 9],
  ['Crime and Punishment', 9],
  ['One Hundred Years of Solitude', 9],
  ['The Catcher in the Rye', 9],
  ['The Great Gatsby', 9],
  ['The Hitchhiker\'s Guide to the Galaxy', 9],
  ['Moby-Dick', 8],
  ['The Lord of the Rings', 8],
  ['War and Peace', 8],
  ['Animal Farm', 7],
  ['Anna Karenina', 7],
  ['Lolita', 7],
  ['Lord of the Flies', 7],
  ['Pride and Prejudice', 7],
  ['The Adventures of Huckleberry Finn', 7],
  ['The Grapes of Wrath', 7],
  ['The Stranger', 7],
  ['Brave New World', 6],
  ['Don Quixote', 6],
  ['Fahrenheit 451', 6],
  ['Harry Potter', 6],
  ['His Dark Materials', 6],
  ['Jane Eyre', 6],
  ['Les Misérables', 6],
  ['Life of Pi', 6],
  ['On the Road', 6],
  ['Remembrance of Things Past', 6],
  ['Slaughterhouse-Five', 6],
  ['Wuthering Heights', 6],
  ['A Clockwork Orange', 5],
  ['A Confederacy of Dunces', 5],
  ['Beloved', 5],
  ['David Copperfield', 5],
  ['For Whom the Bell Tolls', 5],
  ['Gone With the Wind', 5],
  ['Heart of Darkness', 5],
  ['Little Women', 5],
  ['Tess of the D\'Urbervilles', 5],
  ['The Chronicles of Narnia', 5],
  ['The Color Purple', 5],
  ['The Handmaid\'s Tale', 5],
  ['The Hobbit', 5],
  ['The Kite Runner', 5],
  ['The Old Man and the Sea', 5],
  ['The Road', 5],
  ['The Time Traveler\'s Wife', 5],
  ['A Prayer for Owen Meany', 4],
  ['A Tale of Two Cities', 4],
  ['Alice\'s Adventures in Wonderland', 4],
  ['All Quiet on the Western Front', 4],
  ['Atonement', 4],
  ['Dune', 4],
  ['Emma', 4],
  ['Ender\'s Game', 4],
  ['Invisible Man', 4],
  ['Love in the Time of Cholera', 4],
  ['Madame Bovary', 4],
  ['Memoirs of a Geisha', 4],
  ['Middlemarch', 4],
  ['Midnight\'s Children', 4],
  ['Of Mice and Men', 4],
  ['One Flew Over the Cuckoo\'s Nest', 4],
  ['Rebecca', 4],
  ['The Bell Jar', 4],
  ['The Fountainhead', 4],
  ['The Good Earth', 4],
  ['The Leopard', 4],
  ['The Little Prince', 4],
  ['The Master and Margarita', 4],
  ['The Scarlet Letter', 4],
  ['The Sound and the Fury', 4],
  ['The Three Musketeers', 4],
  ['Ulysses', 4],
  ['A Farewell to Arms', 3],
  ['A Thousand Splendid Suns', 3],
  ['Anne of Green Gables', 3],
  ['Atlas Shrugged', 3],
  ['Blood Meridian', 3],
  ['Cold Comfort Farm', 3],
  ['Crash', 3],
  ['Disgrace', 3],
  ['Do Androids Dream of Electric Sheep?', 3],
  ['Dracula', 3],
  ['East of Eden', 3],
  ['Foundation', 3],
  ['Frankenstein', 3],
  ['Great Expectations', 3],
  ['Lonesome Dove', 3],
  ['Middlesex', 3],
  ['Of Human Bondage', 3],
  ['Oscar and Lucinda', 3],
  ['Persuasion', 3],
  ['Possession', 3],
  ['Scoop', 3],
  ['Sense and Sensibility', 3],
  ['Siddhartha', 3],
  ['Stranger in a Strange Land', 3],
  ['The Amazing Adventures of Kavalier and Clay', 3],
  ['The Brothers Karamazov', 3],
  ['The Curious Incident of the Dog in the Night-time', 3],
  ['The Da Vinci Code', 3],
  ['The Glass Bead Game', 3],
  ['The Jungle', 3],
  ['The Life and Opinions of Tristram Shandy, Gentleman', 3],
  ['The Name of the Rose', 3],
  ['The Picture of Dorian Gray', 3],
  ['The Remains of the Day', 3],
  ['The Tin Drum', 3],
  ['The Unbearable Lightness of Being', 3],
  ['The Wind in the Willows', 3],
  ['Twilight', 3],
  ['Underworld', 3],
  ['Vanity Fair', 3],
  ['Watership Down', 3],
  ['Winnie the Pooh', 3],
];

// Add this mapping object at the top level
const bookToId: { [key: string]: string } = {};
const idToBook: { [key: string]: string } = {};

// Generate short IDs for each book
list.forEach(([book, _], index) => {
  const shortId = `b${index + 1}`; // Creates IDs like b1, b2, b3, etc.
  bookToId[book] = shortId;
  idToBook[shortId] = book;
});

// Add this at the top level to track selected books
let selectedBookIds: string[] = [];

// Add this mapping object for book ISBNs
const bookToIsbn: { [key: string]: string } = {
  'To Kill a Mockingbird': '9780446310789',
  '1984': '9780451524935',
  'Catch-22': '9780684833392',
  'Crime and Punishment': '9780143107637',
  'One Hundred Years of Solitude': '9780060883287',
  'The Catcher in the Rye': '9780316769488',
  'The Great Gatsby': '9780743273565',
  'The Hitchhiker\'s Guide to the Galaxy': '9780345391803',
  'Moby-Dick': '9780142437247',
  'The Lord of the Rings': '9780544003415',
  // Add more ISBNs as needed
};

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
      
      if (isbn) {
        const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`;
        tooltip.innerHTML = `
          <img src="${coverUrl}" alt="${bookTitle}" style="max-width: 100px; height: auto;">
          <div style="margin-top: 5px;">${bookTitle}</div>
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
  list.forEach(([book, _]) => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = book;
    checkbox.name = 'book';
    
    // Check if this book is in the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const selectedIds = urlParams.get('books')?.split(',') || [];
    if (selectedIds.includes(bookToId[book])) {
      checkbox.checked = true;
    }
    
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(book));
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
      link.download = 'top_100_books.png';
      link.click();

      
    }
  });
}

const readCount = document.getElementById('read_count');
if (readCount) {
  readCount.textContent = selectedBookIds.length.toString();
}