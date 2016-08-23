/**
 * Elixir Asset Management
 * ==========================================================================
 *
 * Elixir provides a clean, fluent API for defining some basic Gulp tasks
 * for your Laravel application. By default, we are compiling the Sass
 * file for our application, as well as publishing vendor resources.
 *
 * @link [Gulp](gulpjs.com)
 * @link [Laravel Elixir](https://laravel.com/docs/master/elixir)
 * @link [Laravel Vueify](https://github.com/JeffreyWay/laravel-elixir-vueify)
 *
 * @package   Assets/Workflow
 * @author    Alexander Bösch - <sirthxalot.dev@gmail.com>
 * @copyright (c) 2016, Alexander Bösch - All rights reserved.
 */

// Get Elixir Object
var elixir = require('laravel-elixir');

// Require Laravel Elixir Vuefiy extension
require('laravel-elixir-vueify');

// Set path to assets directory
elixir.config.assetsPath = 'src';

// Set path to public assets directory
elixir.config.publicPath = 'dist';

// Set path to root directory
var root = '../../';

// Type in .min when running Gulp on production and
// change sourcemaps to true

// var min = '.min';
var min = '';

//elixir.config.sourcemaps = false;
elixir.config.sourcemaps = false;

// Gulp Task
elixir(function(mix) {

    // Compile Default Stylesheet
    mix.sass('common.sass', 'dist/css/common' + min + '.css');

    // Merge Common Javascript
    mix.scripts([
        root + 'node_modules/vue/dist/vue.js',
        root + 'node_modules/jquery/dist/jquery.js',
        root + 'node_modules/what-input/dist/what-input.js',
        root + 'node_modules/motion-ui/motion-ui.js',
        root + 'node_modules/foundation-sites/dist/foundation.js',
        'common.js'
    ], 'dist/js/common' + min + '.js');

    // Browserify Vue Components
    mix.browserify('components.js', 'dist/foundation.components' + min + '.js');

    // Copy assets into example directory
    mix.copy('dist/css/common.min.css', 'examples/css/common.min.css');
    mix.copy('dist/js/common.min.js', 'examples/js/common.min.js');
    mix.copy('dist/foundation.components.min.js', 'examples/js/foundation.components.min.js');

});
