# Puglisi Web

[![Build Status](https://travis-ci.com/JasonPuglisi/puglisi-web.svg?branch=master)](https://travis-ci.com/JasonPuglisi/puglisi-web)

Portfolio and informational website of Jason Puglisi.

Current revision uses the design codenamed Focus.

## Usage

Ensure you have recent versions of [Node.js](https://nodejs.org/en/) and
[npm](https://www.npmjs.com/) installed. 

Run `npm i -g yarn` to install [yarn](https://yarnpkg.com/en/). Next, run
`yarn global add gulp` and `yarn` to install the dependencies. Finally, run
`gulp build` to build the static files.

For development and browser live-reloading, run `gulp`.

Your web server should serve static files from the [`public`](public)
directory.

Skills and experience can be added to the [`source/data`](source/data)
directory for easy extensibility.

## Overview

Features an immersive single-page design to showcase personal information,
skills, and experience. Experiences each have their own section. All skills
and experiences are loaded from a file for easy additions and modifications.

The site uses minimal resources after building, and does not use a CSS
framework.
