document.addEventListener("DOMContentLoaded", function () {
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    let lastHole;
    let timeUp = false;
    let score = 0;

    function randomTime(min,max){
        return Math.round (Math.random()*(max-min)+min);
    }
    function randomHole(holes){
        const idx =Math.floor (Math.random()*holes.length);
        const hole = holes[idx];
        if(lastHole === hole){
           return randomHole(holes);
        }
        lastHole = hole;
        return hole;
    }
    function peep(){
        const time = randomTime(200,1000);
        const hole = randomHole(holes);
        hole.classList.add('up');
        setTimeout( ()=> {
            hole.classList.remove('up');
            if(!timeUp){
                peep();
            }
        },time);
    }
    function startGame(){
        timeUp= false;
        score = 0;
        scoreBoard.textContent = 0;
        peep();
        setTimeout( () => {timeUp = true},10000);
    }
    function bonk(e){
        console.log(e);
        if( e.isTrusted){
            score++;
            console.log(score);
            scoreBoard.textContent = score;
            this.classList.remove('up');
        }
    }
    moles.forEach( mole => mole.addEventListener('click',bonk));
    document.querySelector('button').addEventListener('click',startGame);
 }, false)