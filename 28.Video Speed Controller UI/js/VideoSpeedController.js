document.addEventListener("DOMContentLoaded", function () {
    const speed = document.querySelector('.speed');
    const bar = speed.querySelector('.speed-bar');
    const video = document.querySelector('.flex');

    function handleMove(e){
        const y = e.pageY - speed.offsetTop;
        const persent = y/speed.offsetHeight;
        const min = 0.4;
        const max = 4;
        const height = Math.round(persent*100) +'%';
        const playbackRate = persent*(max-min)+min;
        bar.textContent = playbackRate.toFixed(2)+'x';
        video.playbackRate = playbackRate;
        console.log(persent);
        bar.style.height = height;

    }

    speed.addEventListener('mousemove',handleMove);
  

}, false)