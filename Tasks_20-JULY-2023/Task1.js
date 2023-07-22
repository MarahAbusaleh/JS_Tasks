/*************************************************Reduce 1 - 5*************************************************/

var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/

function avgAge(arr){
    
    const sumOfAges = arr.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
    // const result = arr.reduce(function(accumulator, currentValue){
    //     return  (accumulator + currentValue);
    // });
    return sumOfAges/arr.length;
}

// let arr1 = [10, 15, 20, 25, 30, 35];
// console.log(avgAge(arr1));      //22.5

console.log(avgAge(persons));       //41.2

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
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
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/

function maxNumber(arr){

    const maxNum = arr.reduce((accumulator, currentValue) => {
        
        if(currentValue > accumulator)
            return currentValue;
        else
            return accumulator;
    }, 0);

    return maxNum;
}

console.log(maxNumber([1,2,4,9]));      //9

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/

function repeatChar(str, ch){

    const charArray = str.split('');
    const repetChatInStr = charArray.reduce((accumulator, currentValue) => {
        
        if(currentValue == ch)
            return accumulator + 1;

        return accumulator;
    }, 0);

    return repetChatInStr;

}

console.log(repeatChar("hello world",'w'));       //1

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

// function usAndNumberBeetweenUs(number1, number2) {
//     let array = [number1, number2];
//     array.reduce((accumulator, currentValue) => {
//         if (currentValue == number1) {
//             array = [number1, number1 + 1, number1 + 2, number2]
//             console.log(array);
//         }

//     }, 0)

// }

function usAndNumberBetweenUs(n1, n2){

    const numbersBetween = Array.from({ length: n2 - n1 + 1 }, (_, index) => n1 + index);
    return numbersBetween;
}

console.log(usAndNumberBetweenUs(2,5));     //[2,3,4,5]

/*************************************************Filter 6 - 11*************************************************/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/

function evenOnly(arr){

    const evenNum = arr.filter((currentValue) => {
        return currentValue%2 == 0;
    });

    return evenNum;

}

console.log(evenOnly([1,8,6,4]));       //[8,6,4]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/

function multiFour(arr){

    const mul4 = arr.filter((currentValue) => {
        return currentValue%4 == 0;
    });

    return mul4;

}

console.log(multiFour([1,8,6,4]));      //[8,4]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

function containChar(str, ch){

    function StrContainCh(str) {
        return str.includes(ch);//true or false
    }

    return str.filter(StrContainCh);//true -> contain the char -> add to array

}

console.log(containChar(["hello","world"],'w'));     //["world"]
console.log(containChar(["hello","world"],'l'));     //["hello","world"]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

function evenIndexOddLength(arr){

    const evenIndex = arr.filter((currentValue, index) => {
        return index%2 == 0;
    });

    const oddLength = evenIndex.filter((currentValue, index) => {
        return currentValue.length%2 != 0;
    });
    return oddLength;

}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log( evenIndexOddLength(strings));      //["madrasa"]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

function olderThan(arr, num){

    const oldAge = arr.filter((currentValue) => {
        return currentValue.age > num;
    });

    return oldAge;

}

console.log(olderThan(persons,56));      //[{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/

function shorterThan(str, num){

    const shortStr = str.filter((currentValue) => {
        return currentValue.length < num;
    });

    return shortStr;

}

console.log(shorterThan(strings,5));      //["alex","emad","hala"]