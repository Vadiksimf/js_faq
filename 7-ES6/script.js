//////////////////////////////////////////////
// Let and const difference

/*
// ES5

var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6

const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/


/////////////////////////////////////////////////
// Blocks


/*
// ES5
function drvLicence5 (passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', now officially allowed to drive a car.')
}

drvLicence5(true);

// ES6
function drvLicence6 (passedTest) {
    
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', now officially allowed to drive a car.')
}

drvLicence6(true);


let i =23;

for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i);
*/


///////////////////////////////////////////////////
// Strings changes
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2020 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.')


// ES6

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);



const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('h'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/

////////////////////////////////////////////////////
// Arrow functions
/*
const years = [1990, 1995, 1982, 1937];

// ES5

var ages5 = years.map(function(el) {
    return 2020 - el;
})

console.log(ages5)


// ES6

let ages6 = years.map(el => 2020 - el);
console.log(ages6)

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);

console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});

console.log(ages6);
*/

////////////////////////////////////////////////////
// Arrow functions 2

// ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {

        var self = this; // Это костыль, чтобы this было видно внутри функции ниже. В ES6 этот костыль не нужен

        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}

//box5.clickMe();

// ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

//box6.clickMe();

const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box66.clickMe();
*/


///////////////////////////////////////////////////////////
// Prototype


/*
// ES5 


function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 =  function (friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el
    }.bind(this)); // В функции в строке 187 дает доступ к имени. Прикол ES5 

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6

Person.prototype.myFriends6 =  function (friends) {

    var arr = friends.map(el => 
    this.name + ' is friends with ' + el
    );

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends);
*/


////////////////////////////////////////////////////
// Destructuring

/*
// ES5

var john = ['John', 26];
var name = john[0];
var age = john[1];

// ES6

const [name, age] = ['John', 26];

console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {firstName, lastName} = obj;

console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
} 

const [age, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);
*/


/////////////////////////////////////////////////////////
// Arrays
/*
const boxes = document.querySelectorAll('.box');



// ES5

// Переделывание NodeList в массив
var boxesArr5 = Array.prototype.slice.call(boxes);
// Изменение свойств в CSS 
boxesArr5.forEach(current => {
    current.style.backgroundColor = 'dodgerblue';
});


// ES6
// Переделывание NodeList в массив
const boxesArr6 = Array.from(boxes);
// Изменение свойств в CSS 
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// ES5

for (var i =0; i < boxesArr5.length; i++) {

    if(boxesArr5[i].className === 'box blue') {
        continue; // Пропускает эту итерацию.
        // brake; // Останавливается на этой итерации.
    }

    boxesArr5[i].textContent = 'I changed to blue!';

}


// ES6

for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
};

// ES5

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (cur) {
    return cur >= 18;
});

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6

ages.findIndex(cur => cur >= 18);

console.log(ages.findIndex(cur => cur >= 18));

console.log(ages.find(cur => cur >=18));
*/


//////////////////////////////////////////////////////////////////
// Rest parameters

/*
// ES5
// Функция принимает любое количество чисел и присваивает имя "arguments".
// Результат функции не массив, а объект!

function isFullAge5() {
    console.log(arguments); 
    var argsArr = Array.prototype.slice.call(arguments); // Преобразование в массив

    argsArr.forEach(function(cur) {
        console.log((2020- cur) >= 18);
    })
}

//isFullAge5(1990, 2009, 1965);


// ES6
// Функция принимает любое количество чисел.
// Результат функции - массив!

function isFullAge6(...years) {
    console.log(years);
    years.forEach(cur => console.log((2020 - cur) >= 18));
}

isFullAge6(1990, 2009, 1965);
*/

