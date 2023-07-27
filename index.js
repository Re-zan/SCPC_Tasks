//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(str) {
  const fake = [];
  const strToArray = str.split("");
  for (let x = strToArray.length - 1; x >= 0; x--) {
    fake.push(strToArray[x]);
  }
  const finalString = fake.join("");
  console.log(finalString);
}
reverseString("hello world");

//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array

const sum = (arr) => {
  const positiveNum = arr.filter((data) => data >= 0);
  const total = positiveNum.reduce((num, sumOp) => num + sumOp, 0);
  console.log(total);
};
sum([2, -5, 10, -3, 7]);

//Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
const frequentUsed = (element) => {
  const num = element.find((numbers) => numbers === numbers);
  return num;
};
console.log(frequentUsed([3, 5, 2, 5, 3, 3, 1, 4, 5]));

//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const indexNum = (sortArr, target) => {
  let numbers = [];
  sortArr.filter((num1, index1) => {
    sortArr.filter((num2, index2) => {
      if (index2 > index1 && num1 + num2 === target) {
        numbers = [index1, index2];
      }
    });
  });

  return numbers;
};
console.log(indexNum([1, 3, 6, 8, 11, 15], 9));

//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const sumOperation = (num1, num2, opertor) => {
  if (opertor === "+") {
    return num1 + num2;
  } else if (opertor === "-") {
    return num1 - num2;
  } else if (opertor === "*") {
    return num1 * num2;
  } else if (opertor === "/") {
    return num1 / num2;
  } else {
    return "Invalid operations";
  }
};
console.log(sumOperation(1, 2, "-"));
console.log(sumOperation(1, 2, "+"));
console.log(sumOperation(1, 2, "/"));
console.log(sumOperation(1, 2, "*"));

//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generatePassword(leng) {
  let password = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "!@#$%^&*()-_=+[]{}|;:,.<>?";
  if (leng >= 6) {
    for (let i = 1; i <= leng; i++) {
      let randomChar = Math.floor(Math.random() * str.length);
      password += str.charAt(randomChar);
    }
    return password;
  } else {
    return "Password length should be more than 6 characters";
  }
}
console.log(generatePassword(8));
console.log(generatePassword(4));
console.log(generatePassword(13));

//Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
const romanToInter = (str) => {
  const romarNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  str.split("").map((data, i) => {
    const currentIndex = romarNumbers[data];
    const nextIndex = romarNumbers[str[i + 1]];
    if (currentIndex < nextIndex) {
      result -= currentIndex;
    } else {
      result += currentIndex;
    }
  });
  return result;
};
console.log(romanToInter("IX"));
console.log(romanToInter("XXI"));
//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const secondSmallest = (arr) => {
  const second = arr.sort((a, b) => a - b);
  return second[1];
};
console.log(secondSmallest([123, 57, 6, 34, 7, 90, 23, 56]));
