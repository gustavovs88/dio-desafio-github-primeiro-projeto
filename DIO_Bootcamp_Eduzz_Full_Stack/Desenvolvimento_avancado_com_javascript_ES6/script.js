const obj = {
    showContext: function showContext() {
        setTimeout(function(){
            console.log(this)
            this.log('show context after 1000ms');
        }, 1000)
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();



const obj = {
    showContext: function showContext() {
        setTimeout(() => {
            console.log(this)
            this.log('show context after 1000ms');
        }, 1000)
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();


const myFunction1 = value => console.log(value);

const myFunction2 = (value1, value2) => console.log(value1 + value2);

const myFunction3 = (value1, value2) => {
    let value3 = value1 + value2;
    console.log(value3);
}

//Default Function Arguments

function multiply(a, b = 1) {
	return a * b;
}
console.log(multiply(5));
//5

function multiply(b = a, a) {
	return a * b;
}
console.log(multiply(5));

function multiply(a, b = a) {
	return a * b;
}
console.log(multiply(5));


const randomNumber = () => {
    console.log('returning a random number...');
    return Math.random()*10;
}
function multiply(a, b = randomNumber()) {
	return a * b;
}
console.log(multiply(5));
console.log(multiply(5));
// returning a random number...
// 8.227761809539015
// returning a random number...
// 13.726243002895567

//Enhanced Object Literals

var obj1 = 'My Object';

const obj = {
    obj1
}

console.log(obj);
//{ obj1: 'My Object' }


var method1 = () => console.log('Method inkoked');

const obj = {
    method1,
    method2( a, b ){
        return console.log(a*b)
    }
}

obj.method1()
obj.method2(3,5)
//Method inkoked
//5

var propName = 'my object'
const obj = {
    [propName + ' literal']: 'My object literal value'
}
console.log(obj);
//{ 'my object literal': 'My object literal value' }


const sum = (...args) => {
    return args.reduce((total, value) => total + value,0)
}
console.log(sum(1,2,3,4))
//10

const logRest = (a,b,...rest) => {
    console.log(a, b, rest)
}
logRest(1,1,3,4,5)
//1 1 [ 3, 4, 5 ]

const multiply = (...args) => args.reduce((total, value) => total * value,1)

const sum = (...rest) => {
    return multiply(...rest)
}
console.log(sum(1,2,3,4))
//24

//SPREAD EM STRINGS
const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);
// [ 'D',
//   'i',
//   'g',
//   'i',
//   't',
//   'a',
//   'l',
//   ' ',
//   'I',
//   'n',
//   'n',
//   'o',
//   'v',
//   'a',
//   't',
//   'i',
//   'o',
//   'n',
//   ' ',
//   'O',
//   'n',
//   'e' ]

//SPREAD EM ARRAYS
const arr = [1,2,3,4];

logArgs(...arr);
//[ 1, 2, 3, 4 ]
const arr2 = [...arr, 5, 6,7]

console.log(arr2)
//[] 1, 2, 3, 4, 5, 6, 7 ]

//SPREAD em OBJETOS LITERAIS
//só pode usar spread em objetos para construir outros objetos
const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 321
}

console.log(obj2)
//{ test: 123, test2: 321 }


//SHALLOW CLONE SPREAD OPERATOR - 
const obj1 = {
    teste2: 456,
    subObj: {
        test:456
    }
};

const obj2 = {...obj1};
obj2.subObj.test = 123;
console.log(obj1);
//O subobjeto do obj2 ainda aponta para o obj1
//{ teste2: 456, subObj: { test: 123 } }
// para evitar este problema devemos clonar o subObj:
const obj3 = {...obj1, subObj: {...obj1.subObj}}
obj3.subObj.test = 456;
console.log(obj1);
//Após alterar o subObj do obj3, o subObj do obj1 permanece inalterado
//{ teste2: 456, subObj: { test: 123 } }
console.log(obj3);
//{ teste2: 456, subObj: { test: 456 } }


//Destructuring

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

//forma antiga

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Destructuring Assignment
// Importante, quando trabalhar com nested arrays é que devemos assinalar todos os índices do array

var [apple2, banana2, orange2,[tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(tomato,'::', tomato2)
//Tomato :: Tomato

//DESTRUTCTURING EM OBJETOS

var obj = {
    name: 'Gustavo',
    props: {
        age: 33,
        favoriteColors: ['blue', 'green']
    }
};

var objArray = [{name: 'apple', type: 'fruit'}, {name:'Gustavo', type: 'person'}]
var {name} = obj;
var {name: name2} = obj;

var {props:{age}} = obj;
var [{type: type1}, {type: type2}] = objArray;
console.log(name, '::', name2,'::', type1);


//FUNCTIONS

function sum([a,b]= [0,0]) {
    return  a+b;
}

console.log(sum());
//0
console.log(sum(5,5));
//10
function sum({a, b}= [0,0]) {
    return  a + b;
}
console.log(sum({a: 5, b: 5}));
//10

//SYMBOLS

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');
console.log(uniqueId === uniqueId2);
//false

const uniqueId = Symbol('Hello');
let obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);
//{ [Symbol(Hello)]: 'Hello' }
console.log(Object.keys(obj));
//[]
console.log(Object.getOwnPropertySymbols(obj));
//[ Symbol(Hello) ]


// Well Known Symbols

Symbol.iterator
Symbol.split
Symbol.asyncIterator
Symbol.toStringTag

const arr = [1,2,3,4];

const it = arr[Symbol.iterator]();

console.log(it.next());
//{ value: 1, done: false }
console.log(it.next());
//{ value: 2, done: false }
console.log(it.next());
//{ value: 3, done: false }
console.log(it.next());
// /{ value: 4, done: false }
console.log(it.next());
//{ value: undefined, done: true }

for(let value of arr) {
    console.log(value)
}

//Transformar um objeto em um objeto iterável

const obj = {
    values: [1,2,3,4],
    [Symbol.iterator]() {
        let i = 0

        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
};


const obj = {
    values: [1,2,3,4],
};
for (const iterator of obj) {
    console.log(iterator);
};

// for (const iterator of obj) {
//     ^

// TypeError: obj is not iterable

// 1
// 2
// 3
// 4

//GENERATORS

function* hello() {
    console.log('Hello');
    yield 1
    console.log('from');
    yield 2
    console.log('Function');
    yield 3
    const value = yield 4
    console.log(value)
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next('Value from Outside!'));
// Hello
// { value: 1, done: false }
// from
// { value: 2, done: false }
// Function
// { value: 3, done: false }
// { value: 4, done: false }
// Value from Outside!
// { value: undefined, done: true }

//Transformando um objeto em iterável usando generators:
const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator]() {
        for (i = 0; i < this.values.length; i++) {
            yield this.values[i]
        }
    }
};

for (const value of obj) {
    console.log(value)
};

//Callbacks e Promisses

function doSomething(callback) {
    setTimeout(function () {
        // did something
        callback('First data');
    }, 1000);
};

function doSomethingElse(callback) {
    setTimeout(function () {
        // did something else
        callback('Second data');
    }, 1000);
};

function doAll() {
    try {
        doSomething(function(data) {
            var processData = data.split('');
            try {
                doSomethingElse(function(data2) {
                    var processData2 = data2.split('');
                    try {
                        setTimeout(function() {
                            console.log(processData, processData2)
                        },1000);
                    } catch (error) {
                        //handle error
                    };
                });
            } catch (error) {
                //handle error
            };
        });
    } catch (error) {
        //handle error
    };
};

doAll()

//PROMISSES


const doSomethingPromise = () => new Promise((resolve, reject)=> {
    setTimeout(function () {
        // did something
        resolve('First data');
    }, 1500);
});

const doSomethingElsePromise = () => new Promise((resolve, reject)=> {
    setTimeout(function () {
        // did something Eslse
        resolve('Second data');
    }, 1000);
});

doSomethingPromise().then(data => {
    console.log(data.split(''));
    return doSomethingElsePromise();
})
.then(data2 => {
    console.log(data2.split(''));
})
.catch(error => console.log('ops ::', error));
// [ 'F', 'i', 'r', 's', 't', ' ', 'd', 'a', 't', 'a' ]
// [ 'S', 'e', 'c', 'o', 'n', 'd', ' ', 'd', 'a', 't', 'a' ]


// Promisse.all - Executar Promisses em paralelo:
Promise.all([doSomethingPromise(), doSomethingElsePromise()])
.then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
})
//[ 'F', 'i', 'r', 's', 't', ' ', 'd', 'a', 't', 'a' ]
//[ 'S', 'e', 'c', 'o', 'n', 'd', ' ', 'd', 'a', 't', 'a' ]


