#! /usr/bin/env node
const fs = require("fs");

fs.writeFileSync(`./.docz/dist/_redirects`, '/*    /index.html   200', {
  encoding: 'utf8'
});

console.log('./.docz/dist/_redirects created');
