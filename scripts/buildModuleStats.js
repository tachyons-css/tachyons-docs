var fs = require('fs')
var filesize = require('filesize')
var cssstats = require('cssstats')
var gzip = require('gzip-size')

/*
 * Build NPM stats for each Tachyons module to display in docs
 */
var TACHYONS_MODULES = [
  'tachyons',
  'background-size',
  'border-colors',
  'border-radius',
  'border-style',
  'border-widths',
  'borders',
  'box-sizing',
  'clears',
  'colors',
  'coordinates',
  'debug',
  'display',
  'floats',
  'font-family',
  'font-style',
  'font-weight',
  'forms',
  'heights',
  'hovers',
  'images',
  'letter-spacing',
  'line-height',
  'links',
  'lists',
  'max-widths',
  'opacity',
  'outlines',
  'overflow',
  'position',
  'skins',
  'spacing',
  'text-align',
  'text-decoration',
  'text-transform',
  'type-scale',
  'typography',
  'utilities',
  'vertical-align',
  'visibility',
  'white-space',
  'widths',
  'word-break',
]

var getFullLibStats = function() {
    var module = require(`tachyons/package.json`)
    var moduleCss = fs.readFileSync(`./node_modules/tachyons/css/tachyons.min.css`, 'utf8')
    var moduleObj = cssstats(moduleCss)
    var moduleSize = filesize(moduleObj.gzipSize)
    return data = {
      id: module.name,
      name: module.name,
      version: module.version,
      fileSize: moduleSize
    }
};

var buildNpmData = function() {
  var modules = TACHYONS_MODULES.map( name => {
    if(name === 'tachyons') {
      return getFullLibStats();
    }

    var module = require(`tachyons-${name}/package.json`)
    var moduleCss = fs.readFileSync(`./node_modules/tachyons-${name}/css/tachyons-${name}.min.css`, 'utf8')
    var moduleObj = cssstats(moduleCss)
    var moduleSize = filesize(moduleObj.gzipSize)

    // moduleObj contains a TON more info about that particular tachyons module.
    // Just picking the stuff we want for now.
    return data =  {
      id: module.name,
      name: module.name,
      version: module.version,
      fileSize: moduleSize,
      declarations: moduleObj.declarations.total,
      selectors: moduleObj.selectors.total,
      specificity: moduleObj.selectors.specificity,
      rules: {
        total: moduleObj.rules.total,
        max: moduleObj.rules.size.total,
        average: moduleObj.rules.size.average
      }
    }
  })
  return modules
}

var npmModuleData = buildNpmData();
var template = 'module.exports = ' + JSON.stringify(npmModuleData, null, 2);
fs.writeFile('src/data/tachyonsStats.js',  template, 'utf-8');

