/*************************************************object*************************************************/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

let myObject = {
    fname : "Marah",
    lname : "Abusaleh",
    age : 23,
    dob : '13-12-2000',
    favFood : ['food1', 'food2', 'food3'],
    favMovie : ['movie1', 'movie2', 'movie3', 'movie4', 'movie5']
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

function firstName(arr){

    const fName = arr.map((currentValue) => {
        return currentValue.name.first;
    });

    return fName;
}

console.log(firstName(persons));        //['John', 'Alex', 'Alice', 'Thor', 'Soso']

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/

function averageAge(arr){

    const sumOfAges = arr.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
    return sumOfAges/arr.length;

}

console.log(averageAge(persons));      //41.2

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/

function olderPerson(arr){

    let olderOne = arr[0];
    arr.forEach((currentValue) => {
        
        if(currentValue.age > olderOne.age){
            olderOne = currentValue;
        }

    });

    return `${olderOne.name.first} ${olderOne.name.last}`;
}

console.log(olderPerson(persons));      //"Soso Al-Amora"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(arr){

    const longestFullName = arr.reduce((accumulator, currentValue) => {
        //console.log(accumulator);
        const fullName = `${currentValue.name.first} ${currentValue.name.last}`;

        if(fullName.length >accumulator.length )
            return fullName;
        else 
            return accumulator;
        
    }, '');

    return longestFullName;
}

console.log(longestName(persons));      //Soso Al-Amora

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

//repeted

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
    my:1,
    name:2,
    is:1,
    alex:1,
    mercer:1,
    class:1,
    b:1,
    baba:1,
    mama:1,
    hello:3
}
*/

function repeatWord(str){
    let splitStr = str.toLowerCase().split(' ');
    const wordCountObj = {};

    splitStr.forEach((currentValue) => {

        if (wordCountObj.hasOwnProperty(currentValue)) {
            wordCountObj[currentValue]++;
        } else {
            wordCountObj[currentValue] = 1;
        }

    });

    return wordCountObj;

}

console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

function repeatChar(str){
    let splitStr = str.toLowerCase().split('');
    const charCountObj = {};

    splitStr.forEach((currentValue) => {

        if (charCountObj.hasOwnProperty(currentValue)) {
            charCountObj[currentValue]++;
        } else {
            charCountObj[currentValue] = 1;
        }

    });

    return charCountObj;

}

console.log(repeatChar("mamababatetacedo"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/

function selectFromObject(obj, arr){

    let objResult = {};
    arr.forEach(currentValue => {

        //console.log(currentValue);
        if (obj.hasOwnProperty(currentValue)) {//Determines whether an object has a property with the specified name.
            objResult[currentValue] = obj[currentValue];
        }
        
    });
    
    return objResult;

}

console.log(selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/

function objectToArray(obj){

    let arr = [];
    for (const key in obj) {

        arr.push(key);
        arr.push(obj[key]);

    }
    
    return arr;

}

console.log(objectToArray({firstName:"Moh",age:24}));      //["firstName","Moh","age",24]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/

function arrayToObject(arr){

    let obj = {};

    //sol 1
    arr.forEach((currentValue, index, array) => {

        obj[currentValue] =  array[index+1];
        arr.shift();
        
    });

    //sol  2
    // arr.forEach((currentValue, index, array) => {

    //     if(index%2 == 0){       //even -> this is te value
    //         obj[currentValue] = array[index + 1]
    //     }
        
    // });
    return obj;

}

console.log(arrayToObject(["firstName","Moh","age",24]));      //{firstName:"Moh",age:24}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/

function onlyNumber(obj){

    let newObj = {};

    for (const key in obj) {

        // console.log(key);
        // console.log(typeof obj[key]);
        if((typeof obj[key]) == 'number'){
            newObj[key] = obj[key];
        }  
    }

    return newObj;
}

console.log(onlyNumber({firstName:"Moh", age:24, movies:[1,5,"string"]}));      //{age:24}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/

function onlyString(obj){

    let newObj = {};

    for (const key in obj) {

        // console.log(key);
        // console.log(typeof obj[key]);
        if((typeof obj[key]) == 'string'){
            newObj[key] = obj[key];
        }  
    }

    return newObj;

}

console.log(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]}));      //{firstName:"Moh"}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/

function onlyArray(obj){

    let newObj = {};

    for (const key in obj) {

        // console.log(key);
        //console.log(typeof obj[key]);
        if((typeof obj[key]) == 'object'){
            newObj[key] = obj[key];
        }  
    }

    return newObj;
}

console.log(onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));      //{movies:[1,5,"string"]}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/

function keysArray(obj){

    let arr = [];
    for (const key in obj) {

        arr.push(key);
        
    }

    return arr;

}

console.log(keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));      //['firstName', 'age', 'movies']


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/
function valuesArray(obj){

    let arr = [];
    for (const key in obj) {

        arr.push(obj[key]);
        
    }

    return arr;

}

console.log(valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));      //["Moh", 24, [1,5,"string"]]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/

let initailObj = {a:1,b:3,c:4};

for (const key in initailObj) {
    if(key == 'a'){
        initailObj[key] = 4;
    }
    if(key == 'b'){
        delete initailObj[key];
    }
    if(key == 'c'){
        initailObj[key] = 66;
    }
    
}
console.log(initailObj);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: objectLength({a:1,b:2,c:3,d:4})
=> 4
*/

function objectLength(obj){
    let count = 0;

    for (const key in obj) {
        count++;
    }

    return count;

}

console.log(objectLength({a:1,b:2,c:3,d:4}));      //4

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/

function evenValue(obj){

    let newObj = {};

    for (const key in obj) {
        if (obj[key]%2 == 0) {
            newObj[key] = obj[key];            
        }
    }

    return newObj;

}

console.log(evenValue({a:1, b:2, c:3, d:4}));      //{b:2, d:4}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: longestKey({car:1, school:2, monster:3, alexMercer:4})=> 4
*/

function longestKey(obj){

    let longestKeyVal;
    for (const key in obj) {

        longestKeyVal = '';
        if (key.length > longestKeyVal.length) {
            longestKeyVal = key;
        }
    }
    return obj[longestKeyVal];

}

console.log(longestKey({car:1, school:2, monster:3, alexMercer:4}));      //4
