# Puglisi Web

Portfolio and informational website of Jason Puglisi.

Current revision uses the design codenamed Focus.

## Usage

Run `npm install -g gulp` followed by `npm install` to install the
dependencies. For development and browser live-reloading, run `gulp`.
To only build the source files for hosting, run `gulp build`.

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
