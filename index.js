/***********values and variables**************/

// var myName = "Pawanssss";
// var myCnt = 8329302612;

// console.log(myName);

/*********** null and undefined? **************/
// null//

// var nameConst= null;
// console.log(nameConst);

//undefined//

// var nameConst;

// console.log(nameConst);

/************ Check variable data type **************/

// var nameConst= "Pawan";
// console.log(typeof(nameConst));

/************ What is NaN? **************/

// NaN is a property of global object and it is a variable in global ScriptProcessorNode.
//The initial value of NaN is Not a Number

// var myName = "pawan";
// var myLName = "salve";

// console.log(myName-myLName);

//check true false using NaN

// var myName = "pawan";

// console.log(isNaN(myName));

/************ Expression and operators  **************/

//string concatination operator
// console.log("pawan " + "Salve")

//Exponential operator
// console.log(3**3);

// swap the two values without using third variable
// a = 15;
// b = 10;
// output a=10; b=15;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log("Value of a "+a);
// console.log("Value of b"+b);

/*********** What is Difference between == And === **************/

/* -> == it's check only values and === it's check value as well as data type */

//eg
// var num1 = 10;
// var num2 ='10';

// console.log(num1 == num2);

// eg
// var num1 = 10;
// var num2 ='10';

// console.log(num1 === num2);

/*********** Controle Statement and Loops **************/

//Conditional (ternary) operator

// var age = 20;
// console.log(age >= 18 ? "Eligible" : "Not eligible");

//Switch Statement

// var area = "circle";
// var PI = 3.142,
//   l = 5,
//   b = 4,
//   r = 3;

// switch (area) {
//   case "circle":
//     console.log("area of circle ==" + PI * r ** 2);
//     break;
//   case "trangle":
//     console.log("area of circle ==" +(l*b)/2);
//     break;
//   case "rectangle":
//     console.log("area of circle ==" + (l*b));
//     break;
//     default:
//     console.log("please enter valid information" );

// }

// While Loop
// var no = 1;

// while (no <= 10) {
//   console.log(no);
//   no++;
// }

//do while loop


// var no = 20;
// do {
//     debugger;
//   console.log(no);
//   no++;
// } while (no <= 10);

// For loop

// for (var no = 1; no <= 10; no++) {
//   var mult = 8;
//   console.log(mult * no);
// }

// for (var no = 1; no <= 10; no++) {
//   var tablenum = 9;
//   console.log(tablenum + "*" + no + "=" + tablenum * no);
// }

/*********** Function Definition,calling,parameter,arguments,expressions, and function Anonymous**************/

//function Definition and parameter and calling and arguments

function sum(){
    var a=10,b=20;
    var total=a+b;
    console.log(total);
}
sum();

// function sum(a,b)//function Parameters
// {
//     var a,b;
//     var total=a+b;
//     console.log(total);
// }
// sum(200,100);//function Arguments

//Anonymus function

// var funExp = function sum (a,b){
//     return total= a+b;
// }
// // var sum = funExp(200,88)
// // console.log(sum);

// console.log(funExp(10,20));// we can use this line directly for print without using above 2 lines

/*********** EcmaScript Array Methods  **************/

//Arrow Function

// const sum =()=>{
// return(`sum is ${(a=10)+ (b=16)}`)
// }
// console.log(sum())

// Array

//const arr=[2,4,20,15,25] i have this arr want to insert value 30 inbetween 15 and 25 in

// const arr = [2, 4, 20, 15, 25];

// // Find the index of the element 15
// const index = arr.indexOf(15);

// // Insert the value 30 at the index after 15
// arr.splice(index + 1, 0, 30);

// console.log(arr); // [2, 4, 20, 15, 30, 25]

// //const arr=[2,4,20,15,25] i have this arr want to insert value 1 at starting position

// const arr1 = [2, 4, 20, 15, 25];

// // Insert the value 1 at the beginning of the array
// arr1.unshift(1);

// console.log(arr);

// var nameList= ['pawan','Rawan','Suprit','Jadu','Anshul'];

// console.log(nameList[nameList.length-1])

// for in - it returns index number's of an array

// var nameList= ['pawan','Rawan','Suprit','Jadu','Anshul'];
// for(elements in nameList ){
//     console.log(elements)
// }

//for of - it returns elements of an array

// var nameList= ['pawan','Rawan','Suprit','Jadu','Anshul'];
// for(elements of nameList ){
//     console.log(elements)
// }

//forEach()---the forEach() call a function once for each element in an array in order.

//  var nameList= ['pawan','Rawan','Suprit','Jadu','Anshul'];

//  nameList.forEach((element,index,array)=>{
//     console.log(element,"ind "+index, " "+ array)
//  })

//Array Subsections perform CRUD operations

//Array.prototype.push() - add element at the last position

// var nameList = ["pawan", "Rawan", "Suprit", "Jadu", "Anshul"];
// nameList.push("Arman");
// console.log(nameList);

//Array.prototype.unshift() - add element at the first position in an array

// var nameList = ['pawan', 'Rawan', 'Suprit', 'Jadu', 'Anshul'];
// nameList.unshift('Arman','Kailas','sujen','MorningStar');
// console.log(nameList);

//Array.prototype.pop() - remove the element at the last  position in an array

// var nameList = ['pawan', 'Rawan', 'Suprit', 'Jadu', 'Anshul'];
// console.log(nameList)
// console.log(nameList.pop())
// console.log(nameList);

//Array.prototype.shift() - remove the element at the first  position in an array

// var nameList = ['pawan', 'Rawan', 'Suprit', 'Jadu', 'Anshul'];
// console.log(nameList)
// console.log(nameList.shift())
// console.log(nameList);

//excersise

// const months= ['Jan','march','April','jun','july']
//1.add Dec at the end of an array
//2.what is the return value of splice()
//3.update march to March
//4.delete jun from an array
//5.delete all element after march from an array

// const months= ['Jan','march','April','jun','july']
// // 1.
// // const newMonth= months.push(months.length,0,'Dec')
// const newMonth= months.push('Dec')
// console.log(months)

// const months= ['Jan','march','April','jun','july']
// // 2. The splice() method in JavaScript is used to add or remove elements from an array. It can be called with two or more arguments
// console.log(months.splice())//The splice() method returns an array containing the deleted elements, if any. If no elements are deleted, an empty array is returned.

