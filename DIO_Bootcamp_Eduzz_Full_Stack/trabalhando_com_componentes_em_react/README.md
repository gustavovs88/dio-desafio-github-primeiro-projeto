# Trabalhando com componentes em React

Criando o projeto

```bash
npx create-react-app myapp
```

Iniciando o servidor para visualizar o projeto

```bash
cd myapp
npm start
```

Remover todas os arquivos da pasta ***src*** exceto ***App.js e index.js***. No arquivo ***index.js*** remover a importação do arquivo ***.css*** e do ***reportWebVitals*** bem como sua função.



Exemplo de componente que usa  `props.children` para poder receber os parâmetros dos "filhos" do componente quando este é invocado `<Item>myChidren</Item>`

```react
const Item = (props) => {
    return (
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">{props.children}</a>
    )
}

export default Item
```

Para demais exemplos de componentes, ver a pasta components do código do repositório.