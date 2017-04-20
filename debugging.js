// Part 1
// Answer the following questions:

// -What does the throw keyword do?
// >the throw keyword returns an error to stop code execution.
// it can throw an exception to catch to give more details on what went wrong

// -What does the finally keyword do?
// >the finally keyword executes at the end of try/catch statements and will
// execute regardless if there is an error or not

// -What is the difference between a TypeError and ReferenceError?
// >TypeErrors are made when there are incorrect uses of types
// (ex. trying to call a function when it is not one)
// ReferenceErrors are when trying to access variables that don't exist in
// that scope (ex. trying to reference a variable created in a function 
// but the variable is outside its scope)

// -How do you create a snippet in the Chrome dev tools?
// >open Chrome Browseer, open Dev Tools (command + option + j on a Mac or
// control + shift + j on Windows), navigate to Sources tab, click 
// "+ New Snippet" under Snippet column/tab

// -In the Chrome dev tools, on the right hand side of the sources tab, there 
// is a "pause" button which allows you to "pause on caught exceptions." What 
// is an exception?
// >an exception is a condition that needs special processing
// it breaks the normal flow of execution and should be handled differently

// -How do we "catch" errors in JavaScript? Give an example with code for what 
// that might look like.
// >we catch errors in JS using try/catch blocks
var n = 2; 
try {
    if (n === 2){ // special handling for n = 2
        throw "number equals 2";
    }
} catch(e) {
    console.log("error is: " + e);
}

// Explain what type of error will be thrown, why the error is occuring, and 
// how to fix it:
// 1. ReferenceError - no reference to variable person
/*
    person;
*/
// fix:
var person;

// 2. TypeError - displayInfo isn't a function on the data object
/*
    var data = {};
    data.displayInfo();
*/
// fix:
var data = {};
data.displayInfo = function(){};

// 3. TypeError - trying to access a property of undefined
/*
    var data = {};
    data.displayInfo.foo = "bar";
*/
// fix:
var data = {};
data.displayInfo = {};
data.displayInfo.foo = "bar";

// 4. ReferenceError - trying to access a property defined inside of a function
/*
    function data(){
        var thing = "foo";
    }
    data();
    thing;
*/
// fix:
var thing;
function data(){
    thing = "foo";
}
data();
thing;

// Part 2
// Fix the broken code and explain what was wrong:
// 1. 
/* 
    for(var i=0; i > 5; i++){
        console.log(i);
    }
*/
for(var i=0; i < 5; i++){
    console.log(i);
}
// end condition would cause loop never stop after i is 6

// 2.
/*
    function addIfEven(num){
        if(num % 2 = 0){
            return num + 5;
        }
        return num;
    }
*/
function addIfEven(num){
    if(num % 2 == 0){
        return num + 5;
    }
    return num;
}
// the assignment operator was used instead of comparison operator
// (used double equals because I'm assuming input will be numerical;
// otherwise use triple equals)

// 3.
/*
    function loopToFive(){
        for(var i=0, i < 5, i++){
            console.log(i);
        }
    }
*/
function loopToFive(){
    for(var i=0; i < 5; i++){
        console.log(i);
    }
}
// commas were used to separate initializer, condition, and counter instead
// of using semi-colons

// 4. 
/*
    function displayEvenNumbers(){
        var numbers = [1,2,3,4,5,6,7,8];
        var evenNumbers = [];
        for(var i=0; i<numbers.length-1; i++;){
            if(numbers % 2 = 0); {
                evenNumbers.push(i);
            }
            return evenNumbers;
        }
    }
    displayEvenNumbers(); // should return [2,4,6,8] 

    // HINT - eight things need to be changed here for this to work!
    // Start by fixing the syntax errors and then run the function to see 
    // what your output is.
*/
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length; i++){
        if(numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // should return [2,4,6,8] 
// 1. for loop condition should not be i<numbers.length-1 but just i<numbers.length
// 2. no ; at the end of the counter in for loop
// 3. if condition should have numbers[i] and not just numbers
// 4. assignment operator should be comparison operator in the if statement
// 5. no ; at end of if statement
// 6. push numbers[i] and not i into evenNumbers
// 7. evenNumbers return should be outside the for loop