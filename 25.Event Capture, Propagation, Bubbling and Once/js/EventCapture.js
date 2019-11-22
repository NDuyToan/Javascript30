document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll('div');
    function longText(e){
       // e.stopPropagation(); // stop bubbling!
       console.log(this);
        

    }

    divs.forEach( div =>  div.addEventListener('click',longText, {
        capture:false,
        once:true
    }));
  

}, false)