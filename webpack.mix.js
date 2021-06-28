let mix = require('laravel-mix');
require('./serve');

mix.setPublicPath('dist');

mix.js('src/js/kekenik-select.js', 'js')
    .sass('src/sass/kekenik-select.scss', 'css')
    .serve();

