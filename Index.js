const garden = { // object
    Trees : {
        MangoTree: {
            name: 'mangoTree',
            fruit: 'mango',
            wood: ['fuel', 'Instrument']
        },
        OrangeTree: {
            name: 'orangeTree',
            fruit: 'orange',
            wood: { Automobile: 'fuel', Human: 'Instrument' }
        }
    }
};

setTimeout(() => { // High order function 
    for (let key in garden) {
        if (garden.hasOwnProperty(key)) {
            let value = garden[key];
            console.log(key, value);
        }
    }
}, 2000);

// Difference between let and var
let fruit = ['apple', 'mango', 'orange', 'papaya']; // array

let fruitFirstIndex;
var Apple;
var i;
function variableScope() {
    fruitFirstIndex = fruit[0]; 
    Apple = fruit[0];
    if(1==1) {
        var i = 'test1';
    }
    console.log(i);
}
variableScope();
console.log('fruitFirstIndex :'+fruitFirstIndex);
// Attempt to log a variable before it's declared using let
// This will cause a ReferenceError because let variables are not hoisted
// Attempt to log a variable before it's declared using var
// This will cause return undefind value, a var variables are hoisted.

// Anonymous function : These functions are often used in situations where you don’t need to reuse the function outside its immediate context.
var greet = function () {
    console.log("Welcome to JavaScript learning!");
};
greet();
// We may also declare an anonymous function using the arrow function technique which is shown below:
// Traditional function
function numBadd(a, b) {
    return a + b;
  }
  
  console.log(numBadd(2, 3)); // Output: 5
  
  // Arrow function with a different name
  const numBaddArrow = (a, b) => a + b;
  
  console.log(numBaddArrow(2, 3)); // Output: 5
  



// Callback : A callback is a function that is passed as an argument to another function and is executed after the completion of that main function. In simple terms, a callback function is called at the end of a task to either deliver results or perform an action. You pass this callback function to the main function, and once the main function completes, it invokes the callback to proceed with the next steps.
//use : Callbacks are used for managing the outcomes of asynchronous tasks without blocking the program’s execution.
function mainFunction(callback) {
    console.log("Performing operation...Hello Student");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function() {
        callback("Operation complete");
    }, 1000);
}

// Define the callback function
function callbackFunction(result) {
    console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);



// Promise : A promise lets you keep working with your code while waiting for something else to finish, like loading data from a server.
  
// How Does a Promise Work?
// A promise can be in one of three states:

// Pending: The promise is waiting for something to finish. For example, waiting for data to load from a website.
// Fulfilled: The promise has been completed successfully. The data you were waiting for is now available.
// Rejected: The promise has failed. Maybe there was a problem, like the server not responding.

// Syntax : 
// let promise = new Promise(function(resolve, reject){
//      //do something
// });

// Example :
// let myPromise = new Promise(function(resolve, reject) {
//     // some code that takes time, like loading data
//     let success = true; // change this to false to check error
  
//     if (success) {
//       resolve("The Promise data has loaded successfully!");
//     } else {
//       reject("There was an error loading the data of promise.");
//     }
//   });

let promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occurred');
    }); 
// then: This method is used to handle the result when the Promise is fulfilled. It takes a callback function that receives the resolved value.
// catch: This method is used to handle errors when the Promise is rejected. It takes a callback function that receives the rejection reason.



// This : In JavaScript, this keyword refers to the object that is currently executing a function or method.
function ageVerify(){
    if(this.age> 18){
        console.log("This : Yes you can drive");
    } else {
        console.log("This : No you cannot drive");
    }
}
const per1 = {age: 21};
const per2 = {age: 16};
ageVerify.call(per1);
ageVerify.call(per2);


// Immediately Invoked Function Expressions (IIFE) in JavaScript : Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.
// Syntax :
//(function (){ 
    // Function Logic Here. 
// })();

var iIFEResult = (function() {
    var x = 10;
    var y = 20;
    return x + y+'IIfE : x + y';
})();
 
console.log(iIFEResult); 

// Closure : A closure is a function that has access to variables in its outer scope, even after the outer function has returned. This allows the callback function to access variables and information from the main function, even after the main function has completed its execution.
function foo() {
    let b = 1;
    function inner() {
        return b;
    }
    return inner;
}
let get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());
// Note : Closure is the concept of function + lexical environment in which function it was created. so every function declared within another function then it has access to the scope chain of the outer function and the variables created within the scope of the outer function will not get destroyed.