// const array = [1, 2, 3, 4, 5];

// // Remove two elements starting from index 2
// const deleted = array.splice(2, 2); // returns [3, 4]

// console.log(array); // [1, 2, 5]
// console.log(deleted); // [3, 4]

// const months= ['Jan','march','April','jun','july']
// // 3.
// const indexOfMonth =months.indexOf('march');
// if(indexOfMonth != -1){
//     const updateMonth=months.splice(indexOfMonth,1,'March')//add element
//     console.log(months)
//     console.log(updateMonth)
// }else{
//     console.log("no record found...")
// }

// const month=['jan', 'feb', 'march','April','jun','july']

// const indexOfMonth= month.indexOf('April')
// if(indexOfMonth != -1){
// const updateNewMonth= month.splice(indexOfMonth,1)//remove element
// console.log(updateNewMonth);
// console.log(month);
// }else{
// console.log('No record found');
// }

// const months= ['Jan','march','April','jun','july']
// // 4.
// const indexOfMonth =months.indexOf('jun');
// if(indexOfMonth != -1){
//     const updateMonth=months.splice(indexOfMonth,1)//remove element
//     console.log(months)
//     console.log(updateMonth)
// }else{
//     console.log("no record found...")
// }

// const months= ['Jan','march','April','jun','july']
// // 5.
// const indexOfMonth =months.indexOf('April');
// if(indexOfMonth != -1){
//     const updateMonth=months.splice(indexOfMonth,Infinity)
//     console.log(months)
//     console.log(updateMonth)
// }else{
//     console.log("no record found...")
// }

//map()  - its  return a new array[]  without affecting old array.

// const array1 = [5, 3, 2, 1, 55, 34];
// let newArr = array1.map((curElm, index, arr) => {
//   return `Index no : ${index} and Value is : ${curElm} from arrays ${arr}`;
// });
// console.log(newArr);

//forEach()  - it's returns a undefined
// const array1 = [5, 3, 2, 1, 55, 34];
// let newArr = array1.forEach((curElm, index, arr) => {
//   return `Index no : ${index} and Value is : ${curElm} from arrays ${arr}`;
// });
// console.log(newArr);

// find sqareroot of given array

// let arrOld = [65, 49, 54, 88, 20, 25];
// let arrSqr = arrOld.map((curElm) => {
//   return Math.sqrt(curElm);

// });
// console.log(arrSqr);

//chaining two methods

// let arrayy= [2,3,4,54,34];

// let arrarNew= arrayy.map((curElm)=>curElm*2).filter((curElm)=>curElm>10);
// console.log(arrarNew);

//display array elements are greater than 100 single

// const arr = [10, 200, 50, 100, 300];

// const result = arr.find(num => num > 100);

// console.log(result);

// Output: [200] its return only one element

//display array elements are greater than 100

// const arr1 = [10, 200, 50, 100, 300];

// const results = arr1.filter(number => number > 100);

// console.log(results);

// Output: [200,300] its return greater elements

//display sum of array element

//  let arrayy= [2,3,4,54,34];
//  let arrarNew= arrayy.reduce((curElm,accumulator)=>(accumulator +=curElm));
//  console.log(arrarNew);
/*-------------------//////////////////////------------------------*/

// show here id 3 record
// let GroupData = [
//     {
//     "id" : 1,
//     "country" : "UAE"
//   },
//   {
//     "id" : 2,
//     "country" : "CANADA"
//   },
//   {
//     "id" : 5,
//     "country" : "NEPAL"
//   },
//   {
//     "id" : 3,
//     "country" : "UNITED STATES"
//   },
//   {
//     "id" : 4,
//     "country" : "INDIA"
//   }
//   ];

//   const record = GroupData.find(data=> data.id ===3)
//   console.log(record);

//React add one more property
// import React, {useState} from 'react'
// const [data, setData] = useState({
//   name: "Pawan",
//   email: "pawan123@test.com",
// });
// setData({...data,phone:'9181837462'})

// console.log(data);

/*-------------------//////////////////////------------------------*/

// let arrayy= [2,3,4,54,34];
//  let arrarNew= arrayy.map((curElm)=>curElm*2).filter((curElm)=>curElm>10).reduce((curElm,accumulator)=>(accumulator +=curElm));
//  console.log(arrarNew);

//find out minimum number from an array

// const arr=[10,20,110,2,4,3]
// const minNo=Math.min(...arr);
// console.log(minNo);

// Second Logic

// let arrayy = [2, 3, 4, 54, 34];
// let minimum = arrayy.reduce((min, current) => {
//   return current < min ? current : min;
// });

// console.log(minimum);

//convert 2d array and 3d array into 1d array

// const arr =[
//     ['pawan','salve'],
//     ['Ram','Kolse'],
//     ['Jagan','Sonawne'],
//     ['parshu','Sodhi'],
//     ['Nitin','Rawat'],
// ];

// let flatArr= arr.reduce((accum, curElm)=>{
// return accum.concat(curElm)
// })
// console.log(flatArr)

// =========================================
//convert 2d array into 1d array


// const arr1 =[
//   [1,2,7],
//   [3,4],
//   [5,6],
//   [7,8],
//   [9,10],
// ];

// let flatArr= arr1.reduce((accum, curElm)=>{
// return accum.concat(curElm)
// })
// console.log(flatArr)

// Display greater number than 100

// function findNumbersGreaterThan100(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 100) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
//   const numbers = [50, 110, 75, 200, 90];
//   const greaterThan100 = findNumbersGreaterThan100(numbers);
//   console.log(greaterThan100);

//o/p- 110,200

// ===========*********8Second logic using filter method***********=============

// const numbers = [50, 110, 75, 200, 90];

// const displayGreaterThan100 = (arr) => {
//   return arr.filter(number => number > 100);
// };

// const result = displayGreaterThan100(numbers);
// console.log(result); // Output: [110, 200]

// ========================*****Using third logic without using function************==================
// const numbers = [50, 110, 75, 200, 90];
// let res=numbers.filter((no)=>no>100)
// console.log(res)
// ==========================**********************************=======================================
// Display single value of an array are greater than 100 without using builtin functions

