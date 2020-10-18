const fs = require('fs');
const tar = require('tar');

fs.stat('./result', (error, stats) => {
  if (error) {
    fs.mkdirSync('./result');
  }

  tar.c({ gzip: true }, ['dist', './scripts/deploy-devui.js'])
  .pipe(fs.createWriteStream('./result/devui.tar.gz'));
});
