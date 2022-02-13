# HTML



## Estrutura Básica

As partes do elemento HTML:

- Elemento (h1, p, body, etc.)
  - Tag de abertura (<p>)
    - Atributo (class, href, style, etc.)
  - Conteúdo (Texto visível ou elementos filho)
  - Tag de Fechamento (<p/>)

![Partes dos elementos HTML](https://mdn.mozillademos.org/files/14717/mdn_Anatomia_de_um_elemento_HTML.png)[^1]



A estrutura básica HTML5 (snippet de estrutura básica do HTML5 retirado do VScode) :

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## Semântica

Ao usar HTML é importante utilizar as tags adequadas ao conteúdo. Isso auxilia os motores de busca a entenderem melhor nosso site melhora a performance



`<section>`

Representa uma seção genérica de conteúdo quando não houver um elemento mais específico para isso.

`<header>`

É o cabeçalho da página ou de uma seção da página e normalmente contém logotipos, menus, campos de busca.

`<article>`

Representa um conteúdo  independente e de maior relevância dentro de uma página, como um post de blog, uma notícia em uma barra lateral ou um bloco de comentários. Um  article pode conter outros elementos, como header, cabeçalhos,  parágrafos e imagens.

`<aside>`

É uma seção que engloba  conteúdos relacionados ao conteúdo principal, como artigos relacionados, biografia do autor e publicidade. Normalmente são representadas como  barras laterais.

`<footer>`

Esse elemento representa o  rodapé do conteúdo ou de parte dele, pois ele é aceito dentro de vários  elementos, como article e section e até do body. Exemplos de conteúdo de um <footer> são informações de autor e *links* relacionados.

`<h1> até <h6>`

Eles não foram criados na  versão 5 do HTML e nem são específicos para semântica, mas servem para  esse propósito. São utilizados para marcar a importância dos títulos,  sendo `<h1>` o mais importante e `<h6>` o menos. Uma dica: use  apenas um `<h1>` por página, pois ele representa o objetivo da sua  página.

`<p>`

O elemento <p> representa um parágrafo, mas ele não suporta apenas texto, podemos adicionar imagens, código, vídeos e vários outros tipos de conteúdo dentro dele.

`<a>`

<a> significa anchor/âncora, ele representa um hyperlink, é ele que interliga vários conteúdos e páginas na web. O elemento a tem vários atributos, os principais são **href** e o **target**. o href representa o _hyperlink_ que irá apontar para o endereço de destino ao clicar no <a>. O valor **_blank** para o atributo **target** faz com que o destino do _hyperlink_ seja aberto em uma nova aba do navegador.

`img`

O elemento <img> representa uma imagem e possui dois atributos próprios. O **href** que aponta para o local aonde a imagem está armazenada e o **alt** que corresponde ao texto alternativo que será mostrado no navegador ao invés da imagem caso a mesma não seja encontrada pelo endereço informado no **href**. Este elemento não possui tag de fechamento.

**Para mais elementos e suas características, acessar os [links para estudos](##links-para-estudo).**

# CSS3



O CSS foi criado em 1996 para incluir estilos e formatar as páginas. Os elementos CSS possuem a estrutura conforme imagem abaixo[^2]:



![Elemento CSS](https://www.chiefofdesign.com.br/wp-content/uploads/2015/06/regras-css.jpg)



## Seletores

Selecionam o elemento a ser estilizado. São divididos conforme abaixo:

- [Seletores Simples](https://www.w3schools.com/css/css_selectors.asp) (Simple selectors ) - selecionam elementos baseados no nome, classe ou id.

  - **#** precede o id a ser selecionado.
  - **.** precede a classe a ser selecionada.
  - elementos não possuem caracter predecessor para ser selecionado.

- [Seletores de Combinação](https://www.w3schools.com/css/css_combinators.asp) (Combinator Selectors) - selecionam elementos baseados na relação entre eles. Existem 4 tipos de combinadores:

  - seletor de descendente  - (**espaço**)
  - seletor de elemento filho (child) - (**>**)
  - seletor de irmão adjacente (adjacent sibling) - (**+**)
  - seletor geral de irmão (general sibling selector) - (**~**)

- [Seletores de pseudo-classe](https://www.w3schools.com/css/css_pseudo_classes.asp) (Pseudo-class selectors) - selecionam elementos baseados em um certo estado.

  - servem para estilizar elementos que se encontram em certos estados.
  - a sintaxe é a seguinte:

  ```css
  seletor:pseudo-classe {
      propriedade: valor;
  }
  ```

  - Ver a [lista de pseudo-classes](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes).

- [Seletores de pseudo-elementos](https://www.w3schools.com/css/css_pseudo_elements.asp) (Pseudo-elements selectors) - seleciona e estiliza parte de um elemento.

  - pseudo-elementos são usados para estilizar partes de um elemento. Ex.: estilizar a primeira letra ou linha de um elemento.
  - a sintaxe é a seguinte:

  ```css
  seletor::pseudo-elemento {
      propriedade: valor;
  }
  ```

  - ver a [lista de pseudo-elementos](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-elements).

- [Seletores de atributo](https://www.w3schools.com/css/css_attribute_selectors.asp) (Attribute selectors) - selecionam elementos baseados em atributos ou valores de atributos.

  - sintaxe:

  ```css
  seletor[atributo] {
      propriedade: valor;
  }
  
  seletor[atributo="valor do atributo"] {
      propriedade: valor
  }
  
  /* Seleciona elementos cujo valor do atributo contém uma determinada palavra */
  seletor[atributo~="valor do atributo"] {
      propriedade: valor
  }
  
  /* Seleciona elementos cujo valor do atributo começa uma determinada palavra. Tmabém seleciona elementos cuja palavra é seguida por um hifen.*/
  seletor[atributo|="valor do atributo"] {
      propriedade: valor
  }
  
  /* Seleciona elementos cujo valor do atributo começa uma determinada sequência de letras. Não necessita formar uma palavra. */
  seletor[atributo^="valor do atributo"] {
      propriedade: valor
  }
  
  /* Seleciona elementos cujo valor do atributo termina uma determinada sequência de letras. Não necessita formar uma palavra. */
  seletor[atributo$="valor do atributo"] {
      propriedade: valor
  }
  
  /* Seleciona elementos cujo valor do atributo contém uma determinada sequência de letras. Não necessita formar uma palavra. */
  seletor[atributo*="valor do atributo"] {
      propriedade: valor
  }
  
  ```

## Propriedades e Valores

As propriedades são os argumentos que podem ser customizados, tais como tamanho de fonte, cor de fundo, borda, etc.



Os valores são a forma que desejamos que a propriedade seja visualizada pelo usuário. Por exemplo, podemos alterar o tamanho da fonte para pixels, pt, em, rem, que são [formas de se atribuir um tamanho de fonte em CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/font-size).

Veja a [lista de propriedades](https://www.w3schools.com/cssref/) e clique na propriedade de interesse para verificar seus valores possíveis.

## Box Model

Cada elemento HTML é representado por uma caixa retangular que é composta por 4 áreas.

- Margin - Margem, são os espaçamentos entre os elementos.
- Border - Borda, são as bordas da caixa.
- Padding - é o espaçamento entre as bordas e o conteúdo.
- Content - Conteúdo, é o que o bloco representa, um texto, uma imagem, um vídeo, etc.

Os quatro lados do box model podem ser selecionados e estilizados individualmente:

```css
seletor {
    /* atribui margem de 10px para os lados de cima e de baixo e 5px para os lados esquerdo e direito*/
    margin: 10px 5px;
    /* ao selecionar os 4 lados individualmente a regra é que o primeiro lado será o de cima e o restante é selecionado no sentido horário (cima, direita, baixo, esquerda)*/
    padding: 1px 2px 3px 4px;
    	
}
```



## Links para estudo

[w3Schools](https://www.w3schools.com/html/html_intro.asp)

[MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/HTML)





[^1]:Fonte de Imagem: developer.mozilla.org
[^2]:Fonte da Imagem: chiefofdesign.com.bt