// const arr = [100, 110, 101, 200, 321];
// // const resp = arr.sort();
// let result = null;
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 100) {
//     result = arr[i];
//     break;
//   }
// }
// console.log(result);

/*********** Strings  Methods in JavaScript  **************/

//find string in a string

// const myName= 'pawan salve is my name and if you can';
// console.log(myName.indexOf("salve"));

// searching for string in a string

// const myName= 'pawan salve is my name and if you can';
// let sData=myName.search("name");
// console.log(sData);

//Extracting string parts

// var str= "Pawan, Vasant, Salve, From, AhmedNagar";
// let res= str.slice(str.includes(6));
// console.log(res)

// var str= "Pawan Vasant Salve From AhmedNagar";
// let res= str.slice(10);
// console.log(res)

//substring()

// var str= "iphone, sony, oneplus";
// let resp=str.substring(0,7);
// console.log(resp);

//substr()- catch data from back side

// var strNew= "iphone, sony, oneplus, xaomi";
// let resp=strNew.substr(-5);
// console.log(resp);

//replace() - replace method only replace first match. and its case sensetive

// var strNew= "iphone sony oneplus xaomi sony Nokia sony";
// let resp=strNew.replace('sony','panasonic');
// console.log(resp);

//replaceAll()

// var strNew= "iphone sony oneplus xaomi sony Nokia sony";
// let resp=strNew.replaceAll('sony','panasonic');
// console.log(resp);

//charAt() - its show the position character

// let str= "Hello Pawan How Are You?";
// console.log(str.charAt(6));

//charCodeAt() - its show the Unicode of the character at specified ndex n a string

// let str= "Hello Pawan How Are You?";
// console.log(str.charCodeAt(6));

//return the unicode of the last character in a string

// let str= "Hello Pawan How Are You";
// let laststr=str.length-1;
// console.log(str.charCodeAt(laststr));

//EcmaScript property acess []

// let str ="HELLO PAWAN";
// console.log(str[2])

//convert string into Array
// let str1 = "Pawan Vasant Salve";
// let arr = str1.split(" ");
// console.log(arr);

//concate()

// let str ="HELLO PAWAN";
// let str1 ="SALVE";
// console.log(str.concat(" ",str1));

// trim() --its remove white space from the start position and ed possition

// let str ="          HELLO PAWAN";

// console.log(str.trim());

/*********** Date and Time in JavaScript  **************/

//there are 4 ways to create Date object we can use new Date() constructor.

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());

// console.log(new Date().toLocaleString());

// console.log(new Date().toString());

// console.log(Date.now()); // it's return miliseconds

// var currDate1 = new Date(2023,1,9,10,40,55,45);
// console.log(currDate1.toLocaleString());

// var dat= new Date(0);
// console.log(dat.toLocaleString());

// Date()
// const datCurrent= new Date();
// console.log(datCurrent.toLocaleString());
// console.log(datCurrent.getFullYear());
// console.log(datCurrent.getMonth());
// console.log(datCurrent.getDate());
// console.log(datCurrent.getDay());

//show current time and date on your website

// object  is a value inside an object

// let bioData ={
//     myName:{
//         realName:"Pawan Salve",
//         positionPost:"Software Developer"
//     },
//     myAge:26,
//     getData(){
//         console.log(`My Name is ${this.myName.realName} and my age is ${this.myAge}`)
//     }
// }
// bioData.getData();

//Array destructing in javaScript

// const myBioData = ['Pawan','Salve',26]
// // let myAge= myBioData.myAge;
// // console.log(myAge);
// let [myFirstName,myLastName,myAge]= myBioData;
// console.log(myAge);

//Object destructing in javaScript

// const myBioData = {
//     myFirstName:'Pawan',
//     myLastName:'Salve',
//     myAge:26
// }

// let {myFirstName,myLastName,myAge}= myBioData;
// console.log(myLastName);

// Spread Operator

// const color= ['red','green','blue','yellow'];

// const myColor=[...color,'black','white'];

// console.log(myColor);

//flate() method in javaScript

// const aray= [
//     ['name1','name2'],
//     ['name3','name4'],
//     ['name5','name6'],
//     ['name7','name8'],
//     ['name1','name2', ['count1','count2',['total1','total2']]],
// ]

// console.log(aray.flat(Infinity));

/*********** Advance JavaScript  **************/

//Higher order function
// function which takes another function as an arguments is called HOF

// const add =(a,b)=>{
//     return a+b;
// }

// const calculator =(num1,num2,operator)=>{
//     return operator(num1,num2);
//     // return add(3,3);
// }
// console.log(calculator(3,3,add));
//calculator is a higher order function

//CallBack Function
//function which passed as an argument to another function is called CBF

// const sub =(a,b)=>{
//     return a-b;
// }

// const calculators =(num1,num2,operator)=>{
//     return operator(num1,num2);
//     // return add(3,3);
// }
// console.log(calculator(3,3,sub));
// //sub is a  CallBack function

// HOW JAVASCRIPT WORKS AND ASYNCRONOUS JAVASCRIPT

//Hoiesting -- moveing the declaration at the top
//Lexical Scopeing -- inner function access the parameters of outer functions
//closures -- it means inner function easily access outer  function paramenters and arguments but outer function can not aceess inner function parameters.

//lexical

// const outerFun=(a)=>{
//     let b=10;
//     const innerFun=()=>{
//         let sum=a+b;
//         console.log(`Addition ${sum}`);
//     }
//     innerFun();
// }
// outerFun(12);

//closures

// const outerFun=(a)=>{
//     let b=60;
//     const innerFun=()=>{
//         let sum=a+b;
//         console.log(`Addition ${sum}`);
//     }
//    return innerFun;
// }
// let checkClosure= outerFun(12);
// checkClosure();

// use strict

// "use strict"
// let x= "pawan";
// //  x= "pawan"; // without using "use strict" its display output with using "use strict" its display error
// console.log(x);

// Syncronous and Asyncronous JavaScript

// Syncronous JavaScript pro

// const fun2 = () => {
//   console.log(`Function 2 is call`);
// };
// const fun1 = () => {
//   console.log(`Function 1 is call`);
//   fun2();
//   console.log(`Function 1 is call`);
// };
// fun1();

//Asyncronous JavaScript Pro

// const fun2 = () => {
//   setTimeout(() => {
//     console.log(`Function 2 is call`);
//   }, 2000);
// };
// const fun1 = () => {
//   console.log(`Function 1 is call`);
//   fun2();
//   console.log(`Function 1 is call`);
// };
// fun1();