/*
// ES5
// Функция принимает любое количество чисел и присваивает имя "arguments".
// Результат функции не массив, а объект!

function isFullAge5(limit) {
    //console.log(arguments); 
    var argsArr = Array.prototype.slice.call(arguments, 1); // Преобразование в массив исключая первый аргумент
    console.log(argsArr)

    argsArr.forEach(function(cur) {
        console.log((2020- cur) >= limit);
    })
}

//isFullAge5(21, 1990, 2009, 1965);


// ES6
// Функция принимает любое количество чисел.
// Результат функции - массив!

function isFullAge6(limit, ...years) {
    console.log(years);
    years.forEach(cur => console.log((2020 - cur) >= limit));
}
// Первый аргумент массива - предел
isFullAge6(35, 1990, 2009, 1965);
*/



////////////////////////////////////////////////////////
// Default parameters

/*
// ES5
function SmithPerson (firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith': lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

*/

// ES6
/*
function SmithPerson (firstName, yearOfBirth, lastName = 'Smith', nationality = 'american'){

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality; 
};

var john = new SmithPerson('John', 1990);
console.log(john);

var emily = new SmithPerson ('Emily', 1983, 'Diaz', 'spanish');
console.log(emily);
*/


///////////////////////////////////////////////////////
// Maps
/*

 const question = new Map();

 question.set('question', 'What is the official name of the latest major JS version?');
 question.set(1, 'ES5');
 question.set(2, 'ES6');
 question.set(3, 'ES2015');
 question.set(4, 'ES7');
 question.set('correct', 3);

 question.set(true, 'Correct answer :D');
 question.set(false, 'Wrong, please try again!');

console.log(question.get('question')); 
console.log(question.size);  // Количество свойств от 1 до ...

//question.delete(4); // Удалить элемент 4 от 0, 1, 2, 3, 4!

if (question.has(4)) {
    console.log('Answer 4 is here!')
}

//question.clear() // Удаляет вся свойства Объекта

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get (ans === question.get('correct')));
*/


//////////////////////////////////////////////////////////
// Classes

// ES5
/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge () {
        let age = new Date().getFullYear - this.yearOfBirth;  
    }

   static greeting() {
       console.log('Hey there!')
   } 
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/

/////////////////////////////////////////////////////////
// Classes with subclasses
/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// ES6

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge () {
        let age = new Date().getFullYear() - this.yearOfBirth; 
        console.log(age)
    }
};

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6 ('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/


 

////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

let parks, streets;
parks = [];
streets = [];

class ObjectData {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
};

class Parks extends ObjectData {
    constructor (name, buildYear, numberOfTrees, parkArea) {
        super (name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
    }

    treeDensity () {
        let num = this.numberOfTrees / this.parkArea;
        console.log(`${this.name} park has a tree density of ${num} per square km.`);
    }
};

class Streets extends ObjectData {
    constructor (name, buildYear, streetLength, size = 3) { //size = 3 - параметр по умолчанию
        super (name, buildYear);
        this.streetLength = streetLength;
        this.size = size;
    }

    classyfyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name} street build in ${this.buildYear} is a ${classification.get(this.size)} street.`)
    }
};

// const averageAge = 

const allParks = [
    new Parks ('Pobedy', 1888, 1500, 5), 
    new Parks ('Lenina', 1900, 100, 0.5), 
    new Parks ('Green', 1950, 1200, 5)
];


const allStreets = [
    new Streets ('Pushkina', 1900, 100, 2),
    new Streets ('Krylowa', 1750, 500, 4),
    new Streets ('Tolstova', 1950, 300, 3),
    new Streets ('Lermontova', 1850, 50, 1)
];



function reportParks(Parks) {
    console.log('-----------PARKS REPORT-------------')
        Parks.forEach(el => el.treeDensity())
    console.log(`Average age of town\'s park is`)
    let i = 0;
    while (i < Parks.length) {
        if(Parks[i].numberOfTrees > 1000) {
            console.log(`The ${Parks[i].name} park has more than 1000 tress and contain ${Parks[i].numberOfTrees} trees.`)
        }
        i++
    }
};


reportParks(allParks);



