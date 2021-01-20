var fs = require('fs');
var portAudio = require('naudiodon');
// rnnoise takes raw, 16-bit audio (mono, 48000 Hz)
var ai = new portAudio.AudioIO({
  inOptions: {
    channelCount: 1, //mono
    sampleFormat: portAudio.SampleFormat16Bit, //16 bit
    sampleRate: 48000, //48000 Hz
    deviceId: -1, 
    closeOnError: false,
  }
});

// Create a write stream to write out to a raw audio file
var ws = fs.createWriteStream('./outputs/original.raw');

ai.pipe(ws);
ai.start();

// Recording for 20seconds
setTimeout(() => {
  ai.quit();
}, 5000);