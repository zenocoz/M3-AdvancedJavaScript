/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const sumInts = function (x, y) {
  if (x === y) {
    return 3 * (x + y);
  } else {
    return x + y;
  }
};
console.log(sumInts(2, 3));
console.log(sumInts(2, 2));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const checkTwoInts = function (x, y) {
  if ((x === 50) | (y === 50) | (x + y === 50)) {
    return true;
  }
};
console.log(checkTwoInts(50, 45));
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeChar = function (str, position) {
  let substring1 = str.substring(0, position);
  let substring2 = str.substring(position + 1, str.length);
  return substring1 + substring2;
};
console.log(removeChar("Buongiorno", 3));

/*

4)
 Create a function to find the largest of three given integers.
*/

const findLargestInt = function (x, y, z) {
  let arr = [x, y, z];
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr[0];
};
console.log(findLargestInt(2, 4, 7));
console.log(findLargestInt(100, 600, 350));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const checkRange = function (x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) |
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else return "out of range";
};
console.log(checkRange(42, 60)); //expected true
console.log(checkRange(18, 36)); //expected out of range
console.log(checkRange(72, 90)); //expected true
console.log(checkRange(45, 75)); //expected out of range

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

//why first iteration is undefined? TODO
const makeCopies = function (str, n) {
  let copied_strings;
  do {
    copied_strings += " " + str;
    n--;
  } while (n > 0);
  return copied_strings;
};

console.log(makeCopies("Advanced JS", 3));
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const displayCityName = function (str) {
  let first_three = str.substring(0, 3);
  if ((first_three === "Los") | (first_three === "New")) {
    return str;
  } else {
    return " ";
  }
};
console.log(displayCityName("Los Angeles"));
console.log(displayCityName("New Orleans"));
console.log(displayCityName("Chicago"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const sumArray3 = function (arr) {
  if (arr.length !== 3) {
    return "INPUT ERROR";
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
};

console.log(sumArray3([2, 5, 8]));
console.log(sumArray3([2, 5]));

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const testArrayInts = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === 1) | (arr[i] === 3)) {
      return "The array contains either 1 or 3";
    } else {
      return "The array doesn't containe either 1 or 3";
    }
  }
};
console.log(testArrayInts([1, 2]));
console.log(testArrayInts([19, 5]));

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

*/

//TODO Repurpose ex 9

/*
11)

Create a function to find the longest string from a given array of strings.
*/

const findLongestString = function (arr) {
  let longest_string = " ";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest_string.length) {
      longest_string = arr[i];
    }
  }
  return longest_string;
};

console.log(
  findLongestString(["soejekee", "guadalajara", "striveschool", "bari"])
);
/*

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

15)

Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.

16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
