let spanContainer = document.getElementsByTagName('span');

let fname = document.getElementById('fname');

fname.addEventListener("input", function () {

    const regexfname = /^[^\d\s]+$/;
    ///[A-Za-z]+/;
    if(regexfname.test(fname.value)){
        spanContainer[0].innerHTML = 'Correct Name';
        spanContainer[0].style.color = 'green';
        console.log("Correct Name")
    }else{
        spanContainer[0].innerHTML = 'Numbers are not allowed';
        spanContainer[0].style.color = 'red';
        console.log("Numbers are not allowed");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////

let lname = document.getElementById('lname');

lname.addEventListener("input", function () {

    const regexlname = /^[^\d\s]+$/;
    ///[A-Za-z]+/;
    if(regexlname.test(lname.value)){
        spanContainer[1].innerHTML = 'Correct Name';
        spanContainer[1].style.color = 'green';
        console.log("Correct Name")
    }else{
        spanContainer[1].innerHTML = 'Numbers are not allowed';
        spanContainer[1].style.color = 'red';
        console.log("Numbers are not allowed");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////

let bdate = document.getElementById('bdate');

bdate.addEventListener("input", function () {

    const regexbdate = /^\d{2}\/\d{2}\/\d{4}$/;

    if(regexbdate.test(bdate.value)){
        spanContainer[2].innerHTML = 'Correct Date Format';
        spanContainer[2].style.color = 'green';
        console.log("Correct Date Format")
    }else{
        spanContainer[2].innerHTML = 'InCorrect Date Format';
        spanContainer[2].style.color = 'red';
        console.log("InCorrect Date Format");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////

let email = document.getElementById('email');

email.addEventListener("input", function () {

    const regexemail = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,}/;

    if(regexemail.test(email.value)){
        spanContainer[3].innerHTML = 'Valid Email';
        spanContainer[3].style.color = 'green';
        console.log("Valid Email")
    }else{
        spanContainer[3].innerHTML = 'InValid Email';
        spanContainer[3].style.color = 'red';
        console.log("InValid Email");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////

let confemail = document.getElementById('confemail');

confemail.addEventListener("input", function () {

    if(confemail.value == email.value){
        spanContainer[4].innerHTML = 'Match Email';
        spanContainer[4].style.color = 'green';
        console.log("Match Email")
    }else{
        spanContainer[4].innerHTML = 'Email Not Matching';
        spanContainer[4].style.color = 'red';
        console.log("Email Not Matching");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////

let pass = document.getElementById('pass');

pass.addEventListener("input", function () {

    const regexpass =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    if(regexpass.test(pass.value)){
        spanContainer[5].innerHTML = 'Valid Password';
        spanContainer[5].style.color = 'green';
        console.log("Valid Password")
    }else{
        spanContainer[5].innerHTML = 'InValid Password';
        spanContainer[5].style.color = 'red';
        console.log("InValid Password");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////

let confpass = document.getElementById('confpass');

confpass.addEventListener("input", function () {

    if(confpass.value == pass.value){
        spanContainer[6].innerHTML = 'Match Password';
        spanContainer[6].style.color = 'green';
        console.log("Match Password")
    }else{
        spanContainer[6].innerHTML = 'Password Not Matching';
        spanContainer[6].style.color = 'red';
        console.log("Password Not Matching");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////