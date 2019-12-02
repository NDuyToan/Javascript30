
let numberOfRow = document.querySelector('#numberOfRow');
let numberOfCol = document.querySelector('#numberOfCol');
let table_head = document.querySelector('#table_head');
let table_body = document.querySelector('#table_body');
let creat = document.querySelector('#creat');
let wrap = document.querySelector('#wrap');
let sort = document.querySelector('#sort');

creat.addEventListener('click', creatTable);

//Tạo grid
function creatTable() {
    const noRow = numberOfRow.value;
    const noCol = numberOfCol.value;
    if (noRow != "" && noCol != "") {
        //creat head
        for (let c = 0; c < noCol; c++) {
            let hCol = document.createElement('th');
            hCol.innerHTML = c;
            table_head.appendChild(hCol);

        }
        //creat body
        for (let c = 0; c < noRow; c++) {
            let row = document.createElement('tr');
            for (let r = 0; r < noCol; r++) {
                let col = document.createElement('td');
                col.innerHTML = Math.floor(Math.random() * 1000 + 1);
                row.appendChild(col);
            }
            table_body.appendChild(row);
        }

    }
    else {
        alert("Please enter number of row and column");
    }
}
//Dòng header cố định ở đầu trang
wrap.addEventListener('scroll', function () {
    var translate = "translate(0," + this.scrollTop + "px)";
    this.querySelector("thead").style.transform = translate;
})
//sort grid

sort.addEventListener('click', sortTable);
function sortTable() {

    let table = document.querySelector('table');
   
}



