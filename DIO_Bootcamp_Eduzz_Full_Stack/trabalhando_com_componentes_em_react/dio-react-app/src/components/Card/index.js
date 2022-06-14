import { useState } from "react"
import Button from '../Button'
const Card = () => {

    const [value, setValue] = useState(0)

    const adicionar = () => {
        setValue(value +1)
    }

    const remover = () => {
        setValue(value -1)
    }

    return (
        <div className="card">
            <div className="card-header">
                <p className="card-text">My card Header</p>
            </div>
            <div className="card-body">
                <p className="card-text">{value}</p>
                <Button className="btn btn-success" onClick={adicionar}>Adiciona</Button>
                <Button className="btn btn-danger" onClick={remover}>Remove</Button>
            </div>

        </div>
    )
}

export default Card;