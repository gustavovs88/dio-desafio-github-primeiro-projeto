import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './styles.css';
import Button from './button';
import ComponenteA from './ComponenteA';

const App = () => {

    const soma = (a,b) => {
        alert(a+b);
    }
    const SignUpButton = <button>Signup</button>
    const LoginButton = <button>Login</button>
    
    const RenderShowSignUp = () => {
       return (<div>
        Clique no botão abaixo para se inscrever <br/>
        {SignUpButton}
        </div>)

    }
    
    const RenderShowLogin = () => {
        return (
        <div>
            Clique no botão abaixo para se logar <br/>
            {LoginButton}
        </div>
        )
    }
    
    const hasUser = true;
    return (
        <div className="App">
            <h1>Hello World</h1>
            {hasUser ? <RenderShowLogin name='gustavo'/> : <RenderShowSignUp/>}
        </div>

    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);