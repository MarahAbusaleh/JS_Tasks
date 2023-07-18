const tableContainer = document.getElementById('tab');

const startReq = new XMLHttpRequest();
startReq.open('GET', 'https://fakestoreapi.com/products');

startReq.onload = function (){

    const Obj = JSON.parse(this.responseText);
    console.log(Obj);
    
    for(let i = 0 ; i < 20 ; i ++){

        const rowContant = document.createElement('tr');
        tableContainer.appendChild(rowContant);

        
        const cellContant1 = document.createElement('td');//id
        rowContant.appendChild(cellContant1);
        cellContant1.textContent = Obj[i].id;

        const cellContant2 = document.createElement('td');//Title
        rowContant.appendChild(cellContant2);
        cellContant2.textContent = Obj[i].title;

        const cellContant3 = document.createElement('td');
        rowContant.appendChild(cellContant3);
        cellContant3.textContent = Obj[i].description;

        const cellContant4 = document.createElement('td');
        rowContant.appendChild(cellContant4);
        cellContant4.textContent = Obj[i].category;

        const cellContant5 = document.createElement('td');
        rowContant.appendChild(cellContant5);
        cellContant5.textContent = Obj[i].rating.rate + ' ' + Obj[i].rating.count;

        const cellContant6 = document.createElement('td');
        rowContant.appendChild(cellContant6);
        cellContant6.textContent = Obj[i].price;

        const cellContant7 = document.createElement('td');
        rowContant.appendChild(cellContant7);
        const cellContant7Image = document.createElement('img');
        cellContant7.appendChild(cellContant7Image);
        cellContant7Image.src = Obj[i].image;
        cellContant7Image.style.width = '100px';

    }

}

startReq.send();