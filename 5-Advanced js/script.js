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
/*

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
*/


// Passing function as argument ************************************************

/*
var years = [1990, 1975, 1937, 2008, 1999];


// Создание функции для использования других функций. Возвращает нам массив
function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i =0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

// Рассчет массива с возрастами
function calculateAge(el) {
    return 2016 - el;
}

// Возвращает Булевы значения - есть 18 или нет
function isFullAge(el) {
    return el >= 18;
}

// Максиальная частота сокращения сердца для определенного возраста
// Берется массив с возрастами (элемент arr функции arrayCalc) и добавляется
// в функцию (аргумент fn функции arrayCalc = maxHeartRate)
function maxHeartRate (el) {
    if (el >= 18 && el <=81) {
    return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;}
}

var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var HeartRate = arrayCalc(ages, maxHeartRate)

console.log(ages);
console.log(fullAges);
console.log(HeartRate);
*/


// Functions returning functions *************************************
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what is UX design is?');
        } 
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function (name) {
            console.log('So, what do you do, ' + name + '?');
        }
    }
}

var teacherQuestions = interviewQuestion('teacher');
var designerQuestions = interviewQuestion('designer');
var coderQuestions = interviewQuestion('coder');

teacherQuestions('John');
// Переменная запускает функцию interviewQuestion('teacher');
// Возвращается результат в виде function(name)
// function(name) приравнивается к teacherQuestions('John');
// Выполняется функция.
designerQuestions('Julius');
coderQuestions('Pete');


// Другой путь вывода функции. Сначала выполняется левая часть
// до переменной ('Mark'), потом после запроса выполняется функция 
// с переменной ('Mark')
interviewQuestion('teacher')('Mark');
*/

// IIFE - Immediatle Invoke Funktion Exspression ****************************************
/*
function  game() {
    var score = Math.random()*10;
    console.log(score >= 5);
}

game();
*/


// This code below is equal the code upper
(
    function() {
        var score = Math.random()*10;
        console.log(score >= 5); 
    }
)();

//console.log(score);


// Using for data privacy, because this code 
// is not using in GLOBAL variables
(
    function(goodLuck) {
        var score = Math.random()*10;
        console.log(score >= 5 - goodLuck); 
    }
)(5);






