
//Singleton
function Pessoa() {
    if(!Pessoa.instance) {
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({name: 'Gustavo'})
const p2 = Pessoa.call({name: 'João'})
console.log(p)
console.log(p2)

//Factory
function FakeUser(name, customProperties) {
    return {
        name,
        lastName: 'Veloso da Silveira',
        ...customProperties
    }
}

const user = FakeUser('Gustavo', {age: 33});
console.log(user);

//Observer

class Observable {
    constructor() {
        this.observables = [];
    }

    subscribe(fn) {
        this.observables.push(fn);
    }

    notify(data) {
        this.observables.forEach(fn => fn(data));
    }

    unsubscribe(fn) {
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}
const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');


//ARRAYS
const myArray = Array(3);
console.log(myArray[2]);

//nodelist
const divs = document.querySelectorAll('div');
//cria Array de um nodelist
const arr = Array.from(divs);

const frutas = [
    'maçã',
    'banana',
    'laranja',
    'bergamota',
    'abacaxi',
    'manga'
];

frutas.forEach((value, index, arr) => {
    console.log(`A fruta ${value} está na posição ${index} do array ${arr}`);
});


const frutas2 = frutas.map((fruta, index) => {
    return `${fruta}, índice ${index}`;
});
console.log(frutas2)

const array1 = [1,2,3,[4,5,6]];

const array2 = array1.flat();
console.log(array2);
//[1,2,3,4,5,6]

const array = [1,2,3,4]
const array3 = array.flatMap(value => [[value*2]]);
console.log(array3);



const array = [1,2,3,4]
const arrayIterator = array.keys()

array.forEach(value => console.log(arrayIterator.next()))
// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }


const array = [1,2,3,4];
const arrayIterator = array.values();

array.forEach(value => console.log(arrayIterator.next()));
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }

const array = [1,2,3,4];
const arrayIterator = array.entries();

array.forEach(value => console.log(arrayIterator.next()));
// { value: [ 0, 1 ], done: false }
// { value: [ 1, 2 ], done: false }
// { value: [ 2, 3 ], done: false }
// { value: [ 3, 4 ], done: false }

const array = [1,2,3,4];
const findBiggerThan2 = array.find(value => value>2);
console.log(findBiggerThan2);

const array = [1,2,3,4];
const findBiggerThan2Index = array.findIndex(value => value>2);
console.log(findBiggerThan2Index);

const array = [1,2,3,4];
const findAllGreaterThanTwo = array.filter(value => value>2);
console.log(findAllGreaterThanTwo);
// [ 3, 4 ]

const array = [1,2,3,3,4,3,4];

const firstIndexOfThree = array.indexOf(3);
console.log(firstIndexOfThree);
//2

const array = [1,2,3,3,4,3,4];

const firstIndexOfThree = array.lastIndexOf(3);
console.log(firstIndexOfThree);
//5

const array = [1,2,3,3,4,3,4];

const hasItem3 = array.includes(3);
console.log(hasItem3);
//true
const hasItem5 = array.includes(5);
console.log(hasItem5);
//false

const array = [1,2,3,3,4,3,4];

const hasSomeEvenNumber = array.some(item => item%2 === 0);
console.log(hasSomeEvenNumber);
//true

const students = [
    {name: 'joão', grade: 4},
    {name: 'maria', grade: 5},
    {name: 'gustavo', grade: 8},
    {name: 'pedro', grade: 7},
    {name: 'bianca', grade: 9}
];

const hasAllStudenstPassed = students.every(student => student.grade >= 7);
console.log(hasAllStudenstPassed);
//false

const students = [
    {name: 'joão', grade: 4},
    {name: 'maria', grade: 5},
    {name: 'gustavo', grade: 8},
    {name: 'pedro', grade: 7},
    {name: 'bianca', grade: 9}
];

const sortStudentsByGrade = students.sort((a, b) => a.grade - b.grade);
console.log(sortStudentsByGrade);
// [ { name: 'joão', grade: 4 },
//   { name: 'maria', grade: 5 },
//   { name: 'pedro', grade: 7 },
//   { name: 'gustavo', grade: 8 },
//   { name: 'bianca', grade: 9 } ]


const students = [
    {name: 'joão', grade: 4},
    {name: 'maria', grade: 5},
    {name: 'gustavo', grade: 8},
    {name: 'pedro', grade: 7},
    {name: 'bianca', grade: 9}
];
students.reverse();
console.log(students);
// [ { name: 'bianca', grade: 9 },
//   { name: 'pedro', grade: 7 },
//   { name: 'gustavo', grade: 8 },
//   { name: 'maria', grade: 5 },
//   { name: 'joão', grade: 4 } ]

const array = [1,2,3,3,4,3,4];
console.log(array.join('$'));
//1$2$3$3$4$3$4

const array = [1,2,3,3,4,3,4];
const arrayTotalSum = array.reduce((total,value) => total += value, 0);
console.log(arrayTotalSum);
//20