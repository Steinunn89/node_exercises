#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

// Input
var ext = '.'+process.argv[3];
var dirName = process.argv[2];

fs.readdir(dirName, function(err, list) {

	if (err) {
		console.log(err);
		throw err;
	} else {

  		list.forEach(function(file){
  			if( path.extname(file) == ext )
    			console.log(file);
    	});
	}
});

