document.addEventListener("DOMContentLoaded", function () {
    const bands = document.querySelector('#bands');
    const listBands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    function strip(bandName){
        return bandName.replace(/^a|an|the /i,'').trim();
    }
    
    const sortBands = listBands.sort( (a,b) => strip(a) > strip(b) ? 1:-1 );
   
    bands.innerHTML  =  sortBands.map( band => 
       `<li> ${band} </li>`).join('');
   
}, false)