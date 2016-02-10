'use strict';

var sass = require('node-sass');
var neat = require('node-neat');
var fs = require('fs-extra');
var outputCssFile = 'dist/assets/dist.css';


// Copy images, fonts and pages to dist
try {
    fs.mkdirsSync('dist/assets');
    fs.copySync('src', 'dist');
    fs.copySync('assets/fonts', 'dist/assets/fonts');
    fs.copySync('assets/images', 'dist/assets/images');
    fs.copySync('assets/compat', 'dist/assets/compat');
} catch (err) {
    console.error('Error copying resources ' + err.message)
}

// Convert sass into the css
sass.render({
    file: 'assets/stylesheets/application.scss',
    includePaths: neat.with('assets'),
    outputStyle: 'compressed',
    sourceMap: true,
    outFile: outputCssFile,
}, function(error, result) { // node-style callback from v3.0.0 onwards
    if(!error){
        // No errors during the compilation, write this result on the disk
        fs.writeFile(outputCssFile, result.css, function(err){
            if(!err){
                console.log('written css to dist');
            }
        });
    } else {
        console.log(error);
    }
});

var processJs = function(name, environment) {
    var outputName = 'dist/assets/' + name + "-dist.js";
    var asset = environment.findAsset(name);
    fs.writeFile(outputName, asset.toString(), function(err){
        if(!err){
            console.log('written to '+ outputName);
        } else {
            throw new Error(err);
        }
    });
}


var Mincer  = require('mincer');

var environment = new Mincer.Environment();
environment.appendPath('assets/javascripts');
environment.appendPath('assets/components');

processJs('application', environment);
processJs('home', environment);
processJs('supplies', environment);