//currying

// const sum =(no1)=>(no2)=>(no3)=>console.log(no1+no2+no3);
// // console.log(sum);
// sum (3)(5)(8);

// Promise program in javascript
// const sumOfElement=(...elem)=>{
// return new Promise((resolve, reject)=>{
//     if(elem.length>3){
//         reject("only three")
//     }else{
//         let sum=0;
//         let i=0;
//         while(i<elem.length){
//             sum+=elem[i];
//             i++;
//         }
//         console.log(sum);
//         resolve("see the sum"+sum)
//     }
// })
// }

// sumOfElement(44,34,2);

// let myPromise= new Promise((resolve,reject)=>{
//     let a=30;
//     if(a==30){
//         resolve('Success');
//     }
//     else{
//         reject('Failed');
//     }
// })
// myPromise.then((message)=>{
//     console.log("It is Then Block. the message is :"+ message);
// }).catch((message)=>{
//     console.log("It is Catch Block. the message is :"+ message);

// })

// reverse string function

// let word = "hello word";
// let reversedWord = "";

// // Loop through the word backwards
// for (let i = word.length - 1; i >= 0; i--) {
//   reversedWord += word[i];
// }

// console.log(reversedWord);

// reverse string without using fuctions and without change position

// let str = "hello world";
// let words = str.split(" ");
// let reversedStr = "";

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   let reversedWord = "";
//   for (let j = word.length - 1; j >= 0; j--) {
//     reversedWord += word[j];
//   }
//   reversedStr += reversedWord + " ";
// }

// console.log(reversedStr.trim());

//count of each character of a srting in javascript with function

// const string = "pawan salve pawan vasant salve";
// const frequency = {};

// string.split('').forEach(function(char) {
//   frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
// });

// console.log(frequency);

// display count of each character of a srting in javascript without using function
// const str = "pawan salve pawan vasant salve";

// // Create an object to store the character counts
// const charCounts = {};

// // Loop through the string and increment the count for each character
// for (let i = 0; i < str.length; i++) {
//   const char = str[i];
//   if (charCounts[char]) {
//     charCounts[char]++;
//   } else {
//     charCounts[char] = 1;
//   }
// }

// // Log the character counts
// for (const char in charCounts) {
//   console.log(char + ": " + charCounts[char]);
// }

//check a given string are same or not
// var s1 = "angraj";
// var s2 = "nagraj";
// var areEqual = true;

// // Check if the strings have the same length
// if (s1.length !== s2.length) {
//   areEqual = false;
// } else {
//   // Compare each character of both strings at the same position
//   for (var i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) {
//       areEqual = false;
//       break;
//     }
//   }
// }

// // Print the result
// if (areEqual) {
//   console.log("The strings are the same");
// } else {
//   console.log("The strings are different");
// }

//i have 2 string nagraj and angraj create a function which return true if both strings are contain same characters
// function areStringsEqual(s1, s2) {
//     // Check if the strings have the same length
//     if (s1.length !== s2.length) {
//       return false;
//     }

//     // Sort the characters in both strings
//     var sortedS1 = s1.split("").sort().join("");
//     var sortedS2 = s2.split("").sort().join("");

//     // Compare the sorted strings
//     return sortedS1 === sortedS2;
//   }

//   // Example usage:
//   console.log(areStringsEqual("nagraj", "angraj")); // Returns true
//   console.log(areStringsEqual("nagraj", "anirudh")); // Returns false

//   i have 2 string nagraj and angraj create a function which return true if both strings are contain same characters without using function

// function areStringsEqual(s1, s2) {
//   // Check if the strings have the same length
//   if (s1.length !== s2.length) {
//     return false;
//   }

//   // Compare each character of both strings at the same position
//   for (var i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) {
//       return false;
//     }
//   }

//   // If we reach this point, the strings are equal
//   return true;
// }

// // Usage example
// var s1 = "nagraj";
// var s2 = "angraj";

// if (areStringsEqual(s1, s2)) {
//   console.log("The strings are equal");
// } else {
//   console.log("The strings are different");
// }

// print most occurance character in the given string
// function secondWord(str1) {
//   const words = str1.split("");
//   const seaprate = {};
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     seaprate[word] = (seaprate[word] || 0) + 1;
//   }
//   let count = -1;
//   let largeCount = -1;
//   let wordMax = "";
//   let largeWordmax = "";
//   for (let word in seaprate) {
//     const allCount = seaprate[word];
//     if (allCount > count) {
//       largeCount = count;
//       largeWordmax=wordMax;
//       count = allCount;
//       wordMax=word;
//     } else if (allCount > largeCount && allCount < count) {
//       largeCount = allCount;
//       largeWordmax = word;
//     }
//   }
// return largeWordmax;
// }

// const str1='my name is pawan salve i am ready  to relocate';
// const secondOccuredWord=secondWord(str1);
// console.log(secondOccuredWord);

//print second most occurring char in given string
// function secondMostOccurringChar(str) {
//   const freq = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     freq[char] = freq[char] ? freq[char] + 1 : 1;
//   }
//   const sortedChars = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
//   return sortedChars[1];
// }

// const str = "abbcddddeeeeffffg";
// const secondMostOccurring = secondMostOccurringChar(str);
// console.log(secondMostOccurring);

// interview Question*********************++++++++++++=================>>>>>>>>>>>>***********

// https://jsonplaceholder.typicode.com/users  i have this api want to display id 5 record only username, lat and lang

// ----->>>o/p by fetch()

// import { useState, useEffect } from "react";

// export default function User() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users/5")
//       .then((response) => response.json())
//       .then((data) => setUser(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       {user && (
//         <div>
//           <p>ID: {user.id}</p>
//           <p>Username: {user.username}</p>
//           <p>Latitude: {user.address.geo.lat}</p>
//           <p>Longitude: {user.address.geo.lng}</p>
//         </div>
//       )}
//     </div>
//   );
// }


