//localStorage.clear();
let firstCard = document.getElementById('firstCard');
let namee = document.getElementById('namee');

const nameInput = document.getElementById("uname");

nameInput.addEventListener("input", function (event) {

    const name = event.target.value; // Get the value from the input field
    localStorage.setItem("Name", name); // Save the name in local storage with the key "name"

});

const storedName = localStorage.getItem("Name");
console.log(storedName);

namee.textContent = storedName;

//////////////////////////////////////////////////////////////////////////////////////////////////

const ageInput = document.getElementById("age");
let agee = document.getElementById('agee');

ageInput.addEventListener("input", function (event) {

    const age = event.target.value; // Get the value from the input field
    localStorage.setItem("Age", age); // Save the age in local storage with the key "age"

});

const storedAge = localStorage.getItem("Age");
console.log(storedAge); 

agee.textContent = storedAge;

//////////////////////////////////////////////////////////////////////////////////////////////////

const genderInput = document.getElementById("gender");
let genderr = document.getElementById('genderr');

genderInput.addEventListener("input", function (event) {

    const gender = event.target.value; // Get the value from the input field
    localStorage.setItem("Gender", gender); // Save the gender in local storage with the key "gender"

});

const storedGender = localStorage.getItem("Gender");
console.log(storedGender); 

genderr.textContent = storedGender;

//////////////////////////////////////////////////////////////////////////////////////////////////

const birthdateInput = document.getElementById("birthdate");
let bd = document.getElementById('bd');

birthdateInput.addEventListener("input", function (event) {

    const birthdate = event.target.value; // Get the value from the input field
    localStorage.setItem("Birth Date", birthdate); // Save the birth date in local storage with the key "birthdate"

});

const storedBD = localStorage.getItem("Birth Date");
console.log(storedBD); 

bd.textContent = storedBD;

//////////////////////////////////////////////////////////////////////////////////////////////////

const imageInput = document.getElementById("image");
let img = document.getElementById('img');

imageInput.addEventListener("change", function (event) {

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const base64Image = e.target.result;
        localStorage.setItem("imageData", base64Image);
    };

    reader.readAsDataURL(file);

});

const storedImage = localStorage.getItem("imageData");
console.log(storedImage);

img.setAttribute('src' , storedImage);
img.style.width ='150px'

//////////////////////////////////////////////////////////////////////////////////////////////////

const descripInput = document.getElementById("description");
let descrip = document.getElementById('descrip');

descripInput.addEventListener("input", function (event) {

    const descrip = event.target.value; // Get the value from the input field
    localStorage.setItem("Description", descrip); // Save the description in local storage with the key "Description"

});

const storeddescrip = localStorage.getItem("Description");
console.log(storeddescrip); 

descrip.textContent = storeddescrip;

//////////////////////////////////////////////////////////////////////////////////////////////////

const majorInput = document.getElementById("major");
let mu = document.getElementById('mu');

majorInput.addEventListener("input", function (event) {

    const major = event.target.value; // Get the value from the input field
    localStorage.setItem("Major", major); // Save the major in local storage with the key "Major"

});

const storedmajor = localStorage.getItem("Major");
console.log(storedmajor); 

mu.textContent = storedmajor;

//////////////////////////////////////////////////////////////////////////////////////////////////

const checkboxes = document.querySelectorAll('input[name="programmingLanguages"]');
let lang = document.getElementById('lang');

checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        const selectedLanguages = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

        localStorage.setItem("Selected Languages", JSON.stringify(selectedLanguages));

    });

});

const storedLanguages = JSON.parse(localStorage.getItem("Selected Languages"));
console.log(storedLanguages); 

lang.textContent = storedLanguages;

//////////////////////////////////////////////////////////////////////////////////////////////////

const siblingsNumberInput = document.getElementById("siblingsNumber");
let sn = document.getElementById('sn');

siblingsNumberInput.addEventListener("input", function (event) {

    const siblingsNumber = event.target.value; // Get the value from the input field
    localStorage.setItem("Siblings Number", siblingsNumber); // Save the siblingsNumber in local storage with the key "Siblings Number"

});

const storedsiblingsNumber = localStorage.getItem("Siblings Number");
console.log(storedsiblingsNumber); 

sn.textContent = storedsiblingsNumber;

//////////////////////////////////////////////////////////////////////////////////////////////////

const siblingsDescriptionInput = document.getElementById("siblingsDescription");
let sd = document.getElementById('sd');

siblingsDescriptionInput.addEventListener("input", function (event) {

    const siblingsDescription = event.target.value; // Get the value from the input field
    localStorage.setItem("Siblings Description", siblingsDescription); // Save the siblingsDescription in local storage with the key "Siblings Description"

});

const storedsiblingsDescription = localStorage.getItem("Siblings Description");
console.log(storedsiblingsDescription); 

sd.textContent = storedsiblingsDescription;