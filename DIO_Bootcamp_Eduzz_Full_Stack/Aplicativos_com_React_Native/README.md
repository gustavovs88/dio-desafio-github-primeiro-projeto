# Criando aplicações móveis multiplataforma com React Native



[React Native](https://reactnative.dev/) é um framework baseado na biblioteca React, que possibilita o desenvolvimento de aplicativos mobile, tanto para android quanto para ios. 



- Configuração do ambiente com [tutorial rocketseat](https://react-native.rocketseat.dev/android/linux)



## Flex Box

- flexDirection - determina o main-axis que pode ser column (vertical) ou row (horizontal)
- flex - atribui um peso aos elementos. Se temos mais de um sibling (irmão), podemos atribuir quanto espaço da "view" será ocupada por cada elemento proporcionalmente
- alignItems - flex-start, flex-end ou center. Alinha os itens com base no eixo vertical
- justifyContent - flex-start, flex-end ou center. Alinha os itens com base no eixo horizontal

***DICA***

Ao chamar uma função com algum parâmetro com a propriedade onPress devemos usar uma arrow-function:

```react
<TouchableOpacity onPress={() => handlePress(parameter)}>
	Press ME
<TouchableOpacity/>
```



## Componentes

Segue a mesma lógica do ReactJS