# HTML 5 webAudio api demo

## Live Demo
[demo] ( https://mikealbo.github.io/webAudioDemo/)

## about
This demo handles the importing and decoding of the audio files passed to it. The demo also includes a playback function.

# Links
[The W3 standard] (https://www.w3.org/TR/webaudio/#AudioContext-section)

[html5 Rocks webAudio tutorial](https://www.html5rocks.com/en/tutorials/webaudio/intro/)

[html5 rocks version of a buffer loader] (https://www.html5rocks.com/en/tutorials/webaudio/intro/js/buffer-loader.js)


## setup

`window.addEventListener('load', init, false);`
loads the init function when the document is ready
---
```
function init(){
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        context = new AudioContext();
        console.log("AudioContext created!");
    }
    catch(e) {
        alert("Web Audio not supported in your browser, please try a newer release of Safari, Chrome, or Firefox");
        }
}
```

## audio sources

## AudioLoadBuffer

### loadData

### httpReq

## playBack

## demo interface

## things to do...