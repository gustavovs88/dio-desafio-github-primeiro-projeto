# Typescript

[Typescript](https://www.typescriptlang.org/) é um superset do Javascript que permite a tipagem de dados.

## Tutorial para iniciar o projeto:

1. Iniciar o projeto:

```bash
npm init
```

2. Instalar o parcel bundle:

```bash
npm i parcel-bundler
```

3. Criar os arquivos index.ts e index.html na raiz do projeto;
4. incluir no package.json, o start conforme abaixo:

```json
"scripts": {
    "start": "parcel index.html",
    "test": "test"
  },
```

5. Rodar o comando `npm run start` no terminal;

**DICA** instalar o comando gitignore globalmente para possibilitar a criação do arquivo .gitignore ignorando os arquivos node ao comitar um repositório:

```bash
npm install -g gitignore-command
```

```bash
gitignore node
```



**OBS** Rodar o comando `tsc index.ts` na raíz do projeto para compilar o código javascript (caso não esteja usando um bundler - neste exemplo estamos usando o parcel) - `sudo apt install node-typescript`



6. Rodar o comando `tsc --init`no terminal para gerar o arquivo tsconfig.json;

Ao criar o projeto com o typescript com o tutorual acima no VScode, temos um erro no código apresentado na função abaixo:

```typescript
function soma(a:number, b:number) {
    return a + b;
};

soma('1', 'b');
```

- Neste caso tipamos os argumentos da função `soma()`como ***numbers*** porém ao invocar a função utilizamos os parametros do tipo ***string***.

### Types

 Tudo que é feito com o Type pode ser feito com interfaces. Porém este é usado mais para juntar diferentes interfaces (usando os operadores condicionais & ou |):

```typescript
interface IFelino extends IAnimal {
    visaoNoturna: boolean,
    executarRugido(intensidadeEmDecibeis: number): void
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'médio' | 'grande';
}

type IDomestico = IFelino | ICanino
```

### Interfaces

[Interfaces](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces) permitem tipar os objetos ou seja, definir contratos de estruturas de dados e de classes:

```typescript
interface IAnimal {
    nome: string,
    tipo: 'aquatico' | 'terrestre'
    
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean,
    executarRugido(intensidadeEmDecibeis: number): void
}

const equino:IAnimal = {
    nome: 'Cavalo',
    tipo: 'terrestre'
}

const felino:IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: (intensidadeEmDecibeis) => {`${intensidadeEmDecibeis} db`}
}
```

### Tratando a tag input

Segue exemplo de código typescript utilizando a tag input do HTML:



```typescript
const input = document.getElementById('inputText') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
} );
```





### Generic Types

O [tipo genérico](https://www.typescriptlang.org/docs/handbook/2/generics.html) é utilizado quando não sabemos quais tipos de dados iremos receber, a sintaxe padrão é usar o diamante com um tê maiúsculo dentro "<T>" ou tuilizando o tipo `any`:



```typescript
function preencherLista<T>(array:any[], value: T) {
    return array.map(item => item + value)
}

preencherLista([1,2,3], 1)
```



###  Desenvolvendo condicionais a partir de parâmetros

```typescript

interface IUsuario {
    id: string;
    email: string;
};

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
};

function redirecione(usuario: IUsuario | IAdmin) {
    if('cargo' in usuario) {
        // Redireciona para o setor interno
    } else {
        // Redireciona para 
    }
}
```



### Utilizando o caracter "?" para variáveis opcionais

O ponto de interrogação pode ser utilizado para uma interface de forma a tornar aquele item opcional em um conjunto de dados.

```typescript
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionário';
};


function redirecione(usuario: IUsuario) {
    if(usuario.cargo) {
        // Redireciona usuario.cargo
    } else {
        // Redireciona para área de usuário externo
    }
}
```



### Criando variáveis com propriedade readonly e private

```typescript
interface ICachorro {
    readonly nome: string;
    idade: number;
    parqueFavorito?: string;
}
//itera sobre a interface e remove o item opcional - esta parte do código apresentada na aula não causa erros de readonly, é necessário implementar o readonly na declaração da classe conforme código abaixo
type iCachorroSomenteLeitura = {
    +readonly [K in keyof ICachorro]-?: ICachorro[K]
}

class MeuCachorro implements iCachorroSomenteLeitura {
    readonly idade: number;
    nome;
    parqueFavorito;

    constructor(nome, idade, parqueFavorito) {
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parqueFavorito;

    }
}

const myDog:ICachorro = {
    nome: 'dog',
    idade: 15
}

//myDog.nome = ''; - geraria um erro no VSCODE pois a propriedade é readonly

const cao = new MeuCachorro('Apolo', 14, 'Parcão');
//cao.idade = 'dafa'; - geraria um erro no VSCODE pois a propriedade é readonly
```



### Como importar bibliotecas com typescript

- Gerar um arquivo typings.d.ts

- Incluir as interfaces neste arquivo:

```typescript
interface JQuery {
    novaFuncao(): void
}
```

- O typescript estará apto a ser utilizado no código com a biblioteca importada - Ao importar o jquery, o parcel automaticamente instala a biblioteca jquery nas dependências do projeto, porém isso ocasiona um erro no VScode que sugere a importação do TS para o Jquery (`npm i --save-dev @types/jquery`). Caso a interface não tenha sido incluida no arquivo typings.d.ts, o VScode irá informar um erro para a `novaFuncao`pois esta não possui um tipo definido.

```typescript
import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('chamou nova função');
        
    }
});
    
$('body').novaFuncao();
```

### Exemplo de como usar Omit

O omit omite uma propriedade de uma interface já criada, no exemplo abaixo foi omitida a propriedade `'nacionalidade'` da interface `IPessoa`:



```typescript
interface IPessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface IBrasileiro extends Omit<IPessoa, 'nacionalidade'> {

}

const brasileiro: IBrasileiro = {
    nome: 'Gustavo',
    idade: 33,
}
```

