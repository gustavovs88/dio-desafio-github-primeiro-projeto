class CustomError extends Error {
    constructor({message, data}) {
        super(message),
        this.data = data
    }
}


let names = ['Huguinho', 'Zezinho', 'Luizinho' ]


try {
    let name = 'Gustavo'
    console.log(names[name])
    if (names[name] === undefined) {
        throw new CustomError({
            message: 'This person is not in our archives',
            data: {
                type: 'form error'
            }
    });
}
} catch (error) {
    alert(`An error ocurred :: ${error.message}`);
    console.log(error)
} finally {
    console.log('this log will happen if there is or there is not an error')
}
console.log('continue javascript code....')
// { Error: This person is not in our archives
//     at Object.<anonymous> (/home/gustavo/Projetos/DIO/bootcamp_eduzz/dio-desafio-github-primeiro-projeto/Desenvolvimento_avancado_com_javascript_ES6/tempCodeRunnerFile.js:15:15)
// data: { type: 'form error' } }
// this log will happen if there is or there is not an error
// continue javascript code....