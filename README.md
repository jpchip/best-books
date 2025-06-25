# Best Books

This repo contains a simple web app that displays a customizable word cloud of [Books Everyone Should Read](https://informationisbeautiful.net/visualizations/novels-everyone-should-read-interactive/).

## Story

When I worked for Earthling Interactive, I discovered [this list](https://informationisbeautiful.net/visualizations/novels-everyone-should-read-interactive/) and thought it would be fun to have everyone in the office highlight the books they've read, and then I would hang them all 
up on our office wall as a kind of [office art project](https://www.flickr.com/photos/24311566@N07/albums/72157626204859903/). Looking back, I realize it mostly ended up being a way to shame/embarass my office mates who weren't big readers, and I feel
kinda bad about it.

Anyway, now you too can shame your friends/family/co-workers/enemies from the comfort of a website!

My current list: https://books-everyone-should-read.netlify.app/?books=%2FRS2NYSWhAMigxQAeAIY&color=%234625e9

## Built With

- TypeScript 
- Vite
- [WordCloud2](https://github.com/timdream/wordcloud2.js)
- [Open Library Covers API](https://openlibrary.org/dev/docs/api/covers)
- [Books and Company](https://booksco.com/) (Support your local bookstore!)

## Development

```
cp app
npm install
npm run dev
```

Starts webserver at localhost:5173

Build with `npm run build`
