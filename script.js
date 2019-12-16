
 /*
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = 'Teacher';
console.log(job);

// Variables naming rules

var johnMark = 'j $ M';




//Type correction
var firstName = 'John';

var lastName = 'Smith';
var age = 28;

console.log(firstName + ' ' + age); 

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

*/
/*
//Math operators
var currentYear, yearPit, yearJack;
agePit= 28;
ageJack= 25;

currentYear = 2019;
yearPit = currentYear - agePit;
yearJohn = currentYear - ageJack;


console.log(yearPit);
console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 2);

// Logical operators

var pitOlder = agePit < ageJack;
console.log(pitOlder);

// Type of operator
console.log(typeof pitOlder);
console.log(typeof agePit);
console.log(typeof 'Pit is older than Jack');

var x;
console.log(typeof x);
*/
/*
var now = 2019;
var yearJohn = 1988;
var fullAge = 18;

// Multiple operators

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments

var x,y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators


x *=10;
console.log(x);
x +=10;
console.log(x); 

// The same
x = x + 1;
x +=1;
x++;
// The same
x = x - 1;
x -=1;
x--;
*/

/*
var johnMass, markMass, johnHeight, markHeight, johnBmi, markBmi;

// Input data
johnMass = prompt ('What is John Mass in kg?');
johnHeight = prompt ('What is John Height in sm?');
markMass = prompt ('What is Mark Mass in kg?');
markHeight = prompt ('What is Mark Height in sm?');

// Manipulations
johnBmi=johnMass/(johnHeight/100)**2;
markBmi=markMass/(markHeight/100)**2;

console.log(johnBmi);
console.log(markBmi);

var comparison = johnBmi>markBmi;
console.log("Is John's BMI is more than Mark's BMI? " + comparison);

*/


// IF - ELSE STATEMENT*******************************************************************
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}

// TEST 1 ****************************************************************************
var johnMass, markMass, johnHeight, markHeight, johnBmi, markBmi;

// Input data
johnMass = prompt ('What is John Mass in kg?');
johnHeight = prompt ('What is John Height in sm?');
markMass = prompt ('What is Mark Mass in kg?');
markHeight = prompt ('What is Mark Height in sm?');

// Manipulations
johnBmi=johnMass/(johnHeight/100)**2;
markBmi=markMass/(markHeight/100)**2;

console.log(johnBmi);
console.log(markBmi);

if (johnBmi > markBmi) {
    console.log("John's BMI is more than Mark's BMI.");
} else {
    console.log("Mark's BMI is more than John's BMI.");
}
*/

//BOLEAN LOGIC *******************************************************************
/*
var firstName = 'John'
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.')
} else if ( age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.')
} else if (age>=20 && age<30) { 
    console.log(firstName + ' is a yong man.')
} else {
    console.log(firstName + ' is a man.')
}
*/

//**********TERNARY OPERATOR**************** ********************************************/
/*
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);*/

/*if (age >= 18) {
    drink = 'beer';
} else {
    drink = 'juice';
}
console.log(drink);*/

// Swith statement
/*
var job = 'teacher';
switch (job) {
    case 'teacher': //Works like ||
    case 'insructor':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');   
}*/

/*  CONDITIONS OF TASK
var firstName = 'John'
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.')
} else if ( age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.')
} else if (age>=20 && age<30) { 
    console.log(firstName + ' is a yong man.')
} else {
    console.log(firstName + ' is a man.')
}*/
/*
switch (true) {
    case age < 13:
            console.log(firstName + ' is a boy.');
            break;
    case age >= 13 && age < 20:
            console.log(firstName + ' is a teenager.');
            break;
    case age>=20 && age<30:
            console.log(firstName + ' is a yong man.');
            break;
    default:
            console.log(firstName + ' does something else.');   
        }
*/


//017 Truthy and Falsy values **************************************************************************
/*
var height;

height = 23;

if (height || height===0   ) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
};

if (height === '23') {
    console.log('The == operators does type coertion!');
}*/

// CHALLENGE 2 ***************************************************************************************
/*
var scoreJohn, scoreMike, scoreMary;

scoreJohn = (89 + 120 + 103)/3;
scoreMike = (116 + 94 + 123)/3;
scoreMary = (97 + 134 + 105)/3;

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John is won.');
} else if (scoreJohn < scoreMike && scoreMary < scoreMike) {
    console.log('Mike is won.');
} else if ((scoreJohn < scoreMary && scoreMike < scoreMary)) {
    console.log('Mary is won.');
} else {
    console.log('There is a draw');
}*/

// FUNCTIONS ********************************************************************************************
/*
function calculateAge (birthYear) {
    return 2019 - birthYear;
}


var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);


console.log(ageJohn, ageJane, ageMike);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement < 0) {
        console.log(firstName + ' is already retired!');
    } else {
        console.log(firstName + ' retire in ' + retirement + ' years.');
    };
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/


// FUNCTION STATEMENTS AND EXPRESSIONS *******************************************************************

// Function Declaration
//function whatDoYoDo(job, firstName) {}

//Function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches how to code';
        case 'driverr':
            return firstName + ' drives a car'
        case 'designer':
            return firstName + ' designs a web sites';
        
        default: 
            return firstName + ' does something else';
    }
}

whatDoYouDo('teacher', 'John');
console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','Mark'));
*/

// ARRAYS *************************************************************************************************

//Initalize new array
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names);
console.log(names.length);


// Muted array data
names [1] = 'Ben';
console.log(names);

names[names.length] = 'Mary';
console.log(names);

// Data types

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); //Add to the end
john.unshift('Mr'); // Add to the start
console.log(john);

john.pop()  //Erase from the end
john.shift() // Erase from the start
console.log(john);

console.log(john.indexOf(1990));  // Number of position of element

console.log(john.indexOf(23));  // Number of position of element, if not => -1

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is designer';
console.log(isDesigner);
*/

// TEST 023 *****************************************************************************************************
/*
var bills=[], finalPaids=[], bill, wages=[];
bills = [124,48,268];

function wage(bill) {
if (bill < 50) {
    var x = bill*0.2
} else if (bill <= 200) {
    x = bill*0.15
} else {
    x = bill*0.1
}
console.log(x);
wages.push(x);
}

wage(bills[0]);
wage(bills[1]);
wage(bills[2]);
finalPaids.push(bills[0]+wages[0]);
finalPaids.push(bills[1]+wages[1]);
finalPaids.push(bills[2]+wages[2]);

console.log(wages);
console.log(finalPaids);
*/

// Object and properties *************************************************************************************
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

// Как вызывать свойство из объекта
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

// How to add properties to object
john.john = 'designer';
john['isMarried']= true;

console.log(john);

// How to create objects
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smithy';
console.log(jane);
*/

// Objects and methods *************************************************************************************

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2019 - this.birthYear;  //this. - srlect a property in THIS objectd
    }
};

john.calcAge();
console.log(john);
*/

// TST 027 ************************************************************************************************
/*
var john = {
    name: 'John Runner',
    johnBmi: 0,
    calcBmi: function() {this.johnBmi = this.johnMass/(this.johnHeight/100)**2;
        return this.calcBmi;
    }
}
var mark = {
    name: 'Mark Zukerberg',
    markBmi: 0,
    calcBmi: function() {this.markBmi = this.markMass/(this.markHeight/100)**2;
        return this.calcBmi;
    }
}

// Input data
john.johnMass = prompt ('What is John Mass in kg?');
john.johnHeight = prompt ('What is John Height in sm?');
mark.markMass = prompt ('What is Mark Mass in kg?');
mark.markHeight = prompt ('What is Mark Height in sm?');

/*Run function and write an property
john.calcBmi();
mark.calcBmi();*/
/*
if (john.calcBmi()>mark.calcBmi()) {
    console.log(john.name + " BMI is more than " + mark.name + " BMI.");
} else if (john.calcBmi()<mark.calcBmi()) {
    console.log(mark.name + " BMI is more than " + john.name + " BMI.");
} else {
    console.log(mark.name + " and " + john.name + " have the same BMI.");
}

console.log(john);
console.log(mark);

*/

// LOOPS ******************************************************************************************************
/*
for (var i = 1; i <= 20; i++) {
    console.log(i)
}

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

console.log(john);

// FOR LOOP

for (var i = 0; i < john.length; i++) {
    console.log(john[i])
}

// WHILE LOOP

var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// CONTINUE AND BREAK STATEMENTS
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

/*
for (var i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}
*/
/*
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/


// TEST 030 ****************************************************************************

var billsJohn=[], finalPaidsJohn=[], finalPaidsMark=[], bill, wages=[], wagesMark=[], billsMark=[];
billsJohn = [124,48,268,180,42];
billsMark = [77,375,110,45]

function wage(bill) {
if (bill < 50) {
    var x = bill*0.2
} else if (bill <= 200) {
    x = bill*0.15
} else {
    x = bill*0.1
}
wages.push(x);
}

for (var i = 0; i < billsJohn.length; i++) {
    wage(billsJohn[i]);
    finalPaidsJohn.push(billsJohn[i]+wages[i]);
}

function wageMark(bill) {
    if (bill < 100) {
        var x = bill*0.2
    } else if (bill <= 300) {
        x = bill*0.10
    } else {
        x = bill*0.25
    }
    wagesMark.push(x);
    }

for (var i = 0; i < billsMark.length; i++) {
    wageMark(billsMark[i]);
    finalPaidsMark.push(billsMark[i]+wagesMark[i]);
}

var averageBillJohn, averageBillMark;

for (var i = 0; i < billsJohn.length; i++) {
    averageBillJohn =+billsJohn[i]/billsJohn.length;
}


console.log(wages);
console.log(wagesMark);
console.log(finalPaidsJohn);
console.log(finalPaidsMark);
console.log(averageBillJohn)
