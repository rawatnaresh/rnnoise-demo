var wav = require('wav');
var fs = require('fs');
var FileWriter = wav.FileWriter;

var inputFile = process.argv[2];
var outputFile = process.argv[3];


if(inputFile && outputFile){
  var file = fs.createReadStream(inputFile); 
  // file writer will add the necessary headers to the WAV file
  var outputFileStream = new FileWriter(outputFile, {
    sampleRate: 48000,
    channels: 1
  });
  
  file.pipe(outputFileStream);
} else {
  console.error('Provide inputs and output file')
  exit(0);
}