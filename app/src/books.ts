export interface Book {
    name: string;
    weight: number;
    isbn: string;
    id: string;
    author: string;
  }
  
 export const books: Book[] = [
    {
      name: 'To Kill a Mockingbird',
      weight: 11,
      isbn: '9780446310789',
      id: 'b1',
      author: 'Harper Lee'
    },
    {
      name: '1984',
      weight: 9,
      isbn: '9780451524935',
      id: 'b2',
      author: 'George Orwell'
    },
    {
      name: 'Catch-22',
      weight: 9,
      isbn: '9780684833392',
      id: 'b3',
      author: 'Joseph Heller'
    },
    {
      name: 'Crime and Punishment',
      weight: 9,
      isbn: '9780140449136',
      id: 'b4',
      author: 'Fyodor Dostoevsky'
    },
    {
      name: 'One Hundred Years of Solitude',
      weight: 9,
      isbn: '9780060883287',
      id: 'b5',
      author: 'Gabriel García Márquez'
    },
    {
      name: 'The Catcher in the Rye',
      weight: 9,
      isbn: '9780316769488',
      id: 'b6',
      author: 'J.D. Salinger'
    },
    {
      name: 'The Great Gatsby',
      weight: 9,
      isbn: '9780743273565',
      id: 'b7',
      author: 'F. Scott Fitzgerald'
    },
    {
      name: 'The Hitchhiker\'s Guide to the Galaxy',
      weight: 9,
      isbn: '9780345391803',
      id: 'b8',
      author: 'Douglas Adams'
    },
    {
      name: 'Moby-Dick',
      weight: 8,
      isbn: '9780142437247',
      id: 'b9',
      author: 'Herman Melville'
    },
    {
      name: 'The Lord of the Rings',
      weight: 8,
      isbn: '9780544003415',
      id: 'b10',
      author: 'J.R.R. Tolkien'
    },
    {
      name: 'War and Peace',
      weight: 8,
      isbn: '9780140447934',
      id: 'b11',
      author: 'Leo Tolstoy'
    },
    {
      name: 'Animal Farm',
      weight: 7,
      isbn: '9780451526342',
      id: 'b12',
      author: 'George Orwell'
    },
    {
      name: 'Anna Karenina',
      weight: 7,
      isbn: '9780140449174',
      id: 'b13',
      author: 'Leo Tolstoy'
    },
    {
      name: 'Lolita',
      weight: 7,
      isbn: '9780679723165',
      id: 'b14',
      author: 'Vladimir Nabokov'
    },
    {
      name: 'Lord of the Flies',
      weight: 7,
      isbn: '9780140283334',
      id: 'b15',
      author: 'William Golding'
    },
    {
      name: 'Pride and Prejudice',
      weight: 7,
      isbn: '9780141439518',
      id: 'b16',
      author: 'Jane Austen'
    },
    {
      name: 'The Adventures of Huckleberry Finn',
      weight: 7,
      isbn: '9780142437179',
      id: 'b17',
      author: 'Mark Twain'
    },
    {
      name: 'The Grapes of Wrath',
      weight: 7,
      isbn: '9780143039433',
      id: 'b18',
      author: 'John Steinbeck'
    },
    {
      name: 'The Stranger',
      weight: 7,
      isbn: '9780679720201',
      id: 'b19',
      author: 'Albert Camus'
    },
    {
      name: 'Brave New World',
      weight: 6,
      isbn: '9780060850524',
      id: 'b20',
      author: 'Aldous Huxley'
    },
    {
      name: 'Don Quixote',
      weight: 6,
      isbn: '9780060934347',
      id: 'b21',
      author: 'Miguel de Cervantes'
    },
    {
      name: 'Fahrenheit 451',
      weight: 6,
      isbn: '9781451673319',
      id: 'b22',
      author: 'Ray Bradbury'
    },
    {
      name: 'Harry Potter',
      weight: 6,
      isbn: '9780747532743',
      id: 'b23',
      author: 'J.K. Rowling'
    },
    {
      name: 'His Dark Materials',
      weight: 6,
      isbn: '9780440238133',
      id: 'b24',
      author: 'Philip Pullman'
    },
    {
      name: 'Jane Eyre',
      weight: 6,
      isbn: '9780141441146',
      id: 'b25',
      author: 'Charlotte Brontë'
    },
    {
      name: 'Les Misérables',
      weight: 6,
      isbn: '9780140444308',
      id: 'b26',
      author: 'Victor Hugo'
    },
    {
      name: 'Life of Pi',
      weight: 6,
      isbn: '9780156027328',
      id: 'b27',
      author: 'Yann Martel'
    },
    {
      name: 'On the Road',
      weight: 6,
      isbn: '9780140283297',
      id: 'b28',
      author: 'Jack Kerouac'
    },
    {
      name: 'Remembrance of Things Past',
      weight: 6,
      isbn: '9780141180361',
      id: 'b29',
      author: 'Marcel Proust'
    },
    {
      name: 'Slaughterhouse-Five',
      weight: 6,
      isbn: '9780385333849',
      id: 'b30',
      author: 'Kurt Vonnegut'
    },
    {
      name: 'Wuthering Heights',
      weight: 6,
      isbn: '9780141439556',
      id: 'b31',
      author: 'Emily Brontë'
    },
    {
      name: 'A Clockwork Orange',
      weight: 5,
      isbn: '9780393357526',
      id: 'b32',
      author: 'Anthony Burgess'
    },
    {
      name: 'A Confederacy of Dunces',
      weight: 5,
      isbn: '9780802130204',
      id: 'b33',
      author: 'John Kennedy Toole'
    },
    {
      name: 'Beloved',
      weight: 5,
      isbn: '9781400033416',
      id: 'b34',
      author: 'Toni Morrison'
    },
    {
      name: 'David Copperfield',
      weight: 5,
      isbn: '9780140439441',
      id: 'b35',
      author: 'Charles Dickens'
    },
    {
      name: 'For Whom the Bell Tolls',
      weight: 5,
      isbn: '9780684803357',
      id: 'b36',
      author: 'Ernest Hemingway'
    },
    {
      name: 'Gone With the Wind',
      weight: 5,
      isbn: '9781416548942',
      id: 'b37',
      author: 'Margaret Mitchell'
    },
    {
      name: 'Heart of Darkness',
      weight: 5,
      isbn: '9780140281637',
      id: 'b38',
      author: 'Joseph Conrad'
    },
    {
      name: 'Little Women',
      weight: 5,
      isbn: '9780140390698',
      id: 'b39',
      author: 'Louisa May Alcott'
    },
    {
      name: 'Tess of the D\'Urbervilles',
      weight: 5,
      isbn: '9780141439594',
      id: 'b40',
      author: 'Thomas Hardy'
    },
    {
      name: 'The Chronicles of Narnia',
      weight: 5,
      isbn: '9780064404990',
      id: 'b41',
      author: 'C.S. Lewis'
    },
    {
      name: 'The Color Purple',
      weight: 5,
      isbn: '9780156028356',
      id: 'b42',
      author: 'Alice Walker'
    },
    {
      name: 'The Handmaid\'s Tale',
      weight: 5,
      isbn: '9780385490818',
      id: 'b43',
      author: 'Margaret Atwood'
    },
    {
      name: 'The Hobbit',
      weight: 5,
      isbn: '9780547928227',
      id: 'b44',
      author: 'J.R.R. Tolkien'
    },
    {
      name: 'The Kite Runner',
      weight: 5,
      isbn: '9781594631931',
      id: 'b45',
      author: 'Khaled Hosseini'
    },
    {
      name: 'The Old Man and the Sea',
      weight: 5,
      isbn: '9780684801223',
      id: 'b46',
      author: 'Ernest Hemingway'
    },
    {
      name: 'The Road',
      weight: 5,
      isbn: '9780307387899',
      id: 'b47',
      author: 'Cormac McCarthy'
    },
    {
      name: 'The Time Traveler\'s Wife',
      weight: 5,
      isbn: '9780156029438',
      id: 'b48',
      author: 'Audrey Niffenegger'
    },
    {
      name: 'A Prayer for Owen Meany',
      weight: 4,
      isbn: '9780345361790',
      id: 'b49',
      author: 'John Irving'
    },
    {
      name: 'A Tale of Two Cities',
      weight: 4,
      isbn: '9780141439600',
      id: 'b50',
      author: 'Charles Dickens'
    },
    {
      name: 'Alice\'s Adventures in Wonderland',
      weight: 4,
      isbn: '9780141439761',
      id: 'b51',
      author: 'Lewis Carroll'
    },
    {
      name: 'All Quiet on the Western Front',
      weight: 4,
      isbn: '9780449213940',
      id: 'b52',
      author: 'Erich Maria Remarque'
    },
    {
      name: 'Atonement',
      weight: 4,
      isbn: '9780385721790',
      id: 'b53',
      author: 'Ian McEwan'
    },
    {
      name: 'Dune',
      weight: 4,
      isbn: '9780441172719',
      id: 'b54',
      author: 'Frank Herbert'
    },
    {
      name: 'Emma',
      weight: 4,
      isbn: '9780141439587',
      id: 'b55',
      author: 'Jane Austen'
    },
    {
      name: 'Ender\'s Game',
      weight: 4,
      isbn: '9780812550702',
      id: 'b56',
      author: 'Orson Scott Card'
    },
    {
      name: 'Invisible Man',
      weight: 4,
      isbn: '9780679732761',
      id: 'b57',
      author: 'Ralph Ellison'
    },
    {
      name: 'Love in the Time of Cholera',
      weight: 4,
      isbn: '9780307387264',
      id: 'b58',
      author: 'Gabriel García Márquez'
    },
    {
      name: 'Madame Bovary',
      weight: 4,
      isbn: '9780140449129',
      id: 'b59',
      author: 'Gustave Flaubert'
    },
    {
      name: 'Memoirs of a Geisha',
      weight: 4,
      isbn: '9781400096893',
      id: 'b60',
      author: 'Arthur Golden'
    },
    {
      name: 'Middlemarch',
      weight: 4,
      isbn: '9780141439549',
      id: 'b61',
      author: 'George Eliot'
    },
    {
      name: 'Midnight\'s Children',
      weight: 4,
      isbn: '9780812976533',
      id: 'b62',
      author: 'Salman Rushdie'
    },
    {
      name: 'Of Mice and Men',
      weight: 4,
      isbn: '9780140177398',
      id: 'b63',
      author: 'John Steinbeck'
    },
    {
      name: 'One Flew Over the Cuckoo\'s Nest',
      weight: 4,
      isbn: '9780451163967',
      id: 'b64',
      author: 'Ken Kesey'
    },
    {
      name: 'Rebecca',
      weight: 4,
      isbn: '9780380730407',
      id: 'b65',
      author: 'Daphne du Maurier'
    },
    {
      name: 'The Bell Jar',
      weight: 4,
      isbn: '9780061148514',
      id: 'b66',
      author: 'Sylvia Plath'
    },
    {
      name: 'The Fountainhead',
      weight: 4,
      isbn: '9780451191151',
      id: 'b67',
      author: 'Ayn Rand'
    },
    {
      name: 'The Good Earth',
      weight: 4,
      isbn: '9781416500186',
      id: 'b68',
      author: 'Pearl S. Buck'
    },
    {
      name: 'The Leopard',
      weight: 4,
      isbn: '9780679731214',
      id: 'b69',
      author: 'Giuseppe Tomasi di Lampedusa'
    },
    {
      name: 'The Little Prince',
      weight: 4,
      isbn: '9780156013987',
      id: 'b70',
      author: 'Antoine de Saint-Exupéry'
    },
    {
      name: 'The Master and Margarita',
      weight: 4,
      isbn: '9780141180144',
      id: 'b71',
      author: 'Mikhail Bulgakov'
    },
    {
      name: 'The Scarlet Letter',
      weight: 4,
      isbn: '9780142437261',
      id: 'b72',
      author: 'Nathaniel Hawthorne'
    },
    {
      name: 'The Sound and the Fury',
      weight: 4,
      isbn: '9780679732242',
      id: 'b73',
      author: 'William Faulkner'
    },
    {
      name: 'The Three Musketeers',
      weight: 4,
      isbn: '9780140440256',
      id: 'b74',
      author: 'Alexandre Dumas'
    },
    {
      name: 'Ulysses',
      weight: 4,
      isbn: '9780679722762',
      id: 'b75',
      author: 'James Joyce'
    },
    {
      name: 'A Farewell to Arms',
      weight: 3,
      isbn: '9780684801469',
      id: 'b76',
      author: 'Ernest Hemingway'
    },
    {
      name: 'A Thousand Splendid Suns',
      weight: 3,
      isbn: '9781594483851',
      id: 'b77',
      author: 'Khaled Hosseini'
    },
    {
      name: 'Anne of Green Gables',
      weight: 3,
      isbn: '9780141321592',
      id: 'b78',
      author: 'L.M. Montgomery'
    },
    {
      name: 'Atlas Shrugged',
      weight: 3,
      isbn: '9780451191144',
      id: 'b79',
      author: 'Ayn Rand'
    },
    {
      name: 'Blood Meridian',
      weight: 3,
      isbn: '9780679728757',
      id: 'b80',
      author: 'Cormac McCarthy'
    },
    {
      name: 'Cold Comfort Farm',
      weight: 3,
      isbn: '9780141441597',
      id: 'b81',
      author: 'Stella Gibbons'
    },
    {
      name: 'Crash',
      weight: 3,
      isbn: '9780374527879',
      id: 'b82',
      author: 'J.G. Ballard'
    },
    {
      name: 'Disgrace',
      weight: 3,
      isbn: '9780143115281',
      id: 'b83',
      author: 'J.M. Coetzee'
    },
    {
      name: 'Do Androids Dream of Electric Sheep?',
      weight: 3,
      isbn: '9780345404473',
      id: 'b84',
      author: 'Philip K. Dick'
    },
    {
      name: 'Dracula',
      weight: 3,
      isbn: '9780141439846',
      id: 'b85',
      author: 'Bram Stoker'
    },
    {
      name: 'East of Eden',
      weight: 3,
      isbn: '9780140186390',
      id: 'b86',
      author: 'John Steinbeck'
    },
    {
      name: 'Foundation',
      weight: 3,
      isbn: '9780553293357',
      id: 'b87',
      author: 'Isaac Asimov'
    },
    {
      name: 'Frankenstein',
      weight: 3,
      isbn: '9780141439471',
      id: 'b88',
      author: 'Mary Shelley'
    },
    {
      name: 'Great Expectations',
      weight: 3,
      isbn: '9780141439563',
      id: 'b89',
      author: 'Charles Dickens'
    },
    {
      name: 'Lonesome Dove',
      weight: 3,
      isbn: '9780684804514',
      id: 'b90',
      author: 'Larry McMurtry'
    },
    {
      name: 'Middlesex',
      weight: 3,
      isbn: '9780312427733',
      id: 'b91',
      author: 'Jeffrey Eugenides'
    },
    {
      name: 'Of Human Bondage',
      weight: 3,
      isbn: '9780141441138',
      id: 'b92',
      author: 'W. Somerset Maugham'
    },
    {
      name: 'Oscar and Lucinda',
      weight: 3,
      isbn: '9780679727668',
      id: 'b93',
      author: 'Peter Carey'
    },
    {
      name: 'Persuasion',
      weight: 3,
      isbn: '9780141439686',
      id: 'b94',
      author: 'Jane Austen'
    },
    {
      name: 'Possession',
      weight: 3,
      isbn: '9780679735908',
      id: 'b95',
      author: 'A.S. Byatt'
    },
    {
      name: 'Scoop',
      weight: 3,
      isbn: '9780316926666',
      id: 'b96',
      author: 'Evelyn Waugh'
    },
    {
      name: 'Sense and Sensibility',
      weight: 3,
      isbn: '9780141439662',
      id: 'b97',
      author: 'Jane Austen'
    },
    {
      name: 'Siddhartha',
      weight: 3,
      isbn: '9780811200684',
      id: 'b98',
      author: 'Hermann Hesse'
    },
    {
      name: 'Stranger in a Strange Land',
      weight: 3,
      isbn: '9780441788385',
      id: 'b99',
      author: 'Robert A. Heinlein'
    },
    {
      name: 'The Amazing Adventures of Kavalier and Clay',
      weight: 3,
      isbn: '9780312282998',
      id: 'b100',
      author: 'Michael Chabon'
    },
    {
      name: 'The Brothers Karamazov',
      weight: 3,
      isbn: '9780374528379',
      id: 'b101',
      author: 'Fyodor Dostoevsky'
    },
    {
      name: 'The Curious Incident of the Dog in the Night-time',
      weight: 3,
      isbn: '9781400032716',
      id: 'b102',
      author: 'Mark Haddon'
    },
    {
      name: 'The Da Vinci Code',
      weight: 3,
      isbn: '9780307474278',
      id: 'b103',
      author: 'Dan Brown'
    },
    {
      name: 'The Glass Bead Game',
      weight: 3,
      isbn: '9780312278496',
      id: 'b104',
      author: 'Hermann Hesse'
    },
    {
      name: 'The Jungle',
      weight: 3,
      isbn: '9780140390315',
      id: 'b105',
      author: 'Upton Sinclair'
    },
    {
      name: 'The Life and Opinions of Tristram Shandy, Gentleman',
      weight: 3,
      isbn: '9780141439778',
      id: 'b106',
      author: 'Laurence Sterne'
    },
    {
      name: 'The Name of the Rose',
      weight: 3,
      isbn: '9780156001311',
      id: 'b107',
      author: 'Umberto Eco'
    },
    {
      name: 'The Picture of Dorian Gray',
      weight: 3,
      isbn: '9780141439570',
      id: 'b108',
      author: 'Oscar Wilde'
    },
    {
      name: 'The Remains of the Day',
      weight: 3,
      isbn: '9780571283876',
      id: 'b109',
      author: 'Kazuo Ishiguro'
    },
    {
      name: 'The Tin Drum',
      weight: 3,
      isbn: '9780679725756',
      id: 'b110',
      author: 'Günter Grass'
    },
    {
      name: 'The Unbearable Lightness of Being',
      weight: 3,
      isbn: '9780061148521',
      id: 'b111',
      author: 'Milan Kundera'
    },
    {
      name: 'The Wind in the Willows',
      weight: 3,
      isbn: '9780141326177',
      id: 'b112',
      author: 'Kenneth Grahame'
    },
    {
      name: 'Twilight',
      weight: 3,
      isbn: '9780316015844',
      id: 'b113',
      author: 'Stephenie Meyer'
    },
    {
      name: 'Underworld',
      weight: 3,
      isbn: '9780684848150',
      id: 'b114',
      author: 'Don DeLillo'
    },
    {
      name: 'Vanity Fair',
      weight: 3,
      isbn: '9780141439839',
      id: 'b115',
      author: 'William Makepeace Thackeray'
    },
    {
      name: 'Watership Down',
      weight: 3,
      isbn: '9780743277709',
      id: 'b116',
      author: 'Richard Adams'
    },
    {
      name: 'Winnie the Pooh',
      weight: 3,
      isbn: '9780525444435',
      id: 'b117',
      author: 'A.A. Milne'
    },
  ];
  