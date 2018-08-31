var $ = require('jquery');

require('bootstrap-sass');


require('../css/main.scss');

const countdown = document.querySelector('.countdown');

//set lauch date
const lauchDate = new Date('Jan 1, 2019 13:00:00').getTime();

const interval = setInterval(()=>{
    const now = new Date().getTime();

    const timeToLauch = lauchDate-now;

    const days = Math.floor(timeToLauch/(1000*60*60*24));

    const hours = Math.floor((timeToLauch % (1000*60*60*24)) / (1000*60*60));

    const minutes = Math.floor((timeToLauch % (1000*60*60)) / (1000*60));

    const seconds = Math.floor((timeToLauch % (1000*60)) / 1000);

    countdown.innerHTML =
        `<div>${days}<span>Days</span></div>
         <div>${hours}<span>Hours</span></div>
         <div>${minutes}<span>Minutes</span></div> 
         <div>${seconds}<span>Seconds</span></div>`

    if(timeToLauch <= 1){
        clearInterval(interval);

        countdown.style.color = '#17a2b8';

        countdown.innerHTML = 'LAUNCHING';
    }
}, 1000);