

## Arrow Functions

- Sintaxe:

```javascript
const myFunction1 = value => console.log(value);

const myFunction2 = (value1, value2) => console.log(value1 + value2);

const myFunction3 = (value1, value2) => {
    let value3 = value1 + value2;
    console.log(value3);
}
```



- função anônima - atribuida a uma variável ou como argumento de outra função
- sempre que houver um statement, é necessário incluir as chaves após o "arrow".
- se houver apenas um argumento na função é possível omitir os parênteses para confinar os argumentos.
- para retornar um objeto literal é necessário colocar as chaves do objeto entre parênteses.
- não é possível utilizar arrow function para função construtora.
- ao contrário das funções clássicas, arrow function não possui a característica de *hoisting*.
- o javascript possui contexto de função.  Algumas funções nativas como event-listeners e setTimeout possuem contexto global. As arrow functions trazem o contexto destas funções para dentro das chaves  ex.:
  - A função abaixo retorna o log do contexto global Window da função setTimeout e logo após o  *TypeError: this.log is not a function* devido o contexto da função setTimeout ser global e não da função showContext.

```javascript
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


```

- Ao utilizar arrow functions não temos mais este erro:

```javascript
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
```

## Default Function Arguments

- Utilizando valores padrão para os argumentos da função:

```javascript
function multiply(a, b = 1) {
	return a * b
}
console.log(multiply(5))
//5
```

- não é possível referenciar um parãmetro antes dele ser definido ex.;

```javascript
function multiply(b = a, a) {
	return a * b
}
console.log(multiply(5))
//NaN

// Dessa forma funcionária:
function multiply(a, b = a) {
	return a * b
}
console.log(multiply(5))
//25
```



### Lazy Evaluation

- Garante que a função argumento seja invocada somente quando não for inserido o segundo parâmetro ao invocar a função. ex.:

```javascript
const randomNumber = () => {
    console.log('returning a random number...')
    return Math.random()*10
}
function multiply(a, b = randomNumber()) {
	return a * b
}
console.log(multiply(5))
console.log(multiply(5))
// returning a random number...
// 8.227761809539015
// returning a random number...
// 13.726243002895567
```

### 	Enhanced Object Literals

- Shorthands ES6:
  - Omitir declaração do valor do objeto caso a chave seja igual à variável que define o valor

```javascript

var obj1 = 'My Object';

const obj = {
    obj1
}

console.log(obj);
//{ obj1: 'My Object' }
```

- Ao atribuir um método podemos omitir a chave e utilizar uma função anônima.

```javascript
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
```

- propriedade concatenada inserida diretamente no objeto literal:

```javascript

var propName = 'my object'
const obj = {
    [propName + ' literal']: 'My object literal value'
}
console.log(obj);
//{ 'my object literal': 'My object literal value' }
```



## Rest e Spread Operator e Destructuring

- [rest operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters) - três  pontos (...) no campo de argumento da função nos permite representar um número indefinido de argumentos como um array. É possível manipular os argumentos com métodos de array.

```javascript
const sum = (...args) => {
    return args.reduce((total, value) => total + value,0)
}
console.log(sum(1,2,3,4))
//10
```

Usando o [spread operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax), permite que um objeto iterável, como uma expressão de array ou uma  string seja expandido para ser usado onde zero ou mais argumentos (para  chamadas de funções) ou elementos (para arrays *literais*) são esperados. O spread operator pode ser utilizados em *strings, arrays, objetos literais e objetos iteráveis*  :

```javascript
const multiply = (...args) => args.reduce((total, value) => total * value,1)

const sum = (...rest) => {
    return multiply(...rest)
}
console.log(sum(1,2,3,4))
//24
```

Exemplos de spread operator com strings, arrays e objetos:

```javascript
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
```

## Destructuring

- Exemplos de destructuring:

```javascript
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
```

### Symbols

Symbols são identificadores únicos.

```javascript
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');
console.log(uniqueId === uniqueId2);
//false
```

- Transformando um objeto em iterável:

```javascript
//Ao tentar iterar sobre um objeto recebemos o seguinte erro:
const obj = {
    values: [1,2,3,4],
};
for (const iterator of obj) {
    console.log(iterator);
};
// for (const iterator of obj) {
//     ^

// TypeError: obj is not iterable

//Com a propriedade Symbol.iterator conseguimos transformar um objeto em iterável:
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

for (const item of obj) {
    console.log(item);
};
// 1
// 2
// 3
// 4

```

### Generators

Um [gerador](https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript-pt) é um processo que pode ser pausado e retomado e gerar vários valores. Um gerador no **JavaScript** consiste em uma função gerador, que retorna um objeto iterável **Generator**.

```javascript
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
```

Utilizanto Symbol.iterator e Generators para transformar um objetp em iterável:

```javascript
const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator]() {
        for (i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (const value of obj) {
    console.log(value);
};
```

### Callbacks e Promises

