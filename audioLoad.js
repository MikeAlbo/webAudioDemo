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


function AudioLoadBuffer(source){
    this.source = source;
    
    this.loadData = function(){
        for(var file in source){
           httpReq(file);
        }
    }
    
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
    
    
    function playBack(buffer){
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(0);
}




    
}
