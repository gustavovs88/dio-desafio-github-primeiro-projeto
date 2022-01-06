console.log('typescript');

function soma(a: number, b: number) {
    return a + b;
};

soma(2, 3);

interface IAnimal {
    nome: string,
    tipo: 'aquatico' | 'terrestre'
    domestico: boolean
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean,
    executarRugido(intensidadeEmDecibeis: number): void
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'médio' | 'grande';
}

type IDomestico = IFelino | ICanino

const equino:IAnimal = {
    nome: 'Cavalo',
    tipo: 'terrestre',
    domestico: false
}

const felino:IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    domestico: false,
    executarRugido: (intensidadeEmDecibeis) => {`${intensidadeEmDecibeis} db`}
}

const canino: IDomestico = {
    nome: 'cachorro',
    tipo: 'terrestre',
    domestico: true,
    visaoNoturna: false,
    porte: 'pequeno'

}


// TRATANDO A TAG INPUT

const input = document.getElementById('inputText') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
} );

// GENERIC TYPES

function preencherLista<T>(array:any[], value: T) {
    return array.map(item => item + value)
}

preencherLista([1,2,3], 1)


// Desenvolvendo condicionais a partir de parâmetros
// Utilizando o caracter "?" para variáveis opcionais

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


//Criando variáveis com propriedade readonly e private

interface ICachorro {
    readonly nome: string;
    idade: number;
    parqueFavorito?: string;
}

type iCachorroSomenteLeitura = {
    +readonly [K in keyof ICachorro]-?: ICachorro[K]
}

class MeuCachorro implements iCachorroSomenteLeitura {
    readonly idade: number;
    nome;
    parqueFavorito;

    constructor(nome:string, idade:number, parqueFavorito:string) {
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

import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('chamou nova função');
        
    }
});

$('body').novaFuncao();

//Exemplo de como usar Omit e conclusão do curso

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