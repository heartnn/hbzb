var purify = require('purify-css');
require('shelljs/global');

// purify style.css
exec('jekyll build', function(code, stdout, stderr) {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
});

var content = [
    '_site/index.html',
    '_site/404.html',
    '_site/blog/index.html',
    '_site/donate/index.html',
]
var css = ['static/css/style.css']

var options = {
    output: 'static/css/style-purify.css'
};

purify(content, css, options);
