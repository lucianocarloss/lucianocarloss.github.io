let audio = document.getElementById("music");
// var mp3 = document.getElementsByTagName("audio")[0];
var timingMusic = document.getElementById("timing");


function play(){
    audio.play();
}

function pause(){
    audio.pause();
    timingMusic.value = 0;
}

setInterval(() => { /* a cada 1 segundo incrementa o value do timinigMusic com a posição atual da musica */
    timingMusic.value = Math.round(audio.currentTime);
    //current_Time_value.innerText = formatSecondsAsTime(Math.round(audio.currentTime));

    // if(formatSecondsAsTime(Math.round(mp3.currentTime)) == formatSecondsAsTime(Math.round(mp3.duration))){
    //     NextMusic();
    // }
},1000);

function SetTiming(){
    audio.currentTime = timingMusic.value;
    if(mp3.paused == false){
        mp3.play();

    } 
}