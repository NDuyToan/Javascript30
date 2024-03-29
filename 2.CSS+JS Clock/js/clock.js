document.addEventListener("DOMContentLoaded", function () {
    hourHand = document.querySelector('.hour-hand');
    minHand = document.querySelector('.min-hand');
    secondsHand = document.querySelector('.second-hand');

    function setDate(){
        const now = new Date();
        
        const seconds = now.getSeconds();
        const secondsDegrees = seconds/60*360+90;
        secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const min = now.getMinutes();
        const minDegrees = ((min+seconds/60) / 60 * 360) + 90;
        minHand.style.transform = `rotate(${minDegrees}deg)`;
     
        const hour = now.getHours();
        const hourDegrees = (hour+min/60)/12*360+90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }
    setInterval(setDate,1000);
    setDate();

}, false)