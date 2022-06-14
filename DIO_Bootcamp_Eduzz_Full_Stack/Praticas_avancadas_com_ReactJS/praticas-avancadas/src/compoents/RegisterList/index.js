const RegisterList = (props) => {

const {registers} = props

let registerList = registers.map((register, index) => {
    return (
        <li key={`${register.name}${index}`} >
        {register.name}
        </li>
    )

})

return (
    <ul>
        {registerList}
    </ul>
)

}

export default RegisterList
