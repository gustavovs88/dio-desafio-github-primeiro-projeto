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