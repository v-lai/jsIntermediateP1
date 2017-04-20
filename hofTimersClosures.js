// 1.
function countDown(num){
    var count = num;
    var timerId = setInterval(function(){
        count--;
        if (count > 0){
            console.log(count);
        } else {
            console.log("DONE!");
        }
    }, 1000);
    setTimeout(function(){
        clearTimeout(timerId);
    }, num * 1000);
}
countDown(4);
// 3
// 2
// 1
// "DONE!"

// 2.
function randomGame(){
    var counter = 0;
    var rand;
    var timerId = setInterval(function(){
        rand = Math.random();
        counter++;
        if (rand > 0.75){
            clearInterval(timerId);
            console.log(counter + " tries for greater than 0.75");
        }
    }, 1000);
}
randomGame();

// 3.
function isEven(num){
    return num % 2 === 0;
}
isEven(2); // true
isEven(3); // false

// 4.
function isOdd(num){
    return num % 2 !== 0;
}
isOdd(3); // true
isOdd(14); // false

// 5.
function isPrime(num){
    for (var i = 2; i < num/2; i++){ // better condition-> i <= Math.sqrt(value)
        if (num % i === 0){
            return false;
        }
    }
    // return true; // doesn't care if there are negative prime values
    return num > 1; // negatives are not prime
}
isPrime(8); // false
isPrime(17); // true

// 6.
function numberFact(num, fn){
    return fn(num);
}
numberFact(59,isEven); // false
numberFact(59,isOdd); // true
numberFact(59,isPrime); // true

// 7.
function find(arr, fn){
    for (var i = 0; i < arr.length; i++){
        if (fn(arr[i])){
            return arr[i];
        }
    }
}
find([8,11,4,27], function(val){return val >= 10}); // 11
find([8,11,4,27], function(val){return val === 5}); // undefined

// 8.
function findIndex(arr, fn){
    for (var i = 0; i < arr.length; i++){
        if (fn(arr[i])){
            return i;
        }
    }
}
// returns 1 (index of the first value greater than or equal to 10)
findIndex([8,11,4,27], function(val){return val >= 10});
findIndex([8,11,4,27], function(val){return val === 7}); // undefined

// 9.
function specialMultiply(a, b){
    if (arguments.length == 2){
        return a * b;
    }
    return function(b){
        return a * b;
    }
}
specialMultiply(3,4); // 12
specialMultiply(3)(4); // 12
specialMultiply(3); // returns a function 

