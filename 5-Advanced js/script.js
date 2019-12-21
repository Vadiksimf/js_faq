// Function constructor ***************************************
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'programmer'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

// Creating of prototype. The same method as in Person object
Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
};

// Add property in Person Object
Person.prototype.lastName = 'Smith';


var mike = new Person('Mike', '1998', 'designer');
console.log(mike);
var mary = new Person('Mary', 1989, 'seller');
var pete = new Person('Pete', 1956, 'guard');

mike.calculateAge();
mary.calculateAge();
pete.calculateAge();

console.log(mike.name +' '+ mike.lastName);
console.log(mary.name +' '+ mary.lastName);
console.log(pete.name +' '+ pete.lastName);
*/


// Object.create *******************************************
/*

var personProto = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1989;
john.job = 'programmer';

var jane = Object.create(personProto, 
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1998},
        job: {value: 'designer'}
    }
    );
*/


// Primitives vs objects


//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


//Objects
var obj1 = {
    name: 'Pete',
    age: 31
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1);
console.log(obj2);



//Functions

var age = 27;
var obj = {
    name: 'Peter',
    city: 'Warshaw'
};

function change(a,b) {
    a = 30;
    b.city = 'London';
};

change(age,obj);

console.log(age);
console.log(obj.city);

















