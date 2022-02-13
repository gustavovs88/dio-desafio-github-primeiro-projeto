# Práticas avançadas em projetos com ReactJS

[Github da aula](https://github.com/Tautorn/advanced-reactjs-dio)

## Ciclo de Vida

![Ciclo de Vida React](https://miro.medium.com/max/2000/1*sn-ftowp0_VVRbeUAFECMA.png)

## Hooks

Não chamar [hooks](https://pt-br.reactjs.org/docs/hooks-intro.html) em funcões javascript comuns. Ao invés disso:

- Chame Hooks em componentes React
- Chame Hooks dentro de Hooks customizados

## Context API

- [Context API](https://pt-br.reactjs.org/docs/context.html) é usada para passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível.
- usado muito para preferências locais ou temas UI
- Quando usar: 
  - Contexto (context) é indicado para compartilhar dados que podem ser  considerados “globais” para a árvore de componentes do React. Usuário  autenticado ou o idioma preferido, são alguns casos comuns. No exemplo  do código a seguir, nós passamos um tema a fim de estilizar o componente Button.

## Fragments

- Usado para evitar criar nós desnecessários no DOM
-  sintax sugar = `<>`, sintace `<Fragment><Fragment/>`

## Error Boundaries

[Documentação](https://pt-br.reactjs.org/docs/error-boundaries.html)

- Um erro de javascript em uma parte da UI não deve quebrar toda a aplicação React.

- Error boundaries não capturam erros em:
  - Manipuadores de evento
  - código assíncrono
  - Renderização no servidor
  - Erros lançados na própria error boundary (ao invés de em seus filhos)
- Exercício - criar um error boundarie que pegue um erro e envie os dados para o servidor.

## Render Props

[Documentação](https://pt-br.reactjs.org/docs/render-props.html)

- reaproveita métodos de outros components
- O termo *[“render prop”](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)* se refere a uma técnica de compartilhar código entre componentes React passando uma prop cujo valor é uma função.

## Typechecking com PropTypes

[Documentação](https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html)

- Validação de tipos e valores default

## Refs e DOM

Com o [Refs](https://pt-br.reactjs.org/docs/refs-and-the-dom.html) é possível acessar a árvore do DOM e/ou elementos do React.



## Dumb Components

Características:

- Preocupa-se coma a apresentação

- Não estão diretamente ligados aos requisitos funcionais da sua aplicação;
- Definem a aparência da aplicação e a interface de usuário (*UI*);
- **Não são conectados a \*store\* do Redux** (não recebem o *state* e nem disparam *actions*);
- Recebem dados e *callbacks* via *props*;
- Geralmente são [*stateless function components*](https://medium.com/@ncbcode/formas-de-escrever-componentes-react-15214233ad5f), mas não necessariamente, somente possui estados para controlar a interface e não dados do usuário;

## Smart ou Container Component

- Preocupam-se como as coisas vão funcionar
- Podem conter Smart e Dumb components
- Providenciam dados e padrões de apresentação ou outros containers
- Na maioria dos casos possuem estado e podem chamar utros fluxos do sistema.
- Geralmente estão diretamente ligados aos requisitos funcionais (funcionalidades);
- São conectados a *store* do Redux (conhecem o *state* e disparam *actions*);
- Passam os dados e *callbacks* para os *dumbs components*;
- Geralmente são [*stateful class components*](https://medium.com/@ncbcode/formas-de-escrever-componentes-react-15214233ad5f), mas não necessariamente;
- Ex: UserGallery, UserPage, FilterBool, FollowerwsSidebar, ListCards

## Organização de Projeto

Pastas dentro de src:

- assets
  - São os recursos globais, como imagens, código css...
- commons
  - constants
    - São constantes que podem ser exportadas como arrays, objetos etc.
  - utils
    - São funções úteis que podem ser exportadas
- components
  - os componentes da aplicação
- containers
  - container components ou componentes páginas
- resources
  - São onde são armazenadas as requisições e apis
- routes
  - são as rotas da aplicação