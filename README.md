# Puglisi Web

[![Deploy to GitHub Pages](https://github.com/JasonPuglisi/puglisi-web/actions/workflows/deploy-pages.yml/badge.svg?branch=main)](https://github.com/JasonPuglisi/puglisi-web/actions/workflows/deploy-pages.yml)

Jason Puglisi's personal website.

## Usage

Ensure you have recent versions of [Node.js](https://nodejs.org/en/) and
[npm](https://www.npmjs.com/) installed.

Run `npm i -g yarn` to install [yarn](https://yarnpkg.com/en/). Next, run
`yarn global add gulp-cli` and `yarn` to install the dependencies. Finally, run
`gulp build` to build the static files.

For development and browser live-reloading, run `gulp`.

Your web server should serve static files from the [`public`](public)
directory.