// +++++======>>>> through the Axios  display id 5 record only username, lat and lang

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function UserRecord() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     async function fetchUser() {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users/5');
//       const { username, address: { geo: { lat, lng } } } = response.data;
//       setUser({ username, lat, lng });
//     }

//     fetchUser();
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <>
//           <p>Username: {user.username}</p>
//           <p>Latitude: {user.lat}</p>
//           <p>Longitude: {user.lng}</p>
//         </>
//       ) : (
//         <p>Loading user record...</p>
//       )}
//     </div>
//   );
// }

// export default UserRecord;

// ++++++++======================+++++++++++++++++++++++++

// find unique values

// let arr =[{name:"now"},{name:"now"},{name:"work"},{name:"work"},{name:"now"},{name:"now"}];

// let uniqueValues = [...new Set(arr.map(item => item.name))];

// console.log(uniqueValues);

// console.log(10 + "20");

// console.log(9 -"5");

// console.log(9 +"5");

// console.log(" " + 0);

// console.log("Pawan " + "Salve");

// console.log(true + true );

// console.log(true + false );

// console.log(false + true );

// console.log(false - true );

// Leap Year program
// var yr = 2020;
// if (yr % 4 === 0) {
//   if (yr % 100 === 0) {
//     if (yr % 400 === 0) {
//       console.log("it's leap year");
//     } else {
//       console.log("Not Leap");
//     }
//   } else {
//     console.log("It's leap year");
//   }
// } else {
//   console.log("no leap");
// }

// table of 8 both way

// var no =8

// for(var i=1; i<=10; i++ ){
//     var num = no * i;
//     console.log(num);
// }

// for (var no=1; no <= 10; no++){
//     var num= 8;
//     console.log(num + " * " + no +" = " + num * no);
// }

// Anonymus function

// var myName= function (a,b){
//     return total= a+ b;
// }
// console.log(myName(10,22));

// Array in JavaScript

// display last element in an array

// in string

// var arr = [
//   "naveen",
//   "praveen",
//   "tulsidas",
//   "Rock",
//   "morningstart",
//   "herculess",
// ];
// console.log(arr[arr.length-1]);

// display last element in an array
//In Numbers
// var newArr = [10, 22, 44, 54, 2, 7, 44, 6];

// console.log(newArr[newArr.length - 1]);

// Dispaly Array element in string using for of loop

// var arr = [
//   "naveen",
//   "praveen",
//   "tulsidas",
//   "Rock",
//   "morningstart",
//   "herculess",
// ];

// for(let element of arr){
//     console.log(element);
// }

// Dispaly Array element index in string array using for in loop

// var arr = [
//   "naveen",
//   "praveen",
//   "tulsidas",
//   "Rock",
//   "morningstart",
//   "herculess",
// ];

// for(let element in arr){
//     console.log(element);
// }


// const arr=[10,15,20,30,35,40,45,50]  
// // arr.push(22)

//insert a element in an array without chage a origional array

// const arrayy=[2,4,22,3,43,221]

// const newData= [...arrayy,493]

// console.log(newData)
// console.log(arrayy)



// const newInd=arr.indexOf(30)
// arr.splice(newInd,Infinity)
// // const indexArr=arr.indexOf(20)

// // arr.splice(indexArr + 1, 0, 25)

// console.log(arr);



// let arr =[10,20,32,73,45]

// let sum=arr.reduce((curEle,accu)=>{
//     return curEle
// })
// console.log(arr);
// console.log(sum);

//setFTimeout program

// setTimeout(()=>{
//     console.log("myname");
// },2000)

//setInterval program

// let no = 0;

// function demoMy(){
//     setInterval(()=>{
//         no++;
//         console.log(no);
//     },1000)
// }

// demoMy();

// duplicate value of an array
// const arr1=['pawan','salve','rahul','Gautam','Morning','rahul','pawan']

// const newArr= [...new Set(arr1)]
// console.log(newArr);

//To display the values that do not repeat in the arrays,

// const newArr = [
//   {
//     name: 'Pawan',
//     age: 25,
//   },
//   {
//     name: 'Pravin',
//     age: 26,
//   },
//   {
//     name: 'Shiva',
//     age: 24,
//   },
// ];

// const newArr1 = [
//   {
//     name: 'Pramod',
//     age: 25,
//   },
//   {
//     name: 'Pravin',
//     age: 26,
//   },
//   {
//     name: 'Shiva',
//     age: 24,
//   },
// ];

// const mergedArr = [];

// newArr.forEach(obj => {
//   const exists = mergedArr.some(item => item.name === obj.name && item.age === obj.age);
//   if (!exists) {
//     mergedArr.push(obj);
//   }
// });

// newArr1.forEach(obj => {
//   const exists = mergedArr.some(item => item.name === obj.name && item.age === obj.age);
//   if (!exists) {
//     mergedArr.push(obj);
//   }
// });

// console.log(mergedArr);


// duplicate value of an array of object

// let arr =[{name:"now"},{name:"now"},{name:"work"},{name:"work"},{name:"now"},{name:"now"}];

// let uniqueValues = [...new Set(arr.map(item => item.name))];

// console.log(uniqueValues);


//Array Destructuring in javascript

// const arrData=["pawan", 'Salve','26']

// let [myName,myLname,myAge,phone=83293027564]=arrData

// console.log(phone);

//object Destructuring in javasecript

// const arrData={
//     myName:'pawan',
//     myAge:25,
//     myPhone:856343826
// }

// let {myName,myPhone,myAge,myIFSC="83FACRAT7564"}=arrData

// console.log(myIFSC);

// +++++++++++++++++++++===================++++++++++++++++++++++++++
// new Javascript programs  display record are age wise 20, 21
/* Group items on the basis of age of given array of object */
// const people = [
// 	{ name: "John", age: 21 },
//   { name: "Max", age: 20 },
//   { name: "Alexa", age: 20 }
// ];

// const groupBy = (arr) => {
// const result ={};
// 	for (let i=0; i<arr.length; i++){
//   const item= arr[i];
//   const age= item.age.toString();
//   if(!result[age]){
//   result[age]=[];
//   }
//   result[age].push(item)
//   }
//   return result;
//   };
 

// console.log(groupBy(people)); 
// Output
/* 
{
	'20': [ { name: "Max", age: 20 }, { name: "Alexa", age: 20 } ],
  '21': [ { name: "John", age: 21 } ]
}
 */


// =================================================+++++++++++++++++++++++++++++++++++=====================================
/* Program to check a string with balanced brackets. */
// const isValid = (str) => {
//     const string = str.split('')
//     const array = []
    
//     for (let i = 0; i < string.length; i++) {
//       let item = string[i]
      
//       if (item === '(' || item === '[' || item === '{') {
//         array.push(item)
//       } else if (item === ')' || item === ']' || item === '}') {
//         let check = array.pop()
        
//         if ((item === ')' && check !== '(') || 
//             (item === ']' && check !== '[') || 
//             (item === '}' && check !== '{')) {
//           return false
//         }
//       }
//     }
    
//     return array.length === 0
//   }
  
//   const str1 = "({} [] ({}))";
//   const str2 = "}}";
  
//   console.log(isValid(str1)); // Should return true
//   console.log(isValid(str2)); // Should return false
  
// \\\\\**************************************\\\\\\\\\

// call api and display record in table format using fetch

// import React, { useEffect, useState } from 'react';

// const TodoComponent = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => setTodos(json))
//       .catch(error => console.log(error));
//   };

//   return (
//     <div>
//       <h2>Todo Component</h2>
      
//         <table>
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>ID</th>
//               <th>User ID</th>
//             </tr>
//           </thead>
//           <tbody>
//             {todos.map(todo => (
//               <tr key={todo.id}>
//                 <td>{todo.title}</td>
//                 <td>{todo.id}</td>
//                 <td>{todo.userId}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
     
//     </div>
//   );
// };

// export default TodoComponent;

// ***************************************========================***************************

// call api and display record as simple using fetch method

// import React, { useEffect, useState } from 'react';

// const TodoComponent = () => {
//   const [todo, setTodo] = useState(null);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json=> setTodo(json))
//   };

//   return (
//     <div>
//       <h2>Todo Component</h2>
//       {todo ? 
//         <div>
//           <h3>Title: {todo.title}</h3>
//           <p>ID: {todo.id}</p>
//           <p>User ID: {todo.userId}</p>
//         </div>
//         : <h3>Pending... </h3>
// }
//     </div>
//   );
// };

// export default TodoComponent;


// {
//   todo.map(item=>(
//     <h2>{item.id}</h2>
//   )
//   )
// }

// /++++++++++++++++++++++++++++++++++++++++++++++++=+===============/

// Pass data from parent to child

// export default function App() {
//   const data="Pawan"
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <NewData comp={data}/>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
  
// }
// const NewData =(props)=>{
//   return(
//     <div>{props.comp} </div>
//   )
// }


/*++++++++++++++++++++++++++++++++++++++++==========================================*/
// You have 15 Rs with you. You go to a shop and shopkeeper tells you price as 1 Rs per chocolate. He also tells you that you can get a chocolate in return of 3 wrappers.
//  How many maximum chocolates you can eat/get?
// function calculateMaxChocolates(money) {
//   let chocolates = money; // Number of chocolates initially purchased
//   let wrappers = chocolates; // Number of wrappers initially obtained

//   while (wrappers >= 3) {
//     const exchangedChocolates = Math.floor(wrappers / 3); // Chocolates obtained from exchanging wrappers
//     chocolates += exchangedChocolates;
//     wrappers = exchangedChocolates + (wrappers % 3); // Wrappers remaining after exchanging
//   }

//   return chocolates;
// }

// const money = 15;
// const maxChocolates = calculateMaxChocolates(money);

// console.log(`Maximum number of chocolates: ${maxChocolates}`);


//Prime number program

// var no=20;
// var b=1
// for (let i=2; i<=Math.sqrt(no); i++)
// {
//   if(no % i == 0)
//   {
//     b=2;
//     break;
//   }
//   if(b== 2)
// {
//   console.log("no is NOT Prime");
// }
// else{
//   log("the given number is PRIME ")
// }
// }


// Fibbonacci series program
// let number=10
// let a = 0, b = 1, c;
// let res=a+b
// console.log(res)
// while(res < number) {
//     console.log(a);
//     c = a + b;
//     a = b;
//     b = c;
// }


// Write Javascript code!
// You have 15 Rs with you. You go to a shop and shopkeeper tells you price as 1 Rs per chocolate. He also tells you that you can get a chocolate in return of 3 wrappers. How many maximum chocolates you can eat/get?

// You have a 5-liter and a 3-liter bowls.  You have access to empty of water. How would you measure exactly 4 liters in another empty Jar

// A water lily in a lake double in size every day. After 10 days, it covers half of the lake. How many days will it have taken in all to cover it entirely



// Write Javascript code!

// Write a function in Vanilla JS that takes n number of arrays of integers and returns an array of distinct integers 
// i.e the integers should appear only once among the input arrays. 
// Example:I/P [1,2,3], [2,3,4], [3,4,5] => O/P [1,2,3,4,5]. 
// Note: number of arrays can be n. The function should work when inputs are increased or decreased.
// Two way of writing 1st is using [...new Set()]
// function dipayNumber(...arrays) {
//   const no1 = arrays.flat();

//   var retAns =[ ...new Set(no1)];
//   console.log(retAns);
// }

// dipayNumber([1, 2, 3], [2, 3, 4], [3, 4, 5]);

// Two way of writing 2nd is using const no2= Array.form(retAns)
// function dipayNumber(...arrays) {
//   const no1 = arrays.flat(Infinity);

//   var retAns =new Set(no1);
//   const no2 = Array.from(retAns);

//   console.log(no2);
// }

// dipayNumber([1, 2, 3], [2, 3, 4], [3, 4, 5]);

//Trird way using reduce() and concate ()

// function dipayNumber(...arrays) {
//   const no1 = arrays.reduce((acc, curr) => acc.concat(curr), []);

//   var retAns = [...new Set(no1)];

//   // var retAns = new Set(no1); these three line also use for array allten
//   // const no2 = Array.from(retAns); 
//   // console.log(no2);
 
//     console.log(retAns);
  
// }

// dipayNumber([1, 2, 3], [2, 3, 4], [3, 4, 5]);
// ===============================***************************==============================
// simple JavaScript program that defines an array of objects and displays the records:

// Define an array of objects
// const students = [
//   { name: 'John', age: 20, grade: 'A' },
//   { name: 'Sarah', age: 22, grade: 'B' },
//   { name: 'Michael', age: 19, grade: 'A-' },
// ];

// // Loop through each object in the array
// for (let i = 0; i < students.length; i++) {
//   // Access the properties of the current object
//   const name = students[i].name;
//   const age = students[i].age;
//   const grade = students[i].grade;

//   // Display the values
//   console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`);
// }



// Auto Increment counter program in React Js

// import React, { useState, useEffect } from 'react';

// const AutoCounter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount(prevCount => prevCount + 1);
//     }, 1000);
//   },);

//   return (
//     <div>
//       <h1>Auto Counter</h1>
//       <p>Count: {count}</p>
//     </div>
//   );
// };

// export default AutoCounter;

// ===============*************==========================================================
// Counter Start Stop Program 

// import React, { useState, useEffect } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timerId;

//     if (isRunning) {
//       timerId = setInterval(() => {
//         setCount((prevCount) => prevCount + 1);
//       }, 1000);
//     }

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [isRunning]);

