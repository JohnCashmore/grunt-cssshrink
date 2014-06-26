/*
 * grunt-combine-media-queries
 * https://github.com/buildingblocks/grunt-combine-media-queries
 *
 * Copyright (c) 2013 John Cashmore
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('cssshrink', 'Shrinks css.', function() {

    // Require stuff
    var cssshrink = require('cssshrink');
    var path = require('path');
    var error = true;

    // Default options
    var options = this.options({
      log: false,
      ext: false
    });

    // Log info only when 'options.log' is set to true
    var log = function(message){
      if (options.log){
        grunt.log.writeln(message);
      }
    };


    this.files.forEach(function(f) {

      f.src.forEach(function (filepath) {

        error = false;

        log('\nFile ' + filepath + ' found.');

        var destpath = f.dest;
        var filename = filepath.replace(/(.*)\//gi, '');

        if (destpath.indexOf(filename) === -1) {
          destpath = path.join(f.dest, filename);
        }

        var source = grunt.file.read(filepath);
        

        var outputcss = cssshrink.shrink(source);

        

        

        // Define the new file extension
        if( options.ext ){
          destpath = destpath.replace( /\.(.*)/ , options.ext);
        }

        // Normalize line endings
        outputcss = grunt.util.normalizelf(outputcss);

        // Write the new file
        grunt.file.write(destpath, outputcss);
        grunt.log.ok('File ' + destpath + ' created.');

      });

      if(error){
        grunt.fatal('No files found');
      }

    });

  });

};