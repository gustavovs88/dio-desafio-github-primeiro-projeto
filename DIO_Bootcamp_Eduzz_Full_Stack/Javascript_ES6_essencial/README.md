# Javascript ES6 essencial

O javascript foi lançado em setembro de 1995. Criada por Brendan Eich.

- ECMAScript - Padronização da linguagem.
- TC39 - Os reguladores dos padrões, que propôem e implementam alterações na linguagem.
- A última implementação é ES2018.
- Babel - transpilador de código para que o javascript escrito em versões mais recentes possa utilizado em versões mais antigas de navegadores.

## Conceitos do Javascript

- É uma linguagem interpretada.
- Tipagem fraca e dinâmica.
- [Typescript](https://www.typescriptlang.org/) e [Flow](https://flow.org/) - Superset de javascript, adicionam tipagem ao Javascriptflo

- Função de primeira classe e ordem maior - Uma função pode usar outra função como argumento.
- [Closure](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures) - Um *closure* (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.

- [Curryng](https://rodrigorgs.github.io/aulas/mata56/aula14-currying) - **Currying** é o processo de transformar uma função que  espera vários argumentos em uma função que espera um único argumento e  retorna outra função *curried*.

- [Hoisting](https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting) - Permite usar uma função antes de declara-la. Para variáveis retorna undefined caso seja declarada antes de atribuir algum valor a ela.
- [Imutabilidade](https://www.ti-enxame.com/pt/javascript/por-que-imutabilidade-e-tao-importante-ou-necessaria-em-javascript/823156051/) - significa que a mudança não é  feita no mesmo objeto, estrutura, mas a mudança é representada em um  novo. E isso porque a referência representa o valor não apenas do  ponteiro da memória. Cada mudança cria um novo valor e não toca no antigo.

## Tipos e Variáveis

### Variáveis

Temos 3 tipos de variáveis:

- var - variável de escopo global e de função
- let - variável de escopo de bloco
- const - constante de escopo de bloco. É possivel alterar valores de objetos armazenados em uma constante.

Após a introdução do let e const foi implementado o escopo de bloco, antes existiam somente o escopo de global e de função.

### Tipos

- [string](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String) - representa um texto
- [number](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number) - representa números
- boolean - Valor booleano true ou false
- [null](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/null) - representa um valor vazio, ex.: que aponta para um objeto não existente
- [undefined](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/undefined) - representa um valor indefinido. Uma variável sem valor atribuído é do tipo undefined.
- [symbol](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol) - ao ser criado, o símbolo é único. Um símbolo pode ser usado como o identificador para propriedades de objetos. 
- [Object](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object) - objetos armazenam dados na forma de chave/valor.
- [Function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function) - Funções também são objetos. Em [Arrow function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions), *this* representa o escopo de função, já nas funções "normais", o this vai representar o escopo de onde a função foi chamada.
- [Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array) - Também é um objeto.

## Operadores

O Javascript possui operadores unários (++, typeof, delete), binários (+, in) ou ternários (valor ? 1_se_sim : 2_se_não).

- Aritméticos 
- Atribuição
- Comparação
- Condicional
- Lógico
- Spread

## Estruturas condicionais e de repetição

- if / else /elseif
- [switch / case](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)
- for
- while
- do...while
- for...in / for...of
- break - quebra o looping
- continue - pula uma iteração 

## Orientação a objetos

[POO](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object-oriented_JS) - programação orientada a objetos com javascript.

- Classes
- Modificadores de acesso - controle do que é privado e do que é público na minha classe. # é o modificador de acesso no node 12. ver código ex.
- Encapsulamento - oculta detalhes do funcionamento interno
- [Static](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/static) - permite acessar métodos/atributos sem instanciar uma classe.
- Exemplo:

```javascript
class Animal() {
    #name = '';
    static walk() {
        console.log('walking....')
    }
    constructor(name) {
        this.#name = name;
    }
    get name() {
        return this.#name
    }
    set name(name) {
        this.#name = name;
    }
}
```

- No exemplo acima a variável #name é um elemento privado, os métodos get e set estão na forma encapsulada e com um método estático walk.

## Design Patterns

[Padrões de projeto](https://pt.wikipedia.org/wiki/Padr%C3%A3o_de_projeto_de_software) são soluções generalistas para problemas recorrentes durante o desenvolvimento de softwares.

### Histórico:

- A Pattern Language (1978), Cristopher Alexander, Sara Ishikawa e Murray Silverstein. Definiu o formato de um pattern.

- Using Pattern Languages for Object-Oriented Programs (1987), Kent Beck e Ward Cunningham. Definiram 5 padrões de projetos.
- Design Patterns: Elements of Reusable Object-Oriented Software (1994), Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides (Gang od Four - GoF). Categorizam os patterns em 3 tipos - Criação, Estruturais e Comportamentais.

### Exemplos

- [Factory](https://pt.wikipedia.org/wiki/Abstract_Factory) - Este padrão permite a criação de famílias de objetos relacionados ou dependentes por meio de uma única [interface](https://pt.wikipedia.org/wiki/Interface_(ciência_da_computação)) e sem que a [classe concreta](https://pt.wikipedia.org/wiki/Classe_(programação)) seja especificada.

```javascript
function FakeUser(name, customProperties) {
    return {
        name,
        lastName: 'Veloso da Silveira',
        ...customProperties
    }
}

const user = FakeUser('Gustavo', {age: 33});
console.log(user);
```

- [Singleton](https://pt.wikipedia.org/wiki/Singleton) - Este padrão garante a existência de apenas uma instância de uma [classe](https://pt.wikipedia.org/wiki/Classe_(programação)), mantendo um ponto global de acesso ao seu [objeto](https://pt.wikipedia.org/wiki/Objeto_(programação)). jQuery utiliza este padrão.

```javascript
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
```

- [Decorator](https://pt.wikipedia.org/wiki/Decorator) - Atualmente em proposta na TC39, porém é possível [utiliza-lo com Typescript](https://www.typescriptlang.org/docs/handbook/decorators.html). É um padrão de projeto que permite adicionar um comportamento a um objeto já existente em tempo de execução, ou seja, agrega dinamicamente responsabilidades adicionais a um objeto. Abaixo exemplo de *class decorator* usando com typescript.

```typescript
//construindo o decorador
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

//utilizando o decorador @sealed para selar a classe BugReport.
@sealed
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}
```

- [Observer](https://pt.wikipedia.org/wiki/Observer) - define uma dependência *um-para-muitos* entre objetos de modo que quando um [objeto](https://pt.wikipedia.org/wiki/Objeto) muda o estado, todos seus dependentes são notificados e atualizados automaticamente. 

```javascript
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
```



- Module - possibilita organizarmos melhor nosso código, sem a necessidade de expor variáveis globais.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
}

export default Person

//no arquivo que iremos usar o módulo podemos importa-lo:

import Person from '.models/person'
```



## Manipulação e Iteração de Arrays

Arrays são listas que podem armazenar dados de diferentes tipos.



### Criação de arrays

- `const myArray = ['eu', 'tu', 'ele'];`
- `const myArray = Array.of('eu', 'tu', 'ele');`

- `const myArray = Array('eu', 'tu', 'ele');`se utilizar este método com somente um argumento de número, será criado um array 'vazio' com *n* posições - `const myArray = Array(3);`- cria um array de 3 posições  de valor *undefined*.
- Array.from - Cria uma nova instância de array a partir de um parâmetro array-like ou iterable object. ex.:

```javascript
const divs = document.querySelectorAll('div');
consr arr = Array.from(divs);
```



### Manipulação de Arrays

- push - adiciona um item ao array no fim do mesmo e retorna o tamanho (*length*) do array.
- pop - remove o último elemento do array e retorna o elemento removido.
- unshift - adiciona um item no inicio do array e retorna o tamanho (*length*) do array.
- shift - remove o primeiro item do array e retorna este item.
- concat - concatena 2 ou mais arrays e retorna um novo array concatenado.
- slice - retorna um novo array "fatiando" o array de acordo com o início e o fim.

```javascript
const frutas = ['pera', 'uva', 'maçã', 'banana'];

// retorna o novo array da posição 0 até a posição 2(não inlcuindo a mesma)
const frutasCaloricas = frutas.slice(0,2);
// retorna o novo array com as 3 últimas posições
const frutasDoces = frutas.slice(-3);
console.log(`Frutas calóricas`, frutasCaloricas);
console.log(`Frutas doces`, frutasDoces);
```

- splice - altera o array  removendo e adicionando itens.  `Array.splice(posição inicial, qtd de itens removidos, item a ser adicionado)`.

### Iteração de Arrays

- forEach - iteração de cada item dentro de um array. Somente executa a operação, não altera o array. Aceita os argumentos valor, índice e array.

```javascript
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
```

- map - retorna um novo array, de mesmo tamanho, iterando cada item de um array.

```javascript
const frutas2 = frutas.map((fruta, index) => {
    return `${fruta}, índice ${index}`
})
```

- flat - Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth - argumento da função flat - default = 1).

```javascript
const array1 = [1,2,3,[4,5,6]];

const array2 = array1.flat();
console.log(array2);
//[1,2,3,4,5,6]
```

- flatMap - retorna um novo array assim como o map e executa um flat de profundidade 1.

```javascript
const array = [1,2,3,4]
const array3 = array.flatMap(value => [[value*2]]);
console.log(array3);
//[[1],[2],[3],[4]]
```



- keys - retorna um Array iterator que contém as chaves para cada elemento do array.

```javascript
const array = [1,2,3,4]
const arrayIterator = array.keys()

array.forEach(value => console.log(arrayIterator.next()))
// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
```

- values - retorna um Array iterator que contém os valores para cada elemento do array.

```javascript
const array = [1,2,3,4]
const arrayIterator = array.values()

array.forEach(value => console.log(arrayIterator.next()))
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
```

- entries - retorna um Array iterator que contém os pares chave/valor para cada elemento do array.

```javascript
const array = [1,2,3,4];
const arrayIterator = array.entries();

array.forEach(value => console.log(arrayIterator.next()));
// { value: [ 0, 1 ], done: false }
// { value: [ 1, 2 ], done: false }
// { value: [ 2, 3 ], done: false }
// { value: [ 3, 4 ], done: false }
```

- find - retorna o primeiro item que satisfaz uma determinada condição.

```javascript
const array = [1,2,3,4];
const findGreaterThanTwo = array.find(value => value>2);
console.log(findGreaterThanTwo);
//3
```

- findIndex - retorna o índice do primeiro item de um array que satisfaz uma determinada condição.

```javascript
const array = [1,2,3,4];
const findGreaterThanTwoIndex = array.findIndex(value => value>2);
console.log(findGreaterThanTwoIndex);
//2
```

- filter - retorna um novo array com todos os elementos que satisfazem uma determinada condição.

```javascript
const array = [1,2,3,4];
const allValuesGreaterThanTwo = array.filter(value => value>2);
console.log(allValuesGreaterThanTwo);
// [ 3, 4 ]
```

- indexOf - retorna o primeiro índice em que um elemento pode ser encontrado em um array.

```javascript
const array = [1,2,3,3,4,3,4];

const firstIndexOfThree = array.indexOf(3);
console.log(firstIndexOfThree);
//2
```

- lastIndexOf - retorna  o último índice em que um elemento pode ser encontrado em um array.

```javascript
const array = [1,2,3,3,4,3,4];

const firstIndexOfThree = array.lastIndexOf(3);
console.log(firstIndexOfThree);
//5
```

- includes - retorna um booleano verificando se determinado elemento existe no array

```javascript
const array = [1,2,3,3,4,3,4];

const hasItem3 = array.includes(3);
console.log(hasItem3);
//true
const hasItem5 = array.includes(5);
console.log(hasItem5);
//false
```

- some - retorna booleano se pelo menos um item de um array satisfaz determinada condição.

```javascript
const array = [1,2,3,3,4,3,4];

const hasSomeEvenNumber = array.some(item => item%2 === 0);
console.log(hasSomeEvenNumber);
//true
```

- every  - retorna booleano se todos os itens de um array satisfazem determinada condição.

```javascript
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
```

- sort - ordena elementos de um array de acordo com uma condição - recebe como argumentos o item corrente (current) e o próximo item (next). é esperado retornar um valor negativo se o primeiro argumento é menor do que o segundo argumento, zero se forem iguais e positivo se maior. Se omitido, os elementos são retornados em ordem crescente segundo a ordem de caracteres ASCII.

```javascript
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
```

- reverse - inverte a ordem dos elementos do array

```javascript
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
```

### Transformar arrays em outros tipos de dados

- join  - junta todos os elementos de um array, separados por um delimitador e retorna uma string.

```javascript
const array = [1,2,3,3,4,3,4];
console.log(array.join('$'));
//1$2$3$3$4$3$4
```

- reduce - retorna um novo tipo de dado iterando cada posição de um array. o primeiro argumento é o que deve ser retornado

```javascript
const array = [1,2,3,3,4,3,4];
const arrayTotalSum = array.reduce((total,value) => total += value, 0);
console.log(arrayTotalSum);
//20
```



