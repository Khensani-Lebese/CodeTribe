
//part a

let array = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

// a. Sort the numbers from lowest to highest
let sortedArrayAsc = array.slice().sort((a, b) => a - b);
console.log("Sorted (Lowest to Highest):", sortedArrayAsc);

// b. Sort the numbers from highest to lowest
let sortedArrayDesc = array.slice().sort((a, b) => b - a);
console.log("Sorted (Highest to Lowest):", sortedArrayDesc);

// c. Return an array of unique numbers
let uniqueNumbers = Array.from(new Set(array));
console.log("Unique Numbers:", uniqueNumbers);

// d. Calculate the sum of the numbers
let sumOfNumbers = array.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Numbers:", sumOfNumbers);

// e. Return a new array with elements less than or equal to 100
let filteredLe100 = array.filter(num => num <= 100);
console.log("Numbers <= 100:", filteredLe100);

// f. Return a new array with elements greater than 50
let filteredGt50 = array.filter(num => num > 50);
console.log("Numbers > 50:", filteredGt50);

// g. Return a new array with elements divisible by 2
let divisibleBy2 = array.filter(num => num % 2 === 0);
console.log("Numbers Divisible by 2:", divisibleBy2);

// h. Return a new array with elements divisible by 3
let divisibleBy3 = array.filter(num => num % 3 === 0);
console.log("Numbers Divisible by 3:", divisibleBy3);

// i. Return a new array with elements neither divisible by 2 nor by 3
let notDivisibleBy2Or3 = array.filter(num => num % 2 !== 0 && num % 3 !== 0);
console.log("Numbers Not Divisible by 2 or 3:", notDivisibleBy2Or3);

// j. Count how many elements are in the original array
let countElements = array.length;
console.log("Number of Elements in Original Array:", countElements);

// k. Declare a new array that contains the elements of the original array, reversed
let reversedArray = array.slice().reverse();
console.log("Reversed Array:", reversedArray);

//Part 2 of task 3

let mixedArray = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];

// a. Return all values that are numbers using a for loop and a variable
let numbers = [];
for (let item of mixedArray) {
    if (typeof item === 'number') {
        numbers.push(item);
    }
}
console.log("Numbers in Mixed Array:", numbers);

// b. Return all values that are strings using a while loop and a variable
let strings = [];
let index = 0;
while (index < mixedArray.length) {
    if (typeof mixedArray[index] === 'string') {
        strings.push(mixedArray[index]);
    }
    index++;
}
console.log("Strings in Mixed Array:", strings);

// c. Return the sum of all values in the array using a do while loop
let totalSum = 0;
index = 0;
do {
    if (typeof mixedArray[index] === 'number') {
        totalSum += mixedArray[index];
    }
    index++;
} while (index < mixedArray.length);
console.log("Sum of Mixed Array:", totalSum);

// d. Combine all strings to form a proper greeting
let greetingParts = [];
for (let item of mixedArray) {
    if (typeof item === 'string') {
        greetingParts.push(item);
    }
}
let greeting = "Hello, " + greetingParts.slice(0, -1).join(", ") + ", and " + greetingParts[greetingParts.length - 1] + ".";
console.log("Greeting:", greeting);

// e. Remove all values in the array that are strings using any looping structure
let nonStrings = mixedArray.filter(item => typeof item !== 'string');
console.log("Non-Strings in Mixed Array:", nonStrings);

