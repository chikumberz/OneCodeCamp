console.log('Functions');

function greet () {
    return 'Hello, welcome to the world of function';
}

console.log(greet());

// 1. Function declaration
function squareDeclaration (num) {
    return num * num;
}

console.log(squareDeclaration(2));

// 2. Function expression, assigned to a variable
const squareExpression = function (num) {
    return num * num;
}

console.log(squareExpression(6));


// Anonymous function
const anonymous_function = function () {
    console.log('hi')
}

anonymous_function();

(function () {
    console.log('test');
})();


/*
    Objective: Create a FizzBuzz program to practice loops and conditionals.
    Instructions: Write a JavaScript program that prints numbers from 1 to 100
    For multiples of 3, print "Fizz" instead of the number.
    For multiples of 5, print "Buzz" instead of the number.
    For numbers that are multiples of both 3 and 5, print "FizzBuzz.”
*/

for (let x = 1; x <= 100; x++) {
    if ((x % 3) == 0 && (x % 5) == 0)
        console.log('FizzBuzz');
    else if ((x % 5) == 0 )
        console.log('Fizz');
    else if ((x % 3) == 0 )
        console.log('Buzz');
    else
        console.log(x);
}
