# Puglisi Web

Jason Puglisi's personal website (the most recent of many iterations).

### Why this iteration?

Throughout development of this, I had/have a number of goals:

- Make a responsive, nice looking website without Bootstrap or similar
- Make a responsive, **nice looking website** that doesn't look like Bootstrap
- Learn Sass
- Learn Flexbox
- Learn Gulp/build systems
- Keep it simple - no Ruby/PHP if it can be avoided (I might want to do some
  server-side stuff like changing colors/images based on time of day, which
  would be a bit more awkward with JavaScript)

## Development & Hosting

Make sure you have [Node.js](https://nodejs.org/) installed, and run
`npm install -g gulp` followed by `npm install` in the root directory.

For development and browser live-reloading, run `gulp`. To only build the
source files for hosting, run `gulp build`. Your web server should serve
static files from the `public` directory.

## Todo

The website is pretty barebones right now, so I plan to add the following:

- General personal information
- Project overview and individual project pages
- Maybe live versions of some older websites for archive purposes (this would
  require handling PHP...)
