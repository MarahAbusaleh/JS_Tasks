/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/

let x = 250;
let zakat = x * (2.5/100);
console.log(zakat);

/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

let num = [ 1 , 7 , 9 , 45];
console.log(num);

let str = ['Str' , 'alex' , 'moh' , 'the' , 'fox' , 'over' , 'lazy' , 'dog'];
console.log(str);

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

console.log("The index of 'Banana' -> 1");
console.log("The index of 'Tomato' -> 0");

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

let Food = ["Mlokhia" , "Kabsah"];
let Sport = ["I" , "Don't Like" , "Sport"];
let Movie = ["Zaky Chan" , "Mido Mashakel"];

console.log(Food);
console.log(Sport);
console.log(Movie);

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

let arr1 = [1,4,5];
console.log(arr1[0]);

let arr2 = ["t","u","g","x"];
console.log(arr2[0]);

/*
5
Create a Variable to return the lastOfArray element in an array 
Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

let arr11 = [1,4,5];
console.log(arr1[arr1.length-1]);

let arr22 = ["t","u","g","x"];
console.log(arr2[arr2.length-1]);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0,5,7,9];
array.shift();        //remove 0
array.shift();        //remove 5
array.shift();        //remove 7

array.unshift(8);     //add 8
array.unshift(6);     //add 6
array.unshift(4);     //add 4
array.unshift(3);     //add 3
array.unshift(1);     //add 1

//array.unshift(1,3,4,6,8);    we can unshift all in one line

array.push(10);

console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [5,9,-7,3.5];

array2.push(100);
console.log(array2);

array2.unshift(10);
console.log(array2);

array2.shift();
console.log(array2);

array2.pop();
console.log(array2);

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

var arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//arr.sort(); -> -3,-4,1,2,3,5,6,7,8 

arr.sort(function(a, b) {
    return a - b;
});
console.log(arr);


