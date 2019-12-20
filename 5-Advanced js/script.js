// Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'programmer'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
   /* this.calculateAge = function () {
        console.log(2019 - this.yearOfBirth);
    }*/
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