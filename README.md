# HTML 5 webAudio api demo

## Live Demo
[demo] ( https://mikealbo.github.io/webAudioDemo/)

## about
This demo handles the importing and decoding of the audio files passed to it. The demo also includes a playback function. The WebAudio AudioContext is not supported in IE as of yet.

# Links
[The W3 standard] (https://www.w3.org/TR/webaudio/#AudioContext-section)

[html5 Rocks webAudio tutorial](https://www.html5rocks.com/en/tutorials/webaudio/intro/)

[html5 rocks version of a buffer loader] (https://www.html5rocks.com/en/tutorials/webaudio/intro/js/buffer-loader.js)


## setup

loads the init function when the document is ready
``` javascript 
window.addEventListener('load', init, false);
```

---

init function sets the window.AudioContext, if not supported alerts the user of error. Note: webKit requires "webkitAudioContext".

``` javascript
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

## audioSources

audioSources, is a JS object that contains the link to the audio file to be imported. 

``` javascript
var audioSources = {
    exSound1: {
        webLink : 'https://example.com/audioFile1.mp3'
    },
    exSound2: {
        webLink : 'https://example.com/audioFile1.mp3'
    }
    }

```

---

This is also the var the the buffer outputs to and is used in playback.

``` javascript
var audioSources = {
    exSound1: {
        webLink : 'https://example.com/audioFile1.mp3',
        playback: AudioBuffer
    },
    exSound2: {
        webLink : 'https://example.com/audioFile1.mp3',
        playback: AudioBuffer
    }
    }

```


## AudioLoadBuffer

### loadData

### httpReq

## playBack

## demo interface

## things to do...