document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll('a');
    const hightlight = document.createElement('span');
    hightlight.classList.add('hightlight');
    document.body.appendChild(hightlight);

    function hightlightLink(){
        const linkCoords = this.getBoundingClientRect ();
        console.log(linkCoords);
        const coord = {
            width : linkCoords.width,
            height :linkCoords.height,
            top : linkCoords.top + window.scrollY,
            left : linkCoords.left + window.scrollX
        }
        hightlight.style.width = `${coord.width}px`;
        hightlight.style.height = `${coord.height}px`;
        hightlight.style.transform = `translate(${coord.left}px, ${coord.top}px`;
    }
    
    triggers.forEach( a => a.addEventListener('mouseenter',hightlightLink));
}, false)