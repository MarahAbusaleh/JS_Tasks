const Selection = document.getElementById('Selection');
const img = document.getElementById('img');

Selection.addEventListener('change', function() {

    const selectedOption = Selection.value;
    let imagePath = '';

    if(selectedOption == "jordan") {
        imagePath = "./Images/jordan.jpg";
    }
    else if(selectedOption == "palestine") {
        imagePath = "./Images/palestine.jpg";
    }

    const image = document.createElement('img');
    image.style.width = '300px'
    image.src = imagePath;
    image.alt = selectedOption;

    img.innerHTML = '';
    img.appendChild(image);

});

//document.getElementById().img.src = this .value    //try this