// Promise.race - Retorna somente a Promise que será resolvida primeiro:

Promise.race([doSomethingPromise(), doSomethingElsePromise()])
.then(data => {
    console.log(data.split(''));
})
//[ 'S', 'e', 'c', 'o', 'n', 'd', ' ', 'd', 'a', 't', 'a' ]

//FETCH

fetch('./data2.json').then(responseStream => {
        if(responseStream.status === 200) {
            return responseStream.json();
        } else {
            throw new Error('Request Error')
        }
    }
)
.then(data => console.log(data))
.catch(err => console.log('Error :: ', err));

// O catch do fetch somente vai retornar erro de rede


//ASYNC AWAIT
const asyncTimePromise = () => new Promise((resolve, reject)=> {
    setTimeout(function () {
        resolve('Promise Resolved');
    }, 1000);
});

const returnAsync = async () => {
    const data = await asyncTimePromise();
    const dataJSON = await fetch('./data.json').then(responseStream => {
            if(responseStream.status === 200) {
                return responseStream.json();
            } else {
                throw new Error('Request Error')
            }
        }
    )
    return [data, dataJSON]
};

returnAsync().then(data => {
    console.log(data[0]);
    console.log(data[1]);
})

const { pseudoRandomBytes } = require('crypto');
// Promise Resolved debugger eval code:21:13
// Object { data: [1,2,3,4] }

//EVENT EMITTER

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) { setTimeout(() => {
        this.emit('User logged', data)
    }, 1000)
    }
}

const users = new Users();

users.on('User logged', data => console.log(data));

users.userLogged({user: 'gustavovs88'});
// { user: 'gustavovs88' }

// Exceções

class CustomError extends Error {
    constructor({message, data}) {
        super(message),
        this.data = data
    }
}

let names = ['Huguinho', 'Zezinho', 'Luizinho' ]


try {
    let name = 'Gustavo'
    console.log(names[name])
    if (names[name] === undefined) {
        throw new CustomError({
            message: 'This person is not in our archives',
            data: {
                type: 'form error'
            }
    });
}
} catch (error) {
    alert(`An error ocurred :: ${error.message}`);
    console.log(error)
} finally {
    console.log('this log will happen if there is or there is not an error')
}
console.log('continue javascript code....')
// { Error: This person is not in our archives
//     at Object.<anonymous> (/home/gustavo/Projetos/DIO/bootcamp_eduzz/dio-desafio-github-primeiro-projeto/Desenvolvimento_avancado_com_javascript_ES6/tempCodeRunnerFile.js:15:15)
// data: { type: 'form error' } }
// this log will happen if there is or there is not an error
// continue javascript code....