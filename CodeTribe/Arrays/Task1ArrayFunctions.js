let array = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

// a. Sort the numbers from lowest to highest
function sortAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// b. Sort the numbers from highest to lowest
function sortDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

// c. Return an array of unique numbers
function uniqueNumbers(arr) {
    return Array.from(new Set(arr));
}

// d. Calculate the sum of the numbers
function sumOfNumbers(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// e. Return a new array with elements less than or equal to a given number (default 100)
function filterLessThanOrEqualTo(arr, number = 100) {
    return arr.filter(num => num <= number);
}

// f. Return a new array with elements greater than a given number (default 50)
function filterGreaterThan(arr, number = 50) {
    return arr.filter(num => num > number);
}

// g. Return a new array with elements divisible by 2
function filterDivisibleBy2(arr) {
    return arr.filter(num => num % 2 === 0);
}

// h. Return a new array with elements divisible by 3
function filterDivisibleBy3(arr) {
    return arr.filter(num => num % 3 === 0);
}

// i. Return a new array with elements neither divisible by 2 nor by 3
function filterNotDivisibleBy2Or3(arr) {
    return arr.filter(num => num % 2 !== 0 && num % 3 !== 0);
}

// j. Count how many elements are in the original array
function countElements(arr) {
    return arr.length;
}

// k. Return a new array with elements reversed
function reverseArray(arr) {
    return arr.slice().reverse();
}

// Testing the functions
console.log("Sorted (Lowest to Highest):", sortAscending(array));
console.log("Sorted (Highest to Lowest):", sortDescending(array));
console.log("Unique Numbers:", uniqueNumbers(array));
console.log("Sum of Numbers:", sumOfNumbers(array));
console.log("Numbers <= 100:", filterLessThanOrEqualTo(array));
console.log("Numbers > 50:", filterGreaterThan(array));
console.log("Numbers Divisible by 2:", filterDivisibleBy2(array));
console.log("Numbers Divisible by 3:", filterDivisibleBy3(array));
console.log("Numbers Not Divisible by 2 or 3:", filterNotDivisibleBy2Or3(array));
console.log("Number of Elements in Original Array:", countElements(array));
console.log("Reversed Array:", reverseArray(array));

let mixedArray = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];
//Part 2
// a. Return all values that are numbers
function getNumbers(arr) {
    return arr.filter(item => typeof item === 'number');
}

// b. Return all values that are strings
function getStrings(arr) {
    return arr.filter(item => typeof item === 'string');
}

// c. Return the sum of all numbers in the array
function sumOfNumbersInArray(arr) {
    return arr.filter(item => typeof item === 'number').reduce((acc, curr) => acc + curr, 0);
}

// d. Combine all strings to form a proper greeting
function createGreeting(arr) {
    let strings = getStrings(arr);
    return "Hello, " + strings.slice(0, -1).join(", ") + ", and " + strings[strings.length - 1] + ".";
}

// e. Remove all values in the array that are strings
function removeStrings(arr) {
    return arr.filter(item => typeof item !== 'string');
}

// Testing the functions
console.log("Numbers in Mixed Array:", getNumbers(mixedArray));
console.log("Strings in Mixed Array:", getStrings(mixedArray));
console.log("Sum of Mixed Array:", sumOfNumbersInArray(mixedArray));
console.log("Greeting:", createGreeting(mixedArray));
console.log("Non-Strings in Mixed Array:", removeStrings(mixedArray));
