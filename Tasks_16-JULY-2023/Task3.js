let fname = document.getElementById('fname');

fname.addEventListener("input", function () {

    const regexfname = /^[^\d\s]+$/;
    ///[A-Za-z]+/;
    if(regexfname.test(fname.value)){
        console.log("Correct Name")
    }else{
        console.log("Numbers are not allowed");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////

let lname = document.getElementById('lname');

lname.addEventListener("input", function () {

    const regexlname = /^[^\d\s]+$/;
    ///[A-Za-z]+/;
    if(regexlname.test(lname.value)){
        console.log("Correct Name")
    }else{
        console.log("Numbers are not allowed");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////

let bdate = document.getElementById('bdate');

bdate.addEventListener("input", function () {

    const regexbdate = /^\d{2}\/\d{2}\/\d{4}$/;

    if(regexbdate.test(bdate.value)){
        console.log("Correct Date Format")
    }else{
        console.log("InCorrect Date Format");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////

let email = document.getElementById('email');

email.addEventListener("input", function () {

    const regexemail = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,}/;

    if(regexemail.test(email.value)){
        console.log("Valid Email")
    }else{
        console.log("InValid Email");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////

let confemail = document.getElementById('confemail');

confemail.addEventListener("input", function () {

    if(confemail.value == email.value){
        console.log("Match Email")
    }else{
        console.log("Email Not Matching");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////

let pass = document.getElementById('pass');

pass.addEventListener("input", function () {

    const regexpass =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    if(regexpass.test(pass.value)){
        console.log("Valid Password")
    }else{
        console.log("InValid Password");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////

let confpass = document.getElementById('confpass');

confpass.addEventListener("input", function () {

    if(confpass.value == pass.value){
        console.log("Match Password")
    }else{
        console.log("Password Not Matching");
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////