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


// Primitives vs objects*******************************************
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

/*
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
*/


// Closures ************************************************************************************
/*

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);


retirementUS(1990);
retirement(66)(1990);
// Algoritm:
// 1. Programm read and run function from left to right
// 2. So it's run retirement(66), and function return result, another function
// 3. Than variable (1990) add to this function function(yearOfBirth) and runs...
// (1990) = (yearOfBirth)
// 4. We get the result
var retirementGE = retirement(65);
var retirementICE = retirement(67);
retirementGE(1990);
retirementICE(1990);

/* Rebuild this function with closures

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
*/
/*
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what is UX design is?');
        } else if (job === 'teacher') {
            console.log(name + ', what subject do you teach?');
        } else {
            console.log('So, what do you do, ' + name + '?');
        }
    }
}

var interviewDesigner = interviewQuestion('designer');
interviewDesigner('Julius');
*/

// Bind, call and apply methods***************************************************************************************************
/*
var mark = {
    name: 'Mark',
    age: 27,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentelmens! I\'m ' 
            + this.name + '. And i\'m a ' + this.age + ' years old ' + this.job + '.');
        } else if (style === 'casual'){
            console.log('Hey! What\'s up! I\'m a ' + this.name + ', ' + this.age + ' years old ' + this.job + '. ' +
            'Have a nise ' + timeOfDay + '!');
        }
    }
};

mark.presentation('casual', 'morning');

var emily = {
    name: 'Emily',
    age: 30,
    job: 'soldier',
};

mark.presentation.call(emily, 'formal', 'afternoon');

//mark.presentation.apply(emily, ['formal', 'aftrnoon'])

var markCasual = 
mark.presentation.bind(mark, 'casual');
markCasual('morning');

var emilyFormal = mark.presentation.bind(emily, 'formal');
emilyFormal('night');


//-------------------------------------------------------------------------------------

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
    return 2019 - el;
}

// Возвращает Булевы значения - есть 18 или нет
function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);
*/

/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


(function(){
    alert('Are you ready to game?');

    var arrayQuestions = [];
    
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };
    
    var q1 = new Question(
        'How to define variable \'name\' in Javascript?',
        ['0. var name','1. define name','2. just name'],
        0
    );
    
    
    var q2 = new Question(
        'Who was the creator of Microsoft?',
        ['0. Steve Jobs', '1. Bill Gates', '2. Steve Gates'],
        1
    );
    
    var q3 = new Question(
        'In which language maded this quiz?',
        ['0. Russian', '1. CSS', '2. HTML5', '3. Javascript'],
        3
    );
    
    
    // Creating a function for add new questions in arrayQuestions
    var addToQuestions = function(el) {
        return arrayQuestions.push(el)
    };
    
    addToQuestions(q1);
    addToQuestions(q2);
    addToQuestions(q3);
    //-------------------------------------------------------------
    
    var random = Math.floor(Math.random() * arrayQuestions.length);
    
    Question.prototype.task = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(this.answers[i]);
        }
    };
    
    Question.prototype.checkAnswer = function (ans) {
        if (ans === arrayQuestions[random].correctAnswer) {
            console.log('You are right! Next question.')
        } else {
            console.log('Try one more time')
        }
    };
    
    console.log(arrayQuestions[random].task());
    
    var answer = parseInt(prompt('Enter the number of answer. And press \'OK\'. For exit write \'exit\''));
    
    arrayQuestions[random].checkAnswer(answer);
})();































/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/