//   const handleStart = () => {
//     setIsRunning(true);
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//   };

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   );
// };

// export default Counter;

// start stop count program forword backword order
// import React, { useState, useEffect } from 'react';
// import './style.css';

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [isIncrementing, setIsIncrementing] = useState(true);

//   useEffect(() => {
//     let timerId;

//     const incrementCount = () => {
//       setCount((prevCnt) => (isIncrementing ? prevCnt + 1 : prevCnt - 1));
//     };

//     if (isRunning) {
//       timerId = setInterval(() => {
//         incrementCount();

//         if (count ===4) {
//           setIsIncrementing(false);
//         } else if (count === 1) {
//           setIsIncrementing(true);
//         }
//       }, 1000);
//     }

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [isRunning, count, isIncrementing]);

//   const startTime = () => {
//     setIsRunning(true);
//   };

//   const stopTime = () => {
//     setIsRunning(false);
//   };

//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <h2>{count}</h2>
//       <button onClick={startTime}>Start</button>&nbsp;
//       <button onClick={stopTime}>Stop</button>&nbsp;
//     </div>
//   );
// }


// onClick of Submit button display first name and last name

// import React, { useState } from "react";
// export default function App() {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");

//   const handlClick = async () => {
//     const response = await fetch("https://randomuser.me/api/");
//     const data = await response.json();
//     const { results } = data;
//     if (results.length > 0) {
//       const { name } = results[0];
//       setFname(name.first);
//       setLname(name.last);
//     }
//   };
//   return (
//     <div className="App">
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={handlClick}>Click</button>
//       <p>
//         {fname} {lname}
//       </p>
//     </div>
//   );
// }