Uma *[função callback](https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function)* é uma função passada a outra função como argumento,  que é então invocado dentro da função externa para completar algum tipo  de rotina ou ação.

Uma *[Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)* é um objeto usado para processamento assíncrono. Um *Promise* (*de "promessa"*) representa um valor que pode estar disponível agora, no futuro ou nunca.

```javascript
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
```



### Fetch

 A [API fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)   fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas de uma maneira fácil e lógica que permite buscar recursos de forma assíncrona através da rede.

```javascript
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
```

### Async / Await

A declaração *[async function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function)* define uma *função assíncrona*, que retorna um objeto [*AsyncFunction*](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction).

```javascript
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
```



Note que no exemplo acima não tem a instrução `await` na instrução do `return`, porque o valor retornado de uma função `async` é implícitamente passado por um [`Promise.resolve`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve).



### EventEmitter

 [EventEmitter](https://nodejs.dev/learn/the-nodejs-event-emitter) é uma classe que proporsciona uma forma de gerenciar eventos no backend com  Node.js

- Tem, entre outros,  os métodos `on` e `emit`
  - `on ` é usado para acionar um evento
  - `emit` é usado para adicionar uma função callback que será executada quando o evento é acionado.
- É uma forma de trabalhar com eventos assíncronos

No exemplo abaixo, a classe `EventEmitter`, nativa do módulo `events` do *Node.js* foi extendida para a inclusão da classe `Users`, com a criação do método assíncrono`userLogged` . 



```javascript
const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) { setTimeout(() => {
        this.emit('User logged', data);
    }, 1000)
    }
}

const users = new Users();

users.on('User logged', data => console.log(data));

users.userLogged({user: 'gustavovs88'});
// { user: 'gustavovs88' }
```



## Testes

- Testes automatizados
  - Testes unitários
  - Testes integrados
  - Testes funcionais

- Testes manuais e automatizados
  - Testes de usabilidade
  - testes de aceitação do usuário
  - protótipos
  - testes funcionais
  - exemplos
  - alpha e beta
  - mais....
- Ferramentas de teste
  - Teste de carga e performance
  - Testes de segurança
  - mais...

### TDD (Test Driven Development)

[**Test Driven Development** (TDD)](https://pt.wikipedia.org/wiki/Test-driven_development) ou em português **Desenvolvimento guiado por testes** é uma técnica de [desenvolvimento de software](https://pt.wikipedia.org/wiki/Desenvolvimento_de_software) que se relaciona com o conceito de [verificação e validação](https://pt.wikipedia.org/wiki/Verificação_e_validação) e se baseia em um ciclo curto de repetições: Primeiramente o desenvolvedor escreve um [caso de teste](https://pt.wikipedia.org/wiki/Caso_de_teste) automatizado que define uma melhoria desejada ou uma nova funcionalidade. 

É um dos pilares do Extreme Programming, consiste em testar e refatorar em pequenos ciclos, onde você escreve o teste antes do código, faz o mesmo passar e refatora o código.

- Vantagens: 
  - Feedback rápido;
  - Maior segurança em alterações e novas funcionalidades;
  - Código mais limpo;
  - Produtividade

### BDD (Behavior Driven Development)

Técnica de desenvolvimento ágil que visa integrar regras de negócio com linguagens de programação.

- Pilares
  - Testes
  - Documentação
  - Exemplos
- Vantagens
  - Compartilhamento de conhecimento
  - Documentação Dinâmica
  - Visão do todo

### Mocha

```bash
npm init -y
```

```bash
npm i --save-dev mocha
```

Criar a pasta test na raiz do projeto, entrar na pasta e criar o arquivo math.spec.js:

```bash
mkdir test
cd test
touch math.spec.js
```

Alterar o script do package.json para incluir o mocha como tester:

```json
{
  "name": "Desenvolvimento_avancado_com_javascript_ES6",
  "version": "1.0.0",
  "description": "- Sintaxe:",
  "main": "index.js",
  "scripts": {
    "test": "mocha"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "mocha": "^9.1.3"
  }
}
```

Como exemplo faremos o teste de uma classe `Math` criada no arquivo ***math.js*** na pasta ***src* **que possui um método ***sum*** cujo objetivo é somar dois números. 

Seguindo a metodologia TDD, iremos primeiramente escrever o nosso teste do método da classe no arquivo math.spec.js:

```javascript
const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function () {
    it('Sum two numbers', function () {
        const math = new Math();
        assert.equal(math.sum(5,5), 10);
    });
});
```

Para criar as pastas e arquivos,  no nosso terminal,  vamos retornar à pasta raiz do projeto, criar nossa pasta src, entrar na pasta src e criar nosso arquivo math.js

```bash
cd ..
mkdir src
cd src
touch math.js
```

No arquivo ***math.js*** iremos criar a nossa classe ***Math*** e o método ***sum***:

```javascript
class Math {
    sum(x,y) {
        return x + y
    }
}

module.exports = Math;
```

Para rodar o teste, devemos retornar à pasta raiz do nosso projeto e rodar o comando no terminal:

```bash
 npm run test
```

Os resultados do teste serão informados no terminal. Após o teste ter passado, é importante verificar se o código pode ser refatorado para uma melhor qualidade do mesmo.



Caso apliquemos o mesmo teste em uma método assíncrono, teremos um falso resultado "pass".

```javascript
class Math {
    sum(x,y, callback) {
        setTimeout(() => {
            callback(x+y)
        },1000)
    }
}

module.exports = Math;
```

Para utilizar os testes com métodos assíncronos, devemos usar o parâmetro `done` na função segundo argumento da função `it`  e chama-lo após concluir o teste:

```javascript
const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function () {
    it('Sum two numbers', function (done) {
        const math = new Math();
        math.sum(5,5, (value) => {
            assert.equal(value, 10);
            done();
        })
    });
});
```

É recomedado usar ***function*** ao invés de ***arrow functions*** como parâmetros das funções ***mocha*** pois desta forma temos acesso ao escopo destas funções.

Por padrão o mocha possui um timeout limite de 2000 ms para o parâmetro done. Podemos alterar este limite atribuindo o parâmetro desejado de 3000 ms incluindo o código `this.timeout(3000)` dentro da função argumento da função ***it***:

```javascript
const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function () {
    it('Sum two numbers', function (done) {
        const math = new Math();
        this.timeout(3000);
        math.sum(5,5, (value) => {
            assert.equal(value, 15);
        })
    });
});
```

Rodar apenas um teste:

```javascript
it.only('Multiply two values', function(){
	const math = new Math();
	asset.equal(math.multiply(5,5), 25);
})
```

Pular o teste:

```javascript
it.skip('Multiply two values', function(){
	const math = new Math();
	asset.equal(math.multiply(5,5), 25);
})
```



***hooks*** - permitem alterar um valor antes de cada função ***it***. Isso possibilita que não precisemos incluir um valor ou instanciar uma classe a cada teste:

```javascript
const assert = require('assert');
const Math = require('../src/math.js');
let value = 0
describe('Math class', function () {

    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function (done) {
        const math = new Math();
        value = 5
        math.sum(value,5, (value) => {
            assert.equal(value, 10);
            done();
        })
    });

    it('Multiply two numbers', function() {
        const math = new Math();
        assert.equal(math.multiply(value,5), 0);
    })
});
```

## Chai

A biblioteca ***[chai](https://www.chaijs.com/)*** é uma biblioteca (lib) de asserts que permite uma forma mais descritiva de se realizar os nossos testes

- instalando o ***chai*** como dependência de desenvolvimento:

No terminal, navegar até a raiz do projeto e inserir a linha de comando:

```bash
npm i --save-dev chai
```

No caso do exemplo anterior, substituiríamos o assert das duas funções `it` da seguinte forma:

Importando a função expect do chai:

```javascript
const expect = require('chai').expect;
```

Utilizando o assert descritivo do chai:

```javascript
    it('Sum two numbers', function (done) {
        const math = new Math();
        value = 5
        math.sum(value,5, (value) => {
            expect(value).to.equal(10);
            done();
        })
    });
    
	it('Multiply two numbers', function() {
        const math = new Math();
        expect(math.multiply(value,5)).to.equal(0);
    })
```

### Sinon

A biblioteca ***[Sinon.JS](https://sinonjs.org/)*** que permite substituir partes complicadas de seu código que são difíceis de testar por “espaços reservados”, para que você possa manter seus testes de unidade rápidos e determinísticos.

- instalar ***sinon*** como dependência de desenvolvimento:

No terminal, navegar até a raiz do projeto e inserir a linha de comando:

```bash
npm i --save-dev sinon
```

importar o sinon no arquivo de testes:

```javascript
const sinon = require('sinon');
```

## Tratamento e Exceções

O tratamento de erros em javascript utiliza o bloco de funções `try / catch`. 

Quando o javascript encontra um erro no código, o restante do código não irá rodar. Aplicando o `try / catch` o código continuará rodando após encontrar o erro. Usando o `finally` após o bloco `catch` podemos incluir um código que será executado independente se haverá ou não um erro.

Podemos criar erros personalizados extendendo a classe `Error`, bem como acionar um erro com o comando `throw`:

```javascript
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
```

## Debugging



Alguns navegadores de uso comum ([como o firefox](https://developer.mozilla.org/pt-BR/docs/Tools/Debugger)) possuem ferramentas de inspeção de código (*dev tools*) que podem ser acessadas com a tecla `F12`do teclado. As *dev tools* nos ajudam a encontrar as falhas nos códigos.

Além disso o objeto ***[console](https://developer.mozilla.org/pt-BR/docs/Web/API/Console)*** fornece acesso ao console de debug do navegador (por exemplo, o [Web Console](https://developer.mozilla.org/en-US/docs/Tools/Web_Console) do Firefox). O seu funcionamento específico varia de navegador para  navegador, mas existe um conjunto de ferramentas que na prática são  fornecidas normalmente.







