import React, {useState} from "react";
import RegisterList from "../RegisterList";

const CicloDeVida = (props) => {

    let {name, age, address} = props

    const [registeredInput, setRegisteredInput] = useState([{name, age, address}])

    const onChangeName = (e) => {   
        name = e.target.value
        console.log(name)
    }

    const onChangeAge = (e) => {
        age = e.target.value
        console.log(age)

    }

    const onChangeAddress = (e) => {
        address = e.target.value
        console.log(address)

    }

    const addRegister = () => {
        setRegisteredInput([...registeredInput,{name, age, address}])

        
    }

    return (
        <div>
            <label htmlFor="name">
                Nome
            <input type='text' name="name" onChange={onChangeName}/>
            </label>
            <label htmlFor='age'>
                Idade
            <input type='text' name="age" onChange={onChangeAge}/>
            </label>
            <label htmlFor='address'>
                Endereço
            <input type='text' name="address" onChange={onChangeAddress}/>
            </label>
            <button onClick={addRegister}>Adiciona cadastro</button>
            <RegisterList registers={registeredInput} />
        </div>
    )
}

export default CicloDeVida