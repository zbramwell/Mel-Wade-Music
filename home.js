var $ = function(id) { 
    return document.getElementById(id); 
};

var audio = new Audio("Music/SaturnReturn.mp3");


window.onload = function() {
    $("play").onclick = listen;
    $("play").innerHTML = '<img src="Images/play.png" alt="play icon">Listen';
};

var bool = true;
var listen = function(){
    if(bool){
        audio.play();
        bool=false;
        $("play").innerHTML ='<img src="Images/pause.png">Listen';
    }
    else{
        audio.pause();
        bool=true;
        $("play").innerHTML = '<img src="Images/play.png">Listen';
    }
}