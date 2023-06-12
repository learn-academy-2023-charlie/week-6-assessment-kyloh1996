// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// Input: Array of objects(KEY, VALUE PAIRS)
// Output: Array with A SCENTENCE (STRING), the name is CAPITALIZED

// a) Create a test with an expect statement using the variable provided.

describe('namCapSen' , () => {
  it ('takes in an array of objects and returns an array with a sentence about each person with their name capitalized ', () => {
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
  expect(namCapSen(hitchhikersCharacters)).toEqual([
    "Ford Prefect is a hitchhiker.", 
    "Zaphod Beeblebrox is president of the galaxy.", 
    "Arthur Dent is a radio employee."
  ])})
})

// FAIL  ./code-challenges.test.js
// ReferenceError: namCapSen is not defined
// ____________________________________________________________________________________________________________________________


// b) Create the function that makes the test pass.

//take in the param array 
   const namCapSen = (arr) => {
// iterate through elements of the array with .map()
   return arr.map(obj => {
//access the name property of the object. 
//Split the name into an array of words. 
//At index [0] of each word - make that value upperCased. 
//Slice to retrieve remaining chars of the word. Join it all back together into a string. 
    const person = obj.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return `${person} is ${obj.occupation}.`;
  });
};

// PASS  ./code-challenges.test.js
// namCapSen
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized  (1 ms)



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// Input: mixed data type array
// Output: array with the remainer of the numbers % 3. 

// a) Create a test with an expect statement using the variables provided.

describe('rNum ', ()=>{
  it('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', ()=> {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(rNum(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]);
    expect(rNum(hodgepodge2)).toEqual([ 2, 1, -1 ]);

  })
})

// FAIL  ./code-challenges.test.js
// ReferenceError: rNum is not defined

// ____________________________________________________________________________________________________________________________

// b) Create the function that makes the test pass.

const rNum = (arr) => {
//Initialize to an empty array 
  const nArr = [];
//iterate in asc order
  for (let i = 0; i < arr.length; i++) {
//seperate the numbers from the other primitive data types
    if (typeof arr[i] === 'number') {
      nArr.push(arr[i]);
    }
  }
// iterate and return the remainders using the modulo operator 
  return nArr.map(value => value % 3);
};

// PASS  ./code-challenges.test.js
// rNum ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
// Input: array of numbers
// Output: + of all the numbers **3.


// a) Create a test with an expect statement using the variables provided.

describe('smCb ', () =>{
  it(' takes in an array of numbers and returns the sum of all the numbers cubed ', () => {
    const cubeAndSum1 = [2, 3, 4];
    const cubeAndSum2 = [0, 5, 10]
    expect(smCb(cubeAndSum1)).toEqual(99);
    expect(smCb(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
// ReferenceError: smCb is not defined


// b) Create the function that makes the test pass.

const smCb = (arr) => {
// initialize at 0
  let sum = 0;
//iterate in asc order 
  for (let i = 0; i < arr.length; i++) {
// add each value to the sum after being raised to the power of 3
    sum += arr[i] ** 3;
    }
    return sum;
}

// PASS  ./code-challenges.test.js
// smCb ✓  takes in an array of numbers and returns the sum of all the numbers cubed 


// added for new branch