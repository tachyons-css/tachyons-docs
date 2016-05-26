var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var ejs = require('ejs');
var fs = require('fs');
var path = require('path');
var template = ejs.compile(fs.readFileSync(__dirname + '/src/template.ejs', 'utf-8'))
var paths = require('./src/paths')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: 'dist',
    publicPath: '/',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'src': __dirname + '/src',
      'data': __dirname + '/src/data',
      'components': __dirname + '/src/components',
    },
    root: path.resolve('./src') // must be absolute path
  },

  module: {
    loaders: [
      {
        // Except for node_modules, auto-reloads browser when you edit *.js$ files and pre-process them using Babel
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader',
          'babel-loader?cacheDirectory&presets[]=react&presets[]=es2015&presets[]=stage-0' // invokes Babel with presets react, es6, and stage-0
        ]
      },
      { test: /\.js?$/, include: /scripts/, loaders: [ 'babel-loader?cacheDirectory&presets[]=react&presets[]=es2015&presets[]=stage-0' ] },
      //{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.ejs$/, loader: 'ejs-compiled-loader' },
      { test: /\.md$/, loader: 'html-loader!markdown-loader' }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('index.js', paths, { template: template })
  ]
};
