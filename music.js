var $ = function(id) { 
    return document.getElementById(id); 
};

var cant = new Audio("Music/01CantBuyLove.m4a");
var waves = new Audio("Music/02Waves.m4a");
var highway = new Audio("Music/03HighwayRide.m4a");
var escape = new Audio(
"Music/04Escape.m4a");
var autumn = new Audio("Music/05AutumnWaltz.m4a");
var penny = new Audio("Music/06ThePennySong.m4a");
var solitude = new Audio("Music/07Solitude.m4a");
var dusty = new Audio("Music/08DustyGuitar.m4a");
var corner = new Audio("Music/09CornerOfRegret.m4a");
var search = new Audio("Music/10TheSearch.m4a");
var hole = new Audio("Music/11HoleInMyGuitar.m4a");
var like = new Audio("Music/LikeYouLikeMe.mp3");
var saturn = new Audio("Music/SaturnReturn.mp3");
var fire = new Audio("Music/TheFireSong.mp3");
var twisting = new Audio("Music/TwistingTheWires.mp3");

window.onload = function() {
    $("playLike").onclick=playLike;
    $("playCant").onclick = playCant;
    $("playSaturn").onclick=playSaturn;
    $("playFire").onclick=playFire;
    $("playWire").onclick=playWire;
    $("playWaves").onclick=playWaves;
    $("playHighway").onclick=playHighway;
    $("playEscape").onclick=playEscape;
    $("playAutumn").onclick=playAutumn;
    $("playPenny").onclick=playPenny;
    $("playSolitude").onclick=playSolitude;
    $("playDusty").onclick=playDusty;
    $("playCorner").onclick=playCorner;
    $("playSearch").onclick=playSearch;
    $("playHole").onclick=playHole;
};
var pauseAll=function(){
    cant.pause();
    waves.pause();
    highway.pause();
    escape.pause();
    autumn.pause();
    penny.pause();
    solitude.pause();
    dusty.pause();
    corner.pause();
    search.pause();
    hole.pause();
    like.pause();
    saturn.pause();
    twisting.pause();
    fire.pause();
}
var playCant=function(){
    if(!cant.paused){
        cant.pause();
        $("playCant").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
        pauseAll();
        cant.play();
        $("playCant").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playLike = function(){
    if(!like.paused){
        like.pause();
        $("playLike").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
         pauseAll();
        like.play();
        $("playLike").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playSaturn = function(){
    if(!saturn.paused){
        saturn.pause();
        $("playSaturn").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
         pauseAll();
        saturn.play();
        $("playSaturn").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playFire = function(){
    if(!fire.paused){
        fire.pause();
        $("playFire").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
        pauseAll();
        fire.play();
        $("playFire").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playWire = function(){
    if(!twisting.paused){
        twisting.pause();
        $("playWire").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
        pauseAll();
        twisting.play();
        $("playWire").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playWaves = function(){
    if(!waves.paused){
        waves.pause();
        $("playWaves").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
        pauseAll();
        waves.play();
        $("playWaves").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playHighway = function(){
    if(!highway.paused){
        highway.pause();
        $("playHighway").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
        pauseAll();
        highway.play();
        $("playHighway").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playEscape = function(){
    if(!escape.paused){
        escape.pause();
        $("playEscape").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
        pauseAll();
        escape.play();
        $("playEscape").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playAutumn = function(){
    if(!autumn.paused){
        autumn.pause();
        $("playAutumn").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
        pauseAll();
        autumn.play();
        $("playAutumn").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playPenny = function(){
    if(!penny.paused){
        penny.pause();
        $("playPenny").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
        pauseAll();
        penny.play();
        $("playPenny").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playSolitude = function(){
    if(!solitude.paused){
        solitude.pause();
        $("playSolitude").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
        pauseAll();
        solitude.play();
        $("playSolitude").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playDusty = function(){
    if(!dusty.paused){
        dusty.pause();
        $("playDusty").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
        pauseAll();
        dusty.play();
        $("playDusty").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playCorner = function(){
    if(!corner.paused){
        corner.pause();
        $("playCorner").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
        pauseAll();
        corner.play();
        $("playCorner").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playSearch = function(){
    if(!search.paused){
        search.pause();
        $("playSearch").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
        pauseAll();
        search.play();
        $("playSearch").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}
var playHole= function(){
    if(!hole.paused){
        hole.pause();
        $("playHole").innerHTML="<img src='Images/play.png' alt='play icon'>"
    }
    else{
        pauseAll();
        hole.play();
        $("playHole").innerHTML="<img src='Images/pause.png' alt='pause icon'>"
    }
}