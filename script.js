console.log('script is running');
const progress = document.querySelector('#progress');
const song = document.querySelector('#song');
const ctrlIcon = document.querySelector('#ctrlIcon');
const carousel  = $('#carouselExampleCaptions')

song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
  console.log(`duration: ${song.duration} seconds`);
}

function playPause(){
  if(ctrlIcon.classList.contains("fa-play")){
    song.play();
    ctrlIcon.classList.remove("fa-play")
    ctrlIcon.classList.add("fa-pause")
    carousel.carousel('cycle')

  }else if(ctrlIcon.classList.contains("fa-pause")){
    song.pause();
    ctrlIcon.classList.remove("fa-pause")
    ctrlIcon.classList.add("fa-play")
    carousel.carousel('pause')
  }
}
if(!song.pause()){
  setInterval(() => {
    progress.value = song.currentTime;
  },500)
}

progress.onchange = () => {
  song.currentTime = progress.value;
  if(song.pause){
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    carousel.carousel('cycle')
  }
}