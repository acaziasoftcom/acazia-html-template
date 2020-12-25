# GULP Sass/Nunjucks setup
Static site workflow using GULP 4 with Sass, Imagemin, SVG sprites and Nunjucks.

## The project
- `public` contains all the compiled `css` and `js` files.
- `pages` and `templates` contain all the nunjucks layout files and partials. Any new view should be added to `pages`.
- Configuration files are `tasks/tasks.js` and `tasks/config.js`.

## Dependencies
- Node.js (>=8.0.0)
- Gulp

### Node.js

The major dependency is Node.js including the Node.js package manager called `npm`. The other dependencies can be installed with npm.

### Gulp

This project uses Gulp for its build system, with convenient methods for working with the project. It's how we compile and minify our code, add vendor prefixes, optimize images, build for production and more.

#### Installing Gulp

Using the above mentioned package manager, installing gulp is as easy as entering this into your terminal:

```
npm install -g gulp-cli
```

## Setting up the project
```
1. Run npm install
2. Run gulp
3. Done
```

## Usage
- Production ready files can be built using `gulp --env production`
- Building image files or SVG sprites can be done using either `gulp images` or `gulp icons`
