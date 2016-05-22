# Tachyons Documentation Website
**Warning: This is still very much a work in progress.**

Rewriting [Tachyons Docs](https://github.com/tachyons-css/tachyons-css.github.io) using reactjs, es6, webpack, and react-router. Boilerplate taken from [react-static-site-playground](https://github.com/markdalgleish/react-static-site-playground).

## Run it

```bash
$ npm install
$ npm start
$ open http://localhost:8080
```

## Deploy to github pages
```bash
# Do NOT push to gh-pages branch directly.
# Instead, run this command in the terminal for gh-pages to render from the dist/ folder Webpack compiled for us:

$ git subtree push --prefix dist origin gh-pages
```

## Contributing

Only edit code in `src/` directory. Webpack bundles and compiles that code into static files using [static-site-generator-webpack-plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin), and it outputs the static files to `dist/` where github pages reads from.


### Documentation Data

Running `npm start` runs `scripts/buildModuleStats` which generates data for each tachyon module and dumps it in `src/data/tachyonsStats.js`. Many files use this generated data to display module stats such as version, file size, selectors, rules, etc. Never manually add that data. Instead, bump the Tachyons module version in `package.json`, and the script will generate the data for you.

For static content, we keep most of that in `json` files in `src/data/`. If you need to modify text copy, please look there first.


## Notes

Notes during early WIP stage:

* To add new routes, currently you need to add it to both `src/paths.js` and `src/routes.js`.

