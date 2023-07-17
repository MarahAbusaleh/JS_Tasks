const tableContainer = document.getElementById('tab');
const btn = document.getElementById('btn');

const startReq = new XMLHttpRequest();
startReq.open('GET', 'Task1.json');

startReq.onload = function (){

    const Obj = JSON.parse(this.responseText);

    btn.addEventListener('click', loadData);
    
    function loadData(){

        for(let i = 0 ; i < 4 ; i ++){

            const rowContant = document.createElement('tr');
            tableContainer.appendChild(rowContant);
            
            const cellContant1 = document.createElement('td');
            rowContant.appendChild(cellContant1);
            cellContant1.textContent = Obj.Names[i];
    
            const cellContant2 = document.createElement('td');
            rowContant.appendChild(cellContant2);
            cellContant2.textContent = Obj.Ages[i];
    
            const cellContant3 = document.createElement('td');
            rowContant.appendChild(cellContant3);
            cellContant3.textContent = Obj.Major[i];
    
            const cellContant4 = document.createElement('td');
            rowContant.appendChild(cellContant4);
            cellContant4.textContent = Obj.Univercity[i];
    
            const cellContant5 = document.createElement('td');
            rowContant.appendChild(cellContant5);
    
            const cellContant5Image = document.createElement('img');
            cellContant5.appendChild(cellContant5Image);
            cellContant5Image.src = Obj.Images[i];
            cellContant5Image.style.width = '100px';
    
        }
    }
}

startReq.send();