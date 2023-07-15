const container = document.createElement('div'); //The outside container
container.classList.add('container');//Give a class
document.body.appendChild(container);

// Cards static data
const cardDataIngo = [

    {
      name: 'Marah Abusaleh',
      age: '23',
      imageSrc: './Images/MyProfailPictureSq.jpeg',
    },
    {
      name: 'Rama Ababneh',
      age: '24',
      imageSrc: './Images/rama.jpg',
    },
    {
      name: 'Qasem Al zoubi',
      age: '25',
      imageSrc: './Images/qasem.jpg',
    },
    {
      name: 'Leena Al Rababah',
      age: '26',
      imageSrc: './Images/leena.jpg',
    },

];

// Create cards
cardDataIngo.forEach((card) => {

    const cardContainer = document.createElement('div');
    cardContainer.style.width = '220px';
    cardContainer.style.border = '1px solid black';
    cardContainer.style.padding = '10px';
    cardContainer.style.marginBottom = '10px';
    container.appendChild(cardContainer);

    const header = document.createElement('h2');
    header.style.textAlign = 'center';
    let names = document.createTextNode(card.name);
    //header.textContent = card.name;
    cardContainer.appendChild(header);
    header.appendChild(names);

    const text = document.createElement('p');
    text.style.textAlign = 'center';
    let ages = document.createTextNode(card.age);
    //text.textContent = card.age;
    cardContainer.appendChild(text);
    text.appendChild(ages);
    
    const image = document.createElement('img');
    image.style.width = '220px';
    image.src = card.imageSrc;
    image.alt = card.header;
    cardContainer.appendChild(image);

});
