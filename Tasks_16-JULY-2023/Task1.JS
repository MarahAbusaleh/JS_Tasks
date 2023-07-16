let colorInput = document.getElementById("colorInput");

function changColor(){
    sessionStorage.pageColor = colorInput.value;
    document.body.style.backgroundColor = sessionStorage.getItem('pageColor');
}


