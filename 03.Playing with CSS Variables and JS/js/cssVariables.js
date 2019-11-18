document.addEventListener("DOMContentLoaded", function () {
    let inputs = document.querySelectorAll('input');
    let items = document.querySelectorAll('.items');
    function changeCSS() {
        suffix = this.dataset.sizing || '';
        items.forEach( item => item.style.setProperty(`--${this.name}`,this.value+suffix) );
    }
    for (let input of inputs) {
        input.addEventListener('change', changeCSS);
    }
    for (let input of inputs) {
        input.addEventListener('mousemove', changeCSS);
    }

}, false)