var fs = require('fs');

var example = process.argv[2];

file = fs.readFileSync(example);

fileContent = file.toString();

console.log(fileContent.split('\n').length - 1);