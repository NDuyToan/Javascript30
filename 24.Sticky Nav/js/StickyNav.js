document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('#main');
    const logo = document.querySelector('.logo');
    const topOfNav = nav.offsetTop;
    function fixNav(){
        console.log(topOfNav,window.scrollY);
        if( window.scrollY > topOfNav){
            document.body.classList.add('fix-Nav');
            document.body.style.paddingTop = nav.offsetHeight + 'px';
        }
        else{
            document.body.classList.remove('fix-Nav');
            document.body.style.paddingTop = 0;
          
        }
    }
    window.addEventListener('scroll',fixNav);
  

}, false)