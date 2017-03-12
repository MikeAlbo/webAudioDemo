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


## create a new instance...

creates a new instance of AudioLoadBuffer and calls the loadData function()

``` javascript
var newAudio = new AudioLoadBuffer(audioSources);
newAudio.loadData();

```


## audioSources

audioSources, is a JS object that contains the link to the audio file to be imported.

``` javascript
var audioSources = {
    exSound1: {
        webLink : 'audioFiles/simonSound1.mp3'
    },
    exSound2: {
        webLink : 'audioFiles/simonSound2.mp3'
    }
    }

```

---

This is also the var the the buffer outputs to and is used in playback.

``` javascript
var audioSources = {
    exSound1: {
        webLink : 'audioFiles/simonSound1.mp3',
        playback: AudioBuffer
    },
    exSound2: {
        webLink : 'audioFiles/simonSound2.mp3',
        playback: AudioBuffer
    }
    }

```


## AudioLoadBuffer
A constructor that, takes the audioSourc file and calls the XMLHttpRequest() on each object. Upon success, the response is added to the audioSource file.

### loadData

``` javascript
this.loadData = function(){
        for(var file in source){
           httpReq(file);
        }
```


### httpReq

``` javascript
  function httpReq(file){
        //console.log(url);
        var request = new XMLHttpRequest();
        request.open('GET', source[file].webLink, true);
        request.responseType = 'arraybuffer'; 
        request.onload = function(){
             context.decodeAudioData(request.response, function(res){
                audioSources[file].playback = res;
                 
            });
            
        }
        request.send();  
    }

```

Note : You may encounter access issues, if the you are not connecting to your server. 


## playBack

The playback function builds the buffer, conects to the speakers, and starts (plays) the file.

``` javascript
 function playBack(buffer){
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(0);
}


```

## demo interface

1. playSound - switch function, that calls playBack
2. button event listeners, call playSound and passes argument


## things to do...

1. extract the main functionality into reusable code
2. imporve error handling