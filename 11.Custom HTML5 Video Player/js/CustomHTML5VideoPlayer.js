document.addEventListener("DOMContentLoaded", function () {
  // Get our Element
  const player = document.querySelector('.player');
  const video = player.querySelector('.viewer');
  const progress =player.querySelector('.progress');
  const progressBar = player.querySelector('.progress_filled');
  const toggle = player.querySelector('.toggle');
  const skipButtons = player.querySelectorAll('[data-skip]');
  const ranges = player.querySelectorAll('.player_slider');
  //Build function
  function togglePlay(){
    const method = video.paused? 'play':'pause';
    console.log(method);
    video[method]();
    
  }
  function updateButton(){
    const icon = this.paused ? '<i class="fas fa-play icon_play"></i>':'<i class="fas fa-pause icon_play"></i>';
    //console.log(icon);
    toggle.innerHTML = icon;
  }
  function skip(){
    video.currentTime +=parseFloat( this.dataset.skip);
    console.log(video.currentTime);
  }
  function handleUpdateChange(){
   // console.log(this.value);
    // console.log(video.volume);
    // video.volume=parseFloat(ranges[0].value);
    // video.playbackRate = parseFloat(ranges[1].value);
    video[this.name] = this.value;
  }
  function handleProgress(){
    let percent = (video.currentTime/video.duration)*100;
    //console.log(percent);
    progressBar.style.flexBasis = `${percent}%`;
  }
  function scrub(e){
   // console.log(e.offsetX);
    let scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
  }

  //Hook up the event listners
  video.addEventListener('click',togglePlay);
  video.addEventListener('play',updateButton);
  video.addEventListener('pause',updateButton);
  video.addEventListener('timeupdate',handleProgress);
  toggle.addEventListener('click',togglePlay);
  skipButtons.forEach( button => button.addEventListener('click',skip));
  ranges.forEach( range => range.addEventListener('change',handleUpdateChange));
  let mousedown = false;
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
  progress.addEventListener('mousedown', () => mousedown = true);
  progress.addEventListener('mouseup', () => mousedown = false);
  
}, false)