console.clear();

// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

var str1 = "Today is";
var str2 = "      a beautiful day     ";
var str3 = " In Hawaii.     ";
var res = str1 + " " + str2.trim() + " " + str3.trim();
console.log(res);

// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.

var enteredAlphabet = prompt("Enter Alphabet or Digit : ");
var enterValue = enteredAlphabet.toLowerCase();
var res;
switch (enterValue) {
	case "a":
		res = true;
		break;
	case "e":
		res = true;
		break;
	case "i":
		res = true;
		break;
	case "o":
		res = true;
		break;
	case "u":
		res = true;
		break;
}

if (res == true) {
	console.log(enteredAlphabet, "is a Voewl");
} else if (enterValue.charCodeAt(0) >= 97 && enterValue.charCodeAt(0) <= 122) {
	console.log(enteredAlphabet, "is a Consonent");
} else {
	console.log(enteredAlphabet, "is a Digit");
}

// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.

var num1 = prompt("Enter the First Number : ");
var num2 = prompt("Enter the Second Number : ");
var operator = prompt("Enter the Operator : ");

switch (operator) {
	case "+":
		console.log(Number(num1) + Number(num2));
		break;
	case "-":
		console.log(num1 - num2);
		break;
	case "*":
		console.log(num1 * num2);
		break;
	case "/":
		console.log(num1 / num2);
		break;
}

// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.

var side1 = prompt("Enter the First Side : ");
var side2 = prompt("Enter the Second Side : ");
var side3 = prompt("Enter the Third Side : ");

if (side1 == side2 && side2 == side3 && side3 == side1) {
	console.log("This is Equilateral Triangle");
} else if (side1 == side2 || side2 == side3 || side3 == side1) {
	console.log("This is Isosceles Triangle");
} else {
	console.log("This is Scalene Triangle");
}

// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

var units = prompt("Enter the units : ");
var bill;

if (units <= 50) {
	bill = units * 0.5;
} else if (units <= 150) {
	bill = 50 * 0.5 + (units - 50) * 0.75;
} else if (units <= 250) {
	bill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
} else if (units > 250) {
	bill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
	bill += bill * 0.2;
}

console.log(bill);
