///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1990); // Expression works if it before function

function calculateAge(year) {
    console.log(2016-year);
}

// retiremet(1990); // Declaration not works

var retiremet = function(year) {
    console.log(65 -(2016-year));
}

// variables

console.log(age); // undefined because "var", и не была назначена ранее
var age = 23;
console.log(age);


function foo() {
    console.log(age); // undefined because in function, не распространяются глобальные объекты
    var age = 65;
    console.log(age); // Execution object
}

console.log(age);
foo();
console.log(age); // Global execution object, на него не распротраняюся значения из функции

///////////////////////////////////////
// Lecture: Scoping
*/

// First scoping example

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}*/




// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    console.log(a+d);
}

*/


///////////////////////////////////////
// Lecture: The this keyword

/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016-year);
    console.log(this);
}

*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        /*
        function innerFunction () {
            console.log(this)
        }

        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: "Mike",
    yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();