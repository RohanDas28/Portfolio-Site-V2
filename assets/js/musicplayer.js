const mymusic = new Audio();
mymusic.src = "/assets/music/lethergolofi.mp3";
const playMusic = () => {
    mymusic.play();
    mymusic.volume=0.1;
}
const pauseMusic = () => {
    mymusic.pause();
}