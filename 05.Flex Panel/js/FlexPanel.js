document.addEventListener("DOMContentLoaded", function () {
  panels = document.querySelectorAll('.panel');
  panels.forEach(panel => { panel.addEventListener('click', toogleOpen) });

  function toogleOpen() {
    panels.forEach(panel => { panel.classList.remove('open') });
    this.classList.toggle('open');
  }

}, false)