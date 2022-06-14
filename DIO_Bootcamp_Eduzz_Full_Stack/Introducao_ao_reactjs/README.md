# Introdução ao ReactJS

[Link dos códigos da aula...](https://github.com/Tautorn/introduction-reactjs)

##  O que é ReactJS?

Uma biblioteca para criar interfaces para o usuário.

Criada em 2011 por Jordan Walke no Facebook.

Baseada no XHP, um framework para criação de HTML no php.

React é uma linguagem declarativa. OReact está preocupado apenas com o que é exibido na interface do usuário.

## Configuração

Temos algumas formas de configurar o projeto:

***React Create App***

***Task Runners e Bundler Sizers***

Nosso exemplo será com ***React Scripts***:

```bash
npm install --save react@16.8.6 react-dom@16.8.6 react-scripts@3.0.1
```

Criar a pasta ***public*** e a pasta ***src*** na raíz do projeto

Criar o arquivo ***index.html***  com uma `div` com `id = root`na pasta ***public***:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

Criar o arquivo ***index.js*** e ***styles.css*** na pasta ***src***:

```react
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => {

    return (
        <div className="App">
            Hello World
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
```



Alterar o arquivo ***package.json***:



```json
{
  "name": "aula-react",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-scripts": "^3.0.1"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```



## O que é JSX?

Criado pela equipe de desenvolvimento do [React](https://www.treinaweb.com.br/blog/conheca-o-react-biblioteca-para-desenvolvimento-web/), o JSX é uma forma de criar elementos para serem utilizadas como  templates de aplicações React. Basicamente, os elementos criados com o  JSX são bem similares com código [HTML](https://www.treinaweb.com.br/blog/o-que-e-e-como-comecar-com-html-e-css/) e fornecem aos desenvolvedores uma forma mais simples e intuitiva de  criar os componentes de uma aplicação. Porém, apesar de muito similar ao HTML, o JSX não é interpretado pelo navegador. Por este motivo, deve-se utilizar um “transpilador” para essa conversão. Atualmente, o mais  conhecido deles é o Babel, do qual falaremos em outro artigo. 

Não é obrigatório a utilização do JSX.

## Renderização

A renderização é feita por nós raíz e utiliza o React DOM. O React usa o virtual DOM para renderizar somente o que sofre alterações.

O React "pensa" em com a interface deve estar a cada momento ao invés de alterá-la com o tempo, o que traz ganhos de performance e evita uma série de erros.



Para renderizar um elemento javascript ele deve ser colocado entre chaves na função do componente do JSX.

## Components e Props

- Os componentes podem trabalhar como Função e Classe
  - Na criação de componente eles preferencialmente devem ser o mais "puros" possíveis, sem estado e sem regras de negócios.
- Props
- Composição de componentes
- Extração de Componentes



## Estado e Ciclo de vida

- Inicialização
- Montagem
- Atualizaçao
- Desmontagem

Nenhum componente pai ou filho devem saber se outro componente possui estado ou não.

O estado é apenas local ao componente e caso seja necessário enviar algum atributo para outro então é feito via props.

- Ecossistema:
  - React Router
  - Redux
  - Material UI
  - Ant-Design
  - Storybook
  - Gatsby
  - Jest
  - React i18n Next

## Webpack

- O que é o webpack?
  - É um module bundler (empacotador de módulos para aplicações JS)
  - Gerar bundler que será utilizado no HTML , em ES5
  - [link oficial](https://webpack.js.org/)

### Configuração do WebPack para React

[Artigo para configurar o webpack com react](https://www.toptal.com/react/webpack-react-tutorial-pt-1) 

Criação do arquivo ***webpack.config.js*** na raíz do projeto:

```javascript
const path = require('path');

module.exports = {
	entry: '.src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
};
```



```bash
npm i -D webpack webpack-cli
```

no arquivo ***package.json*** inserir o script:

`"build": "webpack --mode production"`

no terminal na raiz do projeto:

```bash
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

atualizar o arquivo ***webpack.config.js*** na raíz do projeto:

```javascript

const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundler.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({template: "./public/index.html",
    filename: "./index.html"}),
    new MiniCssExtractPlugin()

  ]
}
```



instalar o react e react-dom:

```bash
npm i --save-dev react react-dom
```



Criar o arquivo ***.babelrc*** na raíz do projeto:

```json
{
    "presets": [
		"@babel/preset-env",
        "babel/preset-react"
    ]
}
```

Instalar o plugin de html:

```bash
npm i -D html-webpack-plugin
```

Instalar o plugin de CSS:

```bash
npm i -D mini-css-extract-plugin css-loader
```



Instalar o  `webpack-dev-server` para executarmos a aplicação em desenvolvimento:

```bash
npm i -D webpack-dev-server
```

incluir o script no ***package.json***

```json
"scripts": {
	"start:dev": "webpack-dev-server --mode development"
}
```



## Eslint

Instalar:

```bash
npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-watch
```

Criar o arquivo .eslintrc conforme repositório da aula.



incluir o script no ***package.json***

```json
  "scripts": {
                  .
                  .
                  .
    "eslint": "eslint ./src/*.js"
  },
```

Rodar o Eslint:

```bash
npm run eslint
```



## Renderização Condicional

- [link da DOC](https://pt-br.reactjs.org/docs/conditional-rendering.html)

# Renderização condicional

Em React, você pode criar componentes distintos que encapsulam o  comportamento que você precisa. Então, você pode renderizar apenas  alguns dos elementos, dependendo do estado da sua aplicação. 

Renderização condicional em React funciona da mesma forma que  condições funcionam em JavaScript. Use operadores de JavaScript  como [`if`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else) ou [operador condicional](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_Condicional) para criar elementos representando o estado atual, e deixe o React atualizar a UI para corresponde-los.

- ***DICA:*** utilize a extensão .jsx quando o arquivo possuir jsx no código.

```react
import React from 'react';
import './styles.css'
const App = () => {
    const SignUpButton = <button>Signup</button>
    const LoginButton = <button>Login</button>
    
    const RenderShowSignUp = () => {
return(        <div>
            Clique no botão abaixo para se inscrever <br/>
            {SignUpButton}
        </div>)
    }
    
    const RenderShowLogin = () => {
return(        <div>
            Clique no botão abaixo para se logar <br/>
            {LoginButton}
        </div>)
    }
    
    const hasUser = true

    return (
        <div>
            <h1>Hello!</h1>
            {hasUser ? <RenderShowLogin /> : <RenderShowSignUp />}
        </div>
    )
}

export default App;
```



## Listas e Chaves

- Renderizando múltiplos componentes
- Componente lista básico
- Chaves
- Extraindo Componentes com Chaves
- Chaves devem ser únicas entre elementos irmãos

```react
import React from 'react';
const usersList = [
    {   
        id: 1,
        name: 'Gustavo'
    },
    {
        id:2,
        name: 'Fulano'

    },
    {
        id:3,
        name: 'Ciclano'

    },
    {
        id:4,
        name: 'Beltrano'

    },
]
const App = () => {
    const renderUsers = (user, index) => {
        return(
            <li key={`User: ${user.id} `} >{user.name}</li>
        )
    }

    return (
        <div>
            <h1>Hello! Here is our users:</h1>
            <ul>
                {usersList.map(renderUsers)}
            </ul>
        </div>
    )
}

export default App;
```



## Manipulando eventos

- Eventos em React são noemados usando camelCase ao invés de letras minísculas.
- Com o JSX você passa uma função como manipulador de eventos ao invés de um texto.

```react
import React from 'react';
import './styles.css'

const showEvent = (e) => {
    console.log('evento clicado');
    console.log(e);
}

const Button = <button onClick={showEvent}>Mostrar Evento</button>

const App = () => {

    const handleChange = (e) => {
        const {value} = e.target;
        console.log(value)
    }

    return (
        <div>
            <h1>Hello!</h1>
            <input onChange={handleChange}></input>
            {Button}
        </div>
    )
}

export default App;
```



## Pensando do jeito React

- Comece com um mock
- Separe a UI em uma hierarquia de componentes
- Crie uma versão estática em React
- Identifique a representação mínima (mas completa) do state da UI
- Identifique onde o state deve ficar
- Adicione o fluxo de dados inverso
