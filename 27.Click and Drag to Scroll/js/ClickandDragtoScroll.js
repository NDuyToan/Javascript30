document.addEventListener("DOMContentLoaded", function () {
  
    const slider = document.querySelector('.items');
    let isDown = false;
    let startX;
    let scrollLeft = slider.scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
    });
    slider.addEventListener('mouseleave', (e) => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', (e) => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        slider.classList.remove('active');
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3;
        slider.scrollLeft = scrollLeft - walk;
       
    });

}, false)