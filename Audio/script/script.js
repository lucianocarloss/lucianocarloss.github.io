let audio = document.getElementById("music");
// var audio = document.getElementsByTagName("music")[0];
var timingMusic = document.getElementById("timing");

let imagemu = document.getElementById("imagemusic");
imagemu.addEventListener("click", function(){

    imagemu.setAttribute("src", "./assets/play.png");

});


function play(){
    audio.play();
    // imagemusic.setAttribute("src", "./assets/notamusic2.jpg");
}

function pause(){
    audio.pause();
}

setInterval(() => {
    timingMusic.value = Math.round(audio.currentTime);
    time.innerText = formatSecondsAsTime(Math.round(audio.currentTime));
},1000);

onload = function(){
    duration.innerText = formatSecondsAsTime(Math.round(audio.duration));
}

audio.onloadeddata = function(){ 
    timingMusic.setAttribute('max',Math.round(audio.duration));
    duration.innerText = formatSecondsAsTime(Math.round(audio.duration));
}

function SetTiming(){
    audio.currentTime = timingMusic.value;
    if(audio.paused == false){
        mp3.play();

    } 
}

function formatSecondsAsTime(secs, format) { /* configura o time da musica */
    var hr  = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600))/60);
    var sec = Math.floor(secs - (hr * 3600) -  (min * 60));
  
    if (min < 10){ 
      min = "0" + min; 
    }
    if (sec < 10){ 
      sec  = "0" + sec;
    }
  
    return min + ':' + sec;
  }