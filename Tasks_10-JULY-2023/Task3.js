// 1. Write a JS code to print numbers from 1 to 10
for(let i = 1 ; i <= 10 ; i++){
    console.log(i);
}

/*
2. Write a JS code to print Even numbers in arr :
var arr = [13,23,12,45,22,48,66,100]
*/

var arr = [13,23,12,45,22,48,66,100];
for(let j=0 ; j < arr.length ; j++){
    if(arr[j]%2 == 0)
        console.log(arr[j]);
}

/* 
3. Write a JS code to print a pattern using for loop
   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 
*/

for(let a=1 ; a<=8 ; a++){
    let sol = " "; 
    for(let b=1 ; b<=a ; b++){
        sol += b + " ";
    }
    console.log(sol);
}

/* 
4. Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"
*/

let x = "don’t know why";
if(x.includes("y")){
    console.log("Yes");
}
else{
    console.log("No");
}