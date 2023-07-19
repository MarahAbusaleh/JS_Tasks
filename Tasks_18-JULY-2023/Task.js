const tableContainer = document.getElementById('tab');

async function funAsynch() {

    const response = await fetch('https://fakestoreapi.com/products');
    const Obj = await response.json();

    for(let i = 0 ; i < Obj.length ; i ++){

        const rowContant = document.createElement('tr');
        tableContainer.appendChild(rowContant);

        
        const cellContant1 = document.createElement('td');//id
        rowContant.appendChild(cellContant1);
        cellContant1.textContent = Obj[i].id;

        const cellContant2 = document.createElement('td');//Title
        rowContant.appendChild(cellContant2);
        cellContant2.textContent = Obj[i].title;

        const cellContant3 = document.createElement('td');//Description
        rowContant.appendChild(cellContant3);
        cellContant3.textContent = Obj[i].description;

        const cellContant4 = document.createElement('td');//Category
        rowContant.appendChild(cellContant4);
        cellContant4.textContent = Obj[i].category;

        const cellContant5 = document.createElement('td');//Rating
        rowContant.appendChild(cellContant5);
        cellContant5.textContent = Obj[i].rating.rate + ' ' + Obj[i].rating.count;

        const cellContant6 = document.createElement('td');//Price
        rowContant.appendChild(cellContant6);
        cellContant6.textContent = Obj[i].price;

        const cellContant7 = document.createElement('td');//Image
        rowContant.appendChild(cellContant7);
        const cellContant7Image = document.createElement('img');
        cellContant7.appendChild(cellContant7Image);
        cellContant7Image.src = Obj[i].image;
        cellContant7Image.style.width = '100px';7
    }
}
funAsynch();
