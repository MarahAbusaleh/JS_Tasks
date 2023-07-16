let Font = document.querySelectorAll('select');
let inVal = document.querySelectorAll('input');
let txt = document.querySelector('p');

//fontType
Font[0].addEventListener('change', function(){

    if(Font[0].value == "Times New Roman"){
        txt.style.fontFamily = "Times New Roman";
    }
    else if(Font[0].value == "Fantasy"){
        txt.style.fontFamily = "Fantasy";
    }

});

//fontSize
Font[1].addEventListener('change', function(){

    if(Font[1].value == "10px"){
        txt.style.fontSize = "10px";
    }
    else if(Font[1].value == "15px"){
        txt.style.fontSize = "15px";
    }

});

for(let i = 0; i < inVal.length; i++) {

    inVal[i].addEventListener('click', function() {

        if(inVal[i].checked) {

            if(inVal[i].id == "italic") {
                txt.style.fontStyle = 'italic';
            }
            else if (inVal[i].id == "bold") {
                txt.style.fontWeight = 'bold';
            }
            else {
                txt.style.textDecoration = 'underline';
            }

        }
        else {

            txt.style.fontStyle = 'normal';
            txt.style.fontWeight = 'normal';
            txt.style.textDecoration = 'none';
            
        }

    });

}