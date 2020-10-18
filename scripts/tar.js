const fs = require('fs');
const tar = require('tar');

if (!fs.statSync('./result')) {
  fs.mkdirSync('./result');
}

tar.c({ gzip: true }, ['dist'])
.pipe(fs.createWriteStream('./result/devui.tar.gz'))
