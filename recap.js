// // JS can loosely change variable type

// let x = 12.0; // number type
// x = "Boo!"; // string type

// console.log(`Hello World ... ${x}`); // combine string and variable x


// // Conditional statements
// let age = 19;
// if (age > 18){
//     console.log("You can vote");
// } else {
//     console.log("Wait till you are 18 before you can vote");
// }


// // Functions
// function print_sum(a, b) {
//     console.log(`a: ${a}`);
//     console.log(`b: ${b}`);
  
//     console.log(`a + b = ${a + b}`);
//   }
  
  
//   print_sum(2, 3);

//   function add(a, b){
//     return a + b;
//   }

//   sum = add(2, 3);

//   console.log(`Sum : ${sum}`);



// var function_to_print_sum = function (a,b){
//     console.log(`a + b = ${a + b}`);
// }

// // function_to_print_sum(2,3);

// // Arrow Functions

// var function_to_print_sum = (a,b) => {
//     console.log(`a + b = ${a + b}`);
// }

// function_to_print_sum(2,3);

// print_after_operation is responsible for calling back the operation function [callback fxn; which is passed by a parameter]

function print_after_operation(a, b, operation) {
    var result = operation(a, b);
    console.log("Result: " + result);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function product(a, b) {
    return a * b;
  }

  print_after_operation(1,2,product);
  // function in place
  print_after_operation(1,2,(a, b)=> {
      return a-b;
    });

