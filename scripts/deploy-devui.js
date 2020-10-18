const fs = require('fs');
const shell = require('shelljs');

const arguments = process.argv.splice(2);
const [serviceName, releaseVersion] = arguments;

const target = `/usr/local/nginx/html/${releaseVersion}/${serviceName}.tar.gz`;
const dest = '/usr/local/nginx/html';

fs.stat(target, (error, stats) => {
  if (stats && stats.isFile()) {
    shell.exec(`tar zxvf ${target} -C ${dest}`);
    shell.exec(`mv ${dest}/dist/* ${dest}`);
  }
});