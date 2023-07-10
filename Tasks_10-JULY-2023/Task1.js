/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

let x1 = 10;
let y1 = 20;
if(x1 > y1){
    console.log(`x1 = ${x1} is larger than y1 = ${y1}`);
}
else{
    console.log(`y1 = ${y1} is larger than x1 = ${x1}`);
}

/******* End Your Code **********/

/* 2. Write a JavaScript conditional statement to find the sign
of product of three numbers. Display an alert box with the 
specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

let x2 = 3;
let y2 = -7;
let z2 = 2;

let product = x2 * y2 * z2;
if(product > 0){
    //console.log("The sign is +");
    window.alert("The sign is +");
}
else{
    //console.log("The sign is -");
    window.alert("The sign is -");
}

/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

let x3 = 0;
let y3 = -1;
let z3 = 4;
let largest, middle, smallest;

if (x3 >= y3 && x3 >= z3) {
  largest = x3;
  if (y3 >= z3) {
    middle = y3;
    smallest = z3;
  } else {
    middle = z3;
    smallest = y3;
  }
} else if (y3 >= x3 && y3 >= z3) {
  largest = y3;
  if (x3 >= z3) {
    middle = x3;
    smallest = z3;
  } else {
    middle = z3;
    smallest = x3;
  }
} else {
  largest = z3;
  if (x3 >= y3) {
    middle = x3;
    smallest = y3;
  } else {
    middle = y3;
    smallest = x3;
  }
}

const result = largest + ', ' + middle + ', ' + smallest;
window.alert(result);

/******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/


const x4 = -5;
const y4 = -2;
const z4 = -6;
const w4 = 0;
const q4 = -1;

let tempLarge = x4;

if(x4 > tempLarge){
    tempLarge = x4;
}
if(y4 > tempLarge){
    tempLarge = y4;
}
if(z4 > tempLarge){
    tempLarge = z4;
}
if(w4 > tempLarge){
    tempLarge = w4;
}
if(q4 > tempLarge){
    tempLarge = q4;
}

window.alert(`The largest number is : ${tempLarge}`);

/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/

let x5 = 10;
let y5 = 20;
if(x5 > y5){
    window.alert("Hello World");
}
else{
    window.alert("Goodbye");
}

/******* End Your Code ********* */



