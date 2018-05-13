# Puglisi Web

[![Build Status](https://travis-ci.com/JasonPuglisi/puglisi-web.svg?branch=master)](https://travis-ci.com/JasonPuglisi/puglisi-web)

Portfolio and informational website of Jason Puglisi.

Current revision uses the design codenamed Focus.

## Usage

Ensure you have recent versions of [Node.js](https://nodejs.org/en/) and
[npm](https://www.npmjs.com/) installed. 

Run `npm i -g yarn` to install [yarn](https://yarnpkg.com/en/). Next, run
`yarn add global gulp` and `yarn` to install the dependencies. Finally, run
`gulp build` to build the static files.

For development and browser live-reloading, run `gulp`.

Your web server should serve static files from the [`public`](public)
directory.

Projects can be added to
[`source/data/projects.json`](source/data/projects.json) for easy
extensibility.

## Overview

Features an immersive single-page design to showcase personal information,
skills, and projects. Projects each have their own section with a teaser
screenshot in the background.

Projects with source code hosted on GitHub have their star count updated
dynamically and displayed in their sections. All projects and details about
them are loaded from a file for easy additions and modifications.

The site uses minimal resources after building, and does not use a CSS
framework.