// ==================================***********************===================================
// https://fakestoreapi.com/products use this API and display recorde as list View

// import React, { useState, useEffect } from 'react';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <img src={product.image} alt={product.title} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;

// =======================================********************************=================================
// https://dummyjson.com/products use this API and display recorde as list View

// import React, { useState, useEffect } from 'react';

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log(data)
//         setProducts(data?.products)
//       } 
//       )
//   }, []);t

//   return (
//     <div>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.brand} - {product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;
// ============================***************===========================
// https://fakestoreapi.com/products -use this API add new record and display recorde as list View

// import React, { useState, useEffect } from 'react';

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({
//     brand: '',
//     price: '',
//   });

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data?.products);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   const handleInputChange = (e) => {
//     setNewProduct({
//       ...newProduct,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleAddProduct = () => {
//     setProducts([...products, newProduct]);
//     setNewProduct({
//       brand: '',
//       price: '',
//     });
//   };

//   return (
//     <div>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.brand} - {product.price}
//           </li>
//         ))}
//       </ul>

//       <div>
//         <input
//           type="text"
//           name="brand"
//           placeholder="Brand"
//           value={newProduct.brand}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="price"
//           placeholder="Price"
//           value={newProduct.price}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleAddProduct}>Add Product</button>
//       </div>
//     </div>
//   );
// }

// export default ProductList;


// =========================================***********====================
// https://fakestoreapi.com/products -use this API add new record 
// and display recorde as list View Using form

// import React, { useState, useEffect } from 'react';
// import './style.css';

// export default function App() {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({
//     brand: '',
//     price: '',
//   });

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         setProducts(result?.products);
//       });
//   }, []);

//   const inputChangeHandler = (e) => {
//     setNewProduct({
//       ...newProduct,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const submitHandle = (e) => {
//     e.preventDefault(); // Prevents the default form submission behavior

//     setProducts([...products, newProduct]);
//     setNewProduct({
//       brand: '',
//       price: '',
//     });
//   };

//   return (
//     <>
//       <div>
//         <h1>Hello StackBlitz!</h1>
//         <ul>
//           {products?.map((item, index) => (
//             <li key={index}>
//               <p>{item.brand}</p>
//               <p>{item.price}</p>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <h1>Add New Data</h1>

//       <form onSubmit={submitHandle}>
//         <input
//           name="brand"
//           type="text"
//           value={newProduct.brand}
//           onChange={inputChangeHandler}
//           placeholder="Enter brand name"
//         />
//         <br />
//         <br />
//         <input
//           name="price"
//           type="text"
//           value={newProduct.price}
//           onChange={inputChangeHandler}
//           placeholder="Enter price name"
//         />
//         <br />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// ===================================******************=========================================

// https://dummyjson.com/products -use this API Link and display record - 

// import React, { useState, useEffect } from 'react';

// function ProductList() {
//   const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then((response) => response.json())
  //     .then((data) => 
  //     setProducts(data?.products)
  //     )
  // }, []);
  
//   return (
//     <div>
//       <ul>
//         {products?.map((product) => (
//           <li key={product.id}>
//             <p>{product.id} </p>
//             <p>{product.title}</p>
//             <p>{product.price}</p>
//             <img src={product.images[0]} alt={product.title} />

//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;



// var number = 10;
// var display = function () {
//   console.log(number);
//   var number = 20;
// };
// display();

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() { console.log(i); }, i * 1000 );
// }


// let listOfNumber = [6,1,2,8,3,4,7,10,5] i have this array 1 to 10 write a code to find missing number
// To find the missing number in the given array, 

// function missnum(arr){
//   let result=[];
//   let minArr=Math.min(...arr)
//   let maxArr=Math.max(...arr)
//   for(let i=minArr; i<maxArr; i++){
//       if(arr.indexOf(i)<0){
//           result.push(i)
//       }
//   }
//   return result
// }

// const listOfNumber = [6,1,2,8,3,4,7,10,5]
// const fstArr=missnum(listOfNumber)
// console.log(fstArr)






/* new
Practice 
here*/
// a=10
// b=20

// a=a+b;
// b=a-b;
// a=a-b

// console.log(a,b);


// const arr=[3,5,10,22,40]
// const indArr=arr.indexOf(10)
// arr.splice(indArr + 1, 0, 20)
// console.log(arr);

// const arr=[3,5,10,22,40]
// arr.shift()
// console.log(arr);


// const nameArr=['kadam','Aasman','Air','Newton']

// for(let jok in nameArr){
//   console.log((jok));
// }


// const nameArr1=['kadam','Aasman','Air','Newton']

// for(let jok of nameArr1){
//   console.log((jok));
// }

// const nameArr2=['kadam','Aasman','Air','Newton']
// nameArr2.forEach(array=>console.log(array));



// let textname=" pawan salve"

// let revstr=""
// for(let i=textname.length-1; i>=0; i--)
// {
//   revstr +=textname[i]
// }
// console.log(revstr);

//recent practice 9/25/2023

// const arr = [2, 4, 20, 15, 25];

// const newArr=arr.indexOf(15)

// arr.splice(newArr+1,0,22)

// console.log(arr);




// let myPromise= new Promise((resolve, reject)=>{
//   let a=30
//   if(a===300){
//     resolve("Success")
//   }else{
//     reject("not success")
//   }
// })
// myPromise.then((message)=>{
//   console.log("true result",message);
// }).catch((message)=>{
//   console.log("false result",message);
// })


// import React,{useState,useEffect} from 'react'
// const ProductList =()=>{
//   const [fname, setFName]=useState('')
//   const [lname, setLName]=useState('')
//   const handleClick = async()=>{
// const resp=await fetch('https://randomuser.me/api/')
// const data=resp.json()
// const {results}=data
// if(results.length>0){
//   const {name}=results[0]
//   setFName(name.first)
//   setLName(name.last)
// }
//   }
//   return(
//     <div>
// <button onClick={handleClick}>Ok</button>
// <p>
// {fname}- {lname}
// </p>
//     </div>
//   )
// }
// export default ProductList



// interview questions 
// count character and display key value format
// function countOccurrences(arr) {
//   var result = {};
  
//   arr.forEach(function(element) {
//     result[element] = (result[element] || 0) + 1;
//   });
  
//   return result;
// }

// var myArr = [1, 2, 3, 2, 1, 3, 3, 2, 1, 1, 2, 3, 4, 4, 2, 3];
// var output = countOccurrences(myArr);
// console.log(output);

// second way to count character and display key value format

// var myArr = [1, 2, 3, 2, 1, 3, 3, 2, 1, 1, 2, 3, 4, 4, 2, 3];

// // Initialize an empty object to store the counts
// var countObj = { };

// // Loop through the array and count occurrences
// myArr.forEach(function (num) {
//     if (countObj[num]) {
//         countObj[num]++;
//     } else {
//         countObj[num] = 1;
//     }
// });

// console.log(countObj);

// Gess the output 
// for (var a=0;a<3;a++){
//   setTimeout(()=>{
//       console.log(a)
//   },a)
// }

//reverse number 123 to 321

// var no=123

// var res=String(no).split('').reverse().join('')
// console.log(res)
// o/p- 321

// letter count display 

// function letterCount(str, letter) {
//   // Convert both the string and the letter to lowercase to make the comparison case-insensitive
//   str = str.toLowerCase();
//   letter = letter.toLowerCase();
//   // Initialize a counter for the letter count
//   let count = 0;
//   // Loop through each character in the string
//   for (let i = 0; i < str.length; i++) {
//       // Check if the current character is equal to the specified letter
//       if (str[i] === letter) {
//           // Increment the count if there's a match
//           count++;
//       }
//   }
//   // Return the count
//   return count;
// }
// // Example usage:
// const result = letterCount("Connect", 'c');
// console.log(result);  // Output: 2

// ============================================================================================
// interview logical question
// There are two trains at a distance of 100 km. The trains are traveling towards each other with a speed of 40 km/hr and 50 km/hr respectively. A bee starts flying from the first train towards the second train with a speed of 60 km/hr. As soon as it reaches the second train, it starts flying back to the first train. It keeps on flying to and fro till the trains collide with each other. 
// What is the total distance covered by the bee?

//program solve question get image if i hover mouse on image then play video if i leave mouse then display image
// import { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [showVideo, setShowVideo] = useState(true);
//   const handleMouseEnter = () => {
//     setShowVideo(false);
//   };
//   const handleMouseLeave = () => {
//     setShowVideo(true);
//   };

//   return (
//     <div className="App">
//       {showVideo ? (
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big.Buck.Bunny.-.Opening.Screen.png/1200px-Big.Buck.Bunny.-.Opening.Screen.png"
//           alt="Not Found"
//           width="100%"
//           onMouseEnter={handleMouseEnter}
//         />
//       ) : (
//         <video
//           width="360"
//           height="315"
//           controls
//           autoPlay
//           onMouseLeave={handleMouseLeave}
//           src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
//           type="video/mp4"
//         ></video>
//       )}
//     </div>
//   );
// }

// export default App;

// service paid more than 200 display

// function countServicesPaidMoreThan200(servicesArray) {
//   // Create an object to store the services and their total amounts
//   const services = {};

//   // Iterate through the servicesArray to calculate the total amounts for each service
//   for (let i = 0; i < servicesArray.length; i++) {
//     const [service, amount] = servicesArray[i];
//     // Check if the service already exists in the services object
//     if (services.hasOwnProperty(service)) {
//       services[service] += amount;
//     } else {
//       services[service] = amount;
//     }
//   }

//   let count = 0;

//   // Iterate through the services object to count services with amounts more than 200
//   for (const service in services) {
//     if (services.hasOwnProperty(service) && services[service] >= 200) {
//       count++;
//     }
//   }

//   return count;
// }

// const servicesArray = [
//   ["Sweeggy", 123],
//   ["Sweeggy", 334],
//   ["Zomato", 234],
//   ["Dunzo", 546],
//   ["Zomato", 102]
// ];

// console.log(countServicesPaidMoreThan200(servicesArray)); // Output: 3 (Sweeggy, Zomato, Dunzo)

