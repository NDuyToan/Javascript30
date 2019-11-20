document.addEventListener("DOMContentLoaded", function () {

  const checkboxes = Array.from(document.querySelectorAll('input')) ;
  let lastCheck = null;

  function handleCheck(e){
   // console.log(e);
   // console.log(checkboxes.indexOf(this));
    if( !lastCheck){
      lastCheck = this;
      //console.log(lastCheck);
      return;
    }
    if(e.shiftKey){
      var start = checkboxes.indexOf(this);
      var end = checkboxes.indexOf(lastCheck);
     // console.log(`start: ${start}`);
     // console.log(`end: ${end}`);
      checkboxes
          .slice( Math.min(start,end),Math.max(start,end)+1 )
          .forEach( item => item.checked = true);
    }
    lastCheck = this;
  }

  checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));
}, false)