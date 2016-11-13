axis = require 'axis'
rupture = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
css_pipeline = require 'css-pipeline'
dynamic = require 'dynamic-content'
browserify = require 'roots-browserify'
handlebars = require 'handlebars'
layouts = require 'handlebars-layouts'
babelify = require 'babelify'
loadPartials = require './views/_utils/load-partials'
loadHelpers  = require './views/_utils/load-helpers'

# Register handlebars-layouts
layouts.register(handlebars);

module.exports =
  ignores: [
    'README.md',
    'LICENSE',
    '**/layout.*',
    '**/_*',
    '**/_**/*'
    '.gitignore',
    'app/**/*',
    'ship.conf*'
  ]

  extensions: [
    browserify(
      files: "app/index.js",
      out: 'js/bundle.js',
      minify: true,
      transforms: [
        babelify.configure(
          presets: ['es2015']
        )
      ]
    ),
    css_pipeline(files: 'assets/css/*.scss'),
    dynamic()
  ]

  sass:
    outFile: 'assets/css/main.css'

  handlebars:
    helpers: loadHelpers(__dirname + '/views/_helpers')
    partials: loadPartials(__dirname + '/views/_partials')
