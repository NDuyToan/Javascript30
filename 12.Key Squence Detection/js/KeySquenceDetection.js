document.addEventListener("DOMContentLoaded", function () {
  const pressed = [];
  const secretCode = 'hihiha';

  window.addEventListener('keyup', (e) => {
    //console.log(e.key);
    pressed.push(e.key);
    pressed.splice(0, pressed.length - secretCode.length);
    console.log(pressed);
    if(pressed.join('').includes(secretCode)){
      console.log('BINGO');
      cornify_add();
    }
  });

}, false)