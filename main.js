let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let source = document.getElementById('source');
let img = document.querySelector('.song-img');
let menubtn = document.getElementById('menubtn');
let mainCss = document.getElementById('mainCss');

let songList = ['./demons.mp3','./its.mp3','./moral.mp3'];

img.setAttribute('src', 'https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg');

source.setAttribute('src', 'songs/moral.mp3');

mainCss.setAttribute('href','css/style.css');

function changeCss(){
    mainCss.setAttribute('href','css/next.css')
}

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play()
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

function menu(){
    console.log('menu button was clicked! ');
}