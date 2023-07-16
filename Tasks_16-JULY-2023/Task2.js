//localStorage.clear();

function onClick(){

    const nameInput = document.getElementById("uname");

    const name = nameInput.value; // Get the value from the input field
    localStorage.setItem("Name", name); // Save the name in local storage with the key "name"


    //////////////////////////////////////////////////////////////////////////////////////////////////

    const ageInput = document.getElementById("age");

    const age = ageInput.value; // Get the value from the input field
    localStorage.setItem("Age", age); // Save the age in local storage with the key "age"

    //////////////////////////////////////////////////////////////////////////////////////////////////

    const genderInput = document.getElementById("gender");
    
    const gender = genderInput.value; // Get the value from the input field
    localStorage.setItem("Gender", gender); // Save the gender in local storage with the key "gender"

    //////////////////////////////////////////////////////////////////////////////////////////////////

    const birthdateInput = document.getElementById("birthdate");

    const birthdate = birthdateInput.value; // Get the value from the input field
    localStorage.setItem("Birth Date", birthdate); // Save the birth date in local storage with the key "birthdate"

    //////////////////////////////////////////////////////////////////////////////////////////////////

    const imageInput = document.getElementById("image");

    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const base64Image = e.target.result;
        localStorage.setItem("imageData", base64Image);
    };

    reader.readAsDataURL(file);


    //////////////////////////////////////////////////////////////////////////////////////////////////

    const descripInput = document.getElementById("description");   
    
    const descripp = descripInput.value; // Get the value from the input field
    localStorage.setItem("Description", descripp); // Save the description in local storage with the key "Description"

    //////////////////////////////////////////////////////////////////////////////////////////////////
    
    const majorInput = document.getElementById("major");

    const major = majorInput.value; // Get the value from the input field
    localStorage.setItem("Major", major); // Save the major in local storage with the key "Major"
    
    //////////////////////////////////////////////////////////////////////////////////////////////////

    const checkboxes = document.querySelectorAll('input[name="programmingLanguages"]');

    checkboxes.forEach(function () {


    const selectedLanguages = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

    localStorage.setItem("Selected Languages", JSON.stringify(selectedLanguages));

    });
    
    //////////////////////////////////////////////////////////////////////////////////////////////////

    const siblingsNumberInput = document.getElementById("siblingsNumber");

    const siblingsNumber = siblingsNumberInput.value; // Get the value from the input field
    localStorage.setItem("Siblings Number", siblingsNumber); // Save the siblingsNumber in local storage with the key "Siblings Number"

    //////////////////////////////////////////////////////////////////////////////////////////////////
    
    const siblingsDescriptionInput = document.getElementById("siblingsDescription");

    const siblingsDescription = siblingsDescriptionInput.value; // Get the value from the input field
    localStorage.setItem("Siblings Description", siblingsDescription); // Save the siblingsDescription in local storage with the key "Siblings Description"

}

done();

function done(){

    let namee = document.getElementById('namee');
    const storedName = localStorage.getItem("Name");
    namee.textContent = storedName;

    /////////////////////////////////////////////////
    
    let agee = document.getElementById('agee');
    const storedAge = localStorage.getItem("Age");
    agee.textContent = storedAge;

    /////////////////////////////////////////////////

    let genderr = document.getElementById('genderr');
    const storedGender = localStorage.getItem("Gender");
    genderr.textContent = storedGender;

    /////////////////////////////////////////////////

    let bd = document.getElementById('bd');
    const storedBD = localStorage.getItem("Birth Date");
    bd.textContent = storedBD;

    /////////////////////////////////////////////////

    let img = document.getElementById('img');
    const storedImage = localStorage.getItem("imageData");
    img.setAttribute('src' , storedImage);
    img.style.width ='150px';

    /////////////////////////////////////////////////

    let descrip = document.getElementById('descrip');
    const storeddescrip = localStorage.getItem("Description");
    descrip.textContent = storeddescrip;

    /////////////////////////////////////////////////

    let mu = document.getElementById('mu');
    const storedmajor = localStorage.getItem("Major");
    mu.textContent = storedmajor;

    /////////////////////////////////////////////////

    let lang = document.getElementById('lang');
    const storedLanguages = JSON.parse(localStorage.getItem("Selected Languages"));

    lang.textContent = storedLanguages;

    /////////////////////////////////////////////////

    let sn = document.getElementById('sn');
    const storedsiblingsNumber = localStorage.getItem("Siblings Number");
    sn.textContent = storedsiblingsNumber;

    /////////////////////////////////////////////////

    let sd = document.getElementById('sd');
    const storedsiblingsDescription = localStorage.getItem("Siblings Description");
    sd.textContent = storedsiblingsDescription;
    
}