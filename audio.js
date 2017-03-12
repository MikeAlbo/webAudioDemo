// audio js

var context;

window.addEventListener('load', init, false);

// init the audio context
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

//// audio file buffer
//var simonSound1 = null;
//
//function loadSimonSound(url){
//    var request = new XMLHttpRequest();
//    request.open('GET', url, true);
//    request.responseType = 'arraybuffer';
//    
//    request.onload = function(){
//        context.decodeAudioData(request.response, function(buffer){
//            simonSound1 = buffer;
//            // playSound(simonSound1);
//        }, onerror);
//    }
//    request.send();
//}
//
//loadSimonSound('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'); 
//
//// playback sound function
//
//function playSound(buffer){
//    var source = context.createBufferSource();
//    source.buffer = buffer;
//    source.connect(context.destination);
//    source.start(0);
//}



// load multiple audion files 

var audioSources = {
    simon1: {
        buffer: "null", 
        webLink : 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'
    },
    simon2: {
        buffer: "null", 
        webLink : 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'
    },
    simon3: {
        buffer: "null", 
        webLink : 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'
    },
    simon4: {
        buffer: "null", 
        webLink : 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'
    }
}

function AudioLoadBuffer(source){
    this.source = source;
    
    for(var file in source){
        httpReq(source[file].webLink, source[file].buffer);
    }
    
    function httpReq(url, buffer){
        //console.log(url);
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer'; 
        request.onload = function(){
            context.decodeAudioData(request.response, function(res){
                buffer = res;
            })
        }
        
        request.send();
        
    }
    
//    function decodeAudio(buffer, response){
//        context.decodeAudioData(response, function(buffer){
//            buffer = buffer;
//        }, onerror);
//    }
//    
    return source;
    
}

var audioFiles = new AudioLoadBuffer(audioSources);

function playSound(buffer){
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(0);
}


