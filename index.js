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
// var fullName = "salve";

// console.log(myName-fullName);

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

//eg
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
//   var tablenum = 8;
//   console.log(tablenum + "*" + no + "=" + tablenum * no);
// }

/*********** Function Definition,calling,parameter,arguments,expressions, and function Anonymous**************/

//function Definition and parameter and calling and arguments

// function sum(){
//     var a=10,b=20;
//     var total=a+b;
//     console.log(total);
// }
// sum();

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

/*********** EcmaScript  **************/

//Arrow Function

// const sum =()=>{
// return(`sum is ${(a=10)+ (b=16)}`)
// }
// console.log(sum())

// Array

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
// const newMonth= months.push(months.length,0,'Dec')
// console.log(months)

// const months= ['Jan','march','April','jun','july']
// // 2.
// console.log(months)//its return new array

// const months= ['Jan','march','April','jun','july']
// // 3.
// const indexOfMonth =months.indexOf('march');
// if(indexOfMonth != -1){
//     const updateMonth=months.splice(indexOfMonth,1,'March')
//     console.log(months)
//     console.log(updateMonth)
// }else{
//     console.log("no record found...")
// }

// const months= ['Jan','march','April','jun','july']
// // 4.
// const indexOfMonth =months.indexOf('jun');
// if(indexOfMonth != -1){
//     const updateMonth=months.splice(indexOfMonth,1)
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

//display array elements are greater than 100 single

// const arr1 = [10, 200, 50, 100, 300];

// const results = arr1.filter(number => number > 100);

// console.log(results);

// Output: [200,300] its return greater elements

//display sum of array element

//  let arrayy= [2,3,4,54,34];
//  let arrarNew= arrayy.reduce((curElm,accumulator)=>(accumulator +=curElm));
//  console.log(arrarNew);

// let arrayy= [2,3,4,54,34];
//  let arrarNew= arrayy.map((curElm)=>curElm*2).filter((curElm)=>curElm>10).reduce((curElm,accumulator)=>(accumulator +=curElm));
//  console.log(arrarNew);

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

/*********** Strings in JavaScript  **************/

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
// let res= str.slice(0,30);
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
//function which get passed as an argument to another function is called CBF

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
// //  x= "pawan"; // without using "use strict" its display output wit using "use strict" its display error
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

// count of each character of a srting in javascript without using function
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


// print most use character in this string
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
