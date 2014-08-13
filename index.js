'use strict';
var fs = require('fs'),
    path = require('path');

fs.writeFile(process.cwd()+'/index.html', getTemplate(), function (err) {
  if (err) return console.log(err);
  console.log('index.html was generated.');
});

function getTemplate() {
    return '<!doctype html>\n' +
        '<html>\n' +
        '<head>\n' +
        '    <title></title>\n' +
        '    <link rel="stylesheet" type="text/css" href="filename.css" />\n' +
        '    <script src="filename.js"></script>\n' +
        '</head>\n' +
        '<body>\n' +
        '</body>\n' +
        '</html>\n';
}
