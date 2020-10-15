const video = document.getElementById('video');
const play = document.getElementById('play');
const stopp = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function toggle(){
    if(video.paused){
        video.play();
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }else{
        video.pause();
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    }
}
function updateProgress(){
    progress.value = (video.currentTime / video.duration)*100;
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs}`;
}
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}
video.addEventListener('click', toggle);

video.addEventListener('timeupdate', updateProgress);  

play.addEventListener('click', toggle);

stopp.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);