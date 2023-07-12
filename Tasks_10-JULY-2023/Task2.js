/* 1. Write a JavaScript program that returns rate as text
        less than 50 return ==> Fail
        equal or between 50 and 59 ===> E
        equal or between 60 and 69 ===> D
        equal or between 70 and 79 ===> C
        equal or between 80 and 89 ===> B
        equal or between 90 and 100 ===> A
*/

const GPAValue = 85;
switch (true) {
  case GPAValue < 50:
    console.log("Fail");
    break;
  case GPAValue >= 50 && GPAValue <= 59:
    console.log("E");
    break;
  case GPAValue >= 60 && GPAValue <= 69:
    console.log("D");
    break;
  case GPAValue >= 70 && GPAValue <= 79:
    console.log("C");
    break;
  case GPAValue >= 80 && GPAValue <= 89:
    console.log("B");
    break;
  case GPAValue >= 90 && GPAValue <= 100:
    console.log("A");
    break;
}
