# Desenvolvimento de aplicações para internet com ReactJS

Códigos do especialista: [github.com/eduardogc/digital-one-react-intermediario](https://github.com/eduardogc/digital-one-react-intermediario)



## Trabalhando com estilos em componentes

- Inline
  - Prós:
    - Maneira prática e direta
    - Ajustes rápidos
    - testes de estilo
  - Contras:
    - Dificil manutenção

```react
import './App.css';

const myStyle = {
  color: 'green',
  marginTop: '50px'
}

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'blue'}}>Hello World</h1>
      <h2 style={myStyle}>I'm Gustavo</h2>
    </div>
  );
}

export default App;
```



- Classes
  - Prós:
    - Maneira mais prática e direta
  - Contras
    - Dificil manutenção
    - Pouca flexibilidade
    - Conflitos com nomes

```react
import './App.css';


function App() {
  return (
    <div className="App">
      <h1 className='text-header'>Hello World</h1>
    </div>
  );
}

export default App;
```

No arquivo App.css

```css
.text-header {
  font-size: 30px;
  color: red;
} 
```



- CSS in JS
  - Vantagens
    - Manuenção - facilidade para remover CSS
    - Estilos dinâmicos
  - Performance
  - Injeção automática de prefixos vendor

`npm instal --save styled-components`

```react
import './App.css';
import styled from 'styled-components'

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (  
    <DivStyle>
      <h1 className='text-header'>Hello World</h1>
      <Button>MyButton</Button>
    </DivStyle>
  );
}

export default App;

```

### Statefull x Stateless

- Stateful - o componente usa estados
  - Possui gerenciamento de estados no componente
  - Construídos usando uma classe JS
- Stateless - o componente **não** usa estados
  - Não possui gerenciamento de estados no componente
  - Construído usando funções JS

A nomenclatura foi atualizada para **Class Components** e **Function Components**

### Introdução em Formulários no ReactJS

- Formulários mantém um estado interno

Em HTML, o input, textarea e select possuem estados internos. Em React podemos controlar os estados.

Essas tags possuem atributos `value` que podemos manipular com o `onChange`.

No caso de checkbox e radio temos o `checked`.

#### Componente controlado

Exemplo de um componente form com input e controle dos estados:

```react
import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        alert(`Your form has been submited:\nname: ${this.state.value}`);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input type='text' onChange={this.handleChange}></input>
                </label>
                <input type='submit'>Submit</input>
            </form>
        )
    }
}

export default Form
```



#### Componente não controlado

- A tag input é read-only

##### Quando Usar Refs 

Existem algumas boas finalidades para o uso de refs:

- Gerenciamento de foco, seleção de texto, ou reprodução de mídia.
- Engatilhar animações imperativas.
- Integração com bibliotecas DOM de terceiros.

Evite usar refs para qualquer coisa que possa ser feita de forma declarativa.

Por exemplo, ao invés de expôr os métodos `open()` e `close()` em um componente `Dialog`, passe a propriedade `isOpen` para ele.

```react
import React from "react";

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        alert(`Arquivo enviado: ${this.fileInput.current.files[0].name}`)
        e.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome do arquivo:
                    <input type='file' ref={this.fileInput}/>
                </label>
                <button type="submit">Submit</button>
            </form>


        )
    }
}

export default FileInput
```

#### Bibliotecas de FORM

- [Formik](https://formik.org/docs/overview)
- [Redux-form](https://redux-form.com/8.3.0/)



## Introdução ao Redux e Fluxos da arquitetura com ReactJS

### O que é [flux](https://facebook.github.io/flux/)?

Uma arquitetura criada para comunicação entre componentes. Um padrão de projeto para tráfego de maneira unidirecional

![Action -> Dispatcher -> store -> view](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-1300w.png)



### O que é [Redux](https://react-redux.js.org/)?

É uma implementação de flux

- Criado por Dan Abramov em 2015.

![Fluxo Redux - ](https://gustavovs88.github.io/images/redux.png)

```bash
npm install react-redux
npm install --save-dev redux-devtools
```



### APIs HTTP

- Fetch API - Alternativa ao XMLHttpRequest e JQuery.ajax()

- [Axios](https://axios-http.com/docs/intro) 

  - Lib de Http API

  - Cross-Browser

  - Pode monitorar o progresso de um request

  - Melhor tratamento de erros

  - Melhor teste

  - `yarn add axios`

  - ```react
    import axios from 'axios';
    axios.get(url).then(data => alert(`Esses são os dados: ${data}`)).catch(error => alert(`ERRO:: ${error}`))
    ```

  - 

Beeceptor - criador de API gratuita.

### Imutabilidade e Redux

- Uma vez criada, uma coleção não pode ser alterada

- Novas coleções podem ser criadas a partir de uma coleção anterior e uma mutação (setter) como um conjunto

- Novas coleções são criadas usando o máximo possível da estrutura original, reduzindo a cópia e aumentando a performance

- Benefícios da imutabilidade

  - Performance
  - Programação mais simples
  - Debugging mais simples(detecção de mudanças)

- Se você quer performance em React use dados imutáveis

- Você consegue usando o shouldComponentUpdate ou React.PureComponent

- ![código shouldComponentUpdate](https://gustavovs88.github.io/images/shouldComponentUpdate-code.png)

  ![](/https://gustavovs88.github.io/images/shouldComponentUpdate-flowChart.png)

![](https://gustavovs88.github.io/images/PureComponent-code.png)

- Immutable.js
  - fornece coleções persistentes e imutáveis
  - permite detecção barata de alterações nos objetos
  - ![image-20220113000219362](/https://gustavovs88.github.io/images/immutable-js-code.png)

- Outras libs:
  - Immer
  - Immutability-helper
  - Seamless-immutable
- Imutabilidade é um pre-requisito no Redux
  - Redux e React-Redux utilizam comparações rasas
  - Manipulação de dados mais segura
  - Time-travel debugging
- Os reducers dividem o objeto de estados em dompinios por uma chave
- CombineReducers checa mudanças usando comparação rasa
  - Fazem a interação nos reducers
  - Criam um novo objeto de estados a partir dos estados retornados por cada reducer
  - connect gera componentes que fazem comparação rasa com o estado root
  - retornam o valor para a função mapStateToProps, verificando aqueles que precisam de uma operação de re-render

![image-20220113001049105](https://gustavovs88.github.io/images/redux-immutable-example-code.png)

### Redux + REST

- Redux Middlewares  - applyMiddleware

![applymiddleware-code](https://gustavovs88.github.io/images/applyMiddleware-redux-code.png)

- Middlewares mais usados:

  - redux-thunk - `yarn add redux-thunk`

    - Uma função que chama outra função

    - ```react
      function some_function() {
      	//faça algo aqui
      	return function thunk() {
      		// faça algo pensado depois
      	}
      }
      ```

    - 

  - redux-saga

## TDD e BDD com JEST

- [Jest](https://jestjs.io/pt-BR/) usa [Jasmine](https://jasmine.github.io/) como linguagem de teste

```
yarn add --dev @teting-library/react
yarn add --dev @testing-library/jest-dom/extend-expect
```

![jest-test-code](https://gustavovs88.github.io/images/image-20220113004042261.png)

- sintaxe gherkin - BDD

![image-20220113004635198](https://gustavovs88.github.io/images/sintaxe-gherkin.png)

- jest-cucumber
- chai

### Debugging

- Chrome devtools
- React developer tools
- Redux dev tools



### Tratamento de Erros

- Prop\Types
- Typescritpt
