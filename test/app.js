// ques no 1


// let arr = ['apple' , 'mango', 'banana', 'pineapple']

// for (let i = 0; i < arr.length; i++) {
//     console.log('element at index '+ [i ] +  ' is ' + arr[i]);
// }


// ques no 3

// function printNumbers(array, stopValue) {
//     stopValue = Math.min(stopValue, array.length);
 
//     for (let i = 0; i < stopValue; i++) {
//         console.log(array[i]);
//     }
//  }
 
//  var array = [1, 2, 3, 4, 5, 6];
//  var userInput = prompt("enter value")
 
//  printNumbers(array, userInput);












// ques no 2



// let userinput = prompt('welcome to my bakery')

// let bakery = ['cookie', 'pastry', 'cake', 'pineapple cake']

// for (let i = 0; i < bakery.length; i++) {

//    if (userinput == bakery[i]) {
//     console.log('yes its avail ' + userinput);
//     break;
//    } else {
//     console.log('its not be avail' );
//    }

// }




// ques no 7





// function celsiusToFahrenheit() {
//     let celsius = +prompt('Enter Celsius Temperature')
//     let b = (a * 9 / 5) + 32
//     console.log(`${celsius}°C is ${b}°F`);
// }

// celsiusToFahrenheit();

// function FahrenheitToCelsius() {
//     let Fahrenheit = +prompt('Enter Fahrenheit Temperature')
//     let b = (c * 9 / 5) + 32
//     console.log(`${Fahrenheit}°F is ${b}°C`);
// }

// FahrenheitToCelsius();


//ques no 4



// var numLines = parseInt(prompt("Enter the number  for pattern a:"));

// //  a
// for (var i = 0; i < numLines; i++) {
//     var line = '';
//     for (var j = 0; j < 5; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }
// document.write('<br>');

// //  b
// for (var i = 1; i <= numLines; i++) {
//     var line = '';
//     for (var j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }
// document.write('<br>');

// //  c
// for (var i = numLines; i > 0; i--) {
//     var line = '';
//     for (var j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }



//ques no 5



// let input1 = document.querySelector("#input1").value;

// let input2 = document.querySelector("#input2").value;

// let input3 = document.querySelector("#input3").value;

// function addition() {
//     let num1 = prompt("Enter any number");
//     let num2 = prompt("Enter any number");
//     let operator = prompt("Enter operator");

//     // Convert the input strings to numbers
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);

//     let result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             console.log("Invalid operator. Please enter a valid operator.");
//             return;
//     }

//     console.log(`${num1} ${operator} ${num2} = ${result}`);
// }


//  addition();

// ques no 6

// function palindrome (str){
//         console.log(str.split('').reverse().join(''));
//         if(str.split('').reverse().join('') === str){
//             console.log('this is palindrome');
//         }else{
//             console.log('chalo shaba katto');
//         }

// }
























