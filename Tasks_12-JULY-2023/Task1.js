/*****************************************************************************************************************************************
1-
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*****************************************************************************************************************************************/

function tellFortune(joTtitle, geographicLocation, partnerName, numberOfChildren){
  return console.log(`You will be a ${joTtitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`);
}
tellFortune('software engineer', 'Jordan', 'Alice', 3);

/*****************************************************************************************************************************************
2-
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*****************************************************************************************************************************************/

function calculateDogAge(age){
  return console.log(`Your doggie is ${age*7} years old in dog years!`);
}
calculateDogAge(1);

/*****************************************************************************************************************************************
3-
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*****************************************************************************************************************************************/

function calculateSupply(age, amount){
  return console.log(`You will need ${(100-age)*365*amount} cups of tea to last you until the ripe old age of 100`)
}
calculateSupply(30, 3);

/*****************************************************************************************************************************************
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*****************************************************************************************************************************************/

function greet(name){
  return console.log(`Hello ${name}`)
}
greet("Adam");

/*****************************************************************************************************************************************
5-
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*****************************************************************************************************************************************/

function double(cat) {
  return 2 * cat;
}

function double(y) { //when declacre function we write the parameter not argument so we don't write a values
  return 2 * y;
}

function double(x) {
  return 2 * x;
}


/*****************************************************************************************************************************************
6-
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*****************************************************************************************************************************************/

function double1(x) {
  return 2 * x ;
}

function double2(x){
  return 2 * x;
}

function double3(x){
  return 2 * x;
}

/*****************************************************************************************************************************************
7-
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*****************************************************************************************************************************************/

function cube(num){
  return console.log(num**3);
}
cube(4);

/*****************************************************************************************************************************************
8-
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*****************************************************************************************************************************************/

function multiply(n1,n2){
  return console.log(n1*n2);
}
multiply(3,4);

/*****************************************************************************************************************************************
9-
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*****************************************************************************************************************************************/

function canIGetADrivingLicense(age){
  if(age>=20)
    return console.log("yes you can");
  else
    return console.log(`please come back after ${20-age} years to get one`);
}
canIGetADrivingLicense(21);
canIGetADrivingLicense(17);

/*****************************************************************************************************************************************
10-
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*****************************************************************************************************************************************/

function sameLength(s1, s2){
  if(s1.length == s2.length)
    return console.log("true");
  else
    return console.log("false");
}
sameLength("tree","clue");
sameLength("tree","car");

/*****************************************************************************************************************************************
11-
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*****************************************************************************************************************************************/

function largerNubmer(num1,num2){
  if(num1>num2)
    return console.log(num1);
  else
    return console.log(num2);
}
largerNubmer(5,6);
largerNubmer(5,3);

/*****************************************************************************************************************************************
12-
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*****************************************************************************************************************************************/

function smallerNubmer(a1, a2, a3){
  if(a1<a2 && a1<a3)
    return console.log(a1);
  else if(a2<a1 && a2<a3)
    return console.log(a2);
  else
    return console.log(a3);
}
smallerNubmer(8,6,7);
smallerNubmer(5,99,34);
smallerNubmer(5,99,3);
smallerNubmer(5,3,3);

/*****************************************************************************************************************************************
13-
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by -> tr not by

Ex: shorterString("air","tr","car","github","by")
=> by -> tr not by

*****************************************************************************************************************************************/

function shorterString(str1, str2, str3, str4, str5) {
  const strings = [str1, str2, str3, str4, str5];
  let shortestStringVal = strings[0];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length < shortestStringVal.length) {
      shortestStringVal = strings[i];
    }
  }
  return console.log(shortestStringVal);
}
shorterString("air", "school", "car", "by", "github"); // Output: by
shorterString("air", "tr", "car", "by", "github"); // Output: tr
shorterString("by", "tr", "car", "air", "github"); // Output: by
shorterString("air", "by", "car", "school", "github"); // Output: by
shorterString("air", "tr", "by", "car", "github"); // Output: tr
shorterString("air", "tr", "car", "github", "by");  // Output: tr

/*****************************************************************************************************************************************
14-
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*****************************************************************************************************************************************/

function longerString(str1, str2, str3, str4){
  const strings = [str1, str2, str3, str4];
  let longStringVal = strings[0];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longStringVal.length) {
      longStringVal = strings[i];
    }
  }
  return console.log(longStringVal);

}
longerString("air","school","car","github");
longerString("air","schoo","car","github");

/*****************************************************************************************************************************************
15-
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*****************************************************************************************************************************************/

function isEven(numb){
  if(numb%2 == 0)
    return console.log("true");
  else
    return console.log("false");
}
isEven(1);
isEven(2);

/*****************************************************************************************************************************************
16-
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*****************************************************************************************************************************************/

function isOdd(numb){
  if(numb%2 != 0)
    return console.log("true");
  else
    return console.log("false");
}
isOdd(4);
isOdd(5);

/*****************************************************************************************************************************************
17-
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*****************************************************************************************************************************************/

function positive(num){
  if(num<0)
    return console.log(num*-1);
  else
    return console.log(num);
}
positive(4);
positive(-5);

/*****************************************************************************************************************************************
18-
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*****************************************************************************************************************************************/

function fullName(fname, lname){
  return console.log(`${fname} ${lname}`);
}
fullName("Adam","McCallen");
fullName("Alex", "Mercer");

/*****************************************************************************************************************************************
19-
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*****************************************************************************************************************************************/

function average(n1,n2,n3,n4,n5){
  return console.log((n1+n2+n3+n4+n5)/5);
}

average(1,2,3,4,5);
average(5,7,9,3,5);

/*****************************************************************************************************************************************
20-
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
**hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*****************************************************************************************************************************************/

function randomNumber() {
  return console.log(Math.random());
}

randomNumber();
randomNumber(); 

/*****************************************************************************************************************************************
21-
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*****************************************************************************************************************************************/

function randomBetweenNumbers(min, max) {
  return console.log(Math.random() * (max - min) + min); 
}

randomBetweenNumbers(1, 8); 
randomBetweenNumbers(3, 100); 

/*****************************************************************************************************************************************
22-
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*****************************************************************************************************************************************/

function scoreInUniversty(GPAValue){
  switch (true) {
    case GPAValue < 50:
      return(console.log("F"));
    case GPAValue >= 50 && GPAValue <= 59:
      return(console.log("E"));
    case GPAValue >= 60 && GPAValue <= 69:
      return(console.log("D"));
    case GPAValue >= 70 && GPAValue <= 79:
      return(console.log("C"));
    case GPAValue >= 80 && GPAValue <= 89:
      return(console.log("B"));
    case GPAValue >= 90 && GPAValue <= 100:
      return(console.log("A"));
  }
}

scoreInUniversty(96);
scoreInUniversty(3);
scoreInUniversty(71);

/*****************************************************************************************************************************************
23-
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*****************************************************************************************************************************************/
let count = 0;
function counter(){
  count++;
  return console.log(count);

}

counter();
counter();

/*****************************************************************************************************************************************
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*****************************************************************************************************************************************/

let count2 = 0;
function resetCounter(){
  count2++;
  return console.log(count2);
}
console.log(`${count} and the counter reset now`)
resetCounter();
resetCounter();
resetCounter();