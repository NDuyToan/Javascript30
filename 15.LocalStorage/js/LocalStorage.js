document.addEventListener("DOMContentLoaded", function () {
  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  
  const items = JSON.parse(localStorage.getItem('items')) || [];

  function addItem(e){
    e.preventDefault();
    const inputItem = document.querySelector('.inputItem');
    const item = {
      text: inputItem.value,
      done: false
    };
    items.push(item);
    console.log(items);
    populateList(items,itemsList);
    localStorage.setItem('items',JSON.stringify (items));
    this.reset();
  }
  function populateList(plates =[],plateList){
    plateList.innerHTML = plates.map( (plate,i) => {
      return `<li>
      <input type="checkbox" data-index=${i} id =  "item${i}" ${ plate.done ? 'checked':  '' }>
      <label for="item${i}">${plate.text}</label>
      </li>`
    }).join('');
  }
  function toggleDone(e){
    if(!e.target.matches('input')) return;
    const el = e.target.dataset;
    const index = el.index;
    console.log(index);
    items[index].done = !items[index].done;
    
    localStorage.setItem('items',JSON.stringify (items));
   populateList(items,itemsList);
  }
 
  addItems.addEventListener('submit',addItem);
  itemsList.addEventListener('click',toggleDone);
  populateList(items,itemsList);
  

}, false)