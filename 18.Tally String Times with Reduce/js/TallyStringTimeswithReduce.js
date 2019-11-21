document.addEventListener("DOMContentLoaded", function () {

    timeNodes = Array.from (document.querySelectorAll('[data-time]'));
    const seconds = timeNodes
            .map( node => node.dataset.time)
            .map(timeCode => {
                const [min,secs] = timeCode.split(':').map(parseFloat);
                return min*60+secs
            })
            .reduce( (total,vidSeconds) => total+vidSeconds,0);
    let secondLeft = seconds;
    let hour = Math.floor (secondLeft/3600);
    secondLeft = secondLeft%3600;
    let mins = Math.floor (secondLeft/60);
    let second = secondLeft%60;
    console.log(hour,mins,second);
   
  

}, false)