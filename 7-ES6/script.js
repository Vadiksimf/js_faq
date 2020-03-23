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


// ES5
/*
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 =  function (friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el
    }.bind(this)); // В функции в строке 193 дает доступ к имени. Прикол ES5 

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

