# Resolvendo desafios em JavaScript



Confira as respostas dos desafios nos arquivos de código nesta mesma pasta.

## Desafio 1 - Frota de Táxi

 - A Companhia de Táxi Tabajara (CTT) é uma das maiores empresas de transporte do país. Possui uma vasta frota de carros e opera em todas as grandes cidades. Recentemente a CTT modernizou a sua frota, adquirindo um lote de 500 carros bi-combustíveis (carros que podem utilizar como combustível tanto álcool quanto gasolina). Além do maior conforto para os passageiros e o menor gasto com manutenção, com os novos carros é possível uma redução adicional de custo: como o preço da gasolina está sujeito a variações muito bruscas e pode ser vantagem, em certos momentos, utilizar álcool como combustível. Entretanto, os carros possuem um melhor desempenho utilizando gasolina, ou seja, em geral, um carro percorre mais quilômetros por litro de gasolina do que por litro de álcool.

 - Você deve escrever um programa que, dados o preço do litro de álcool, o preço do litro de gasolina e os quilômetros por litro que um carro bi-combustível realiza com cada um desses combustíveis, determine se é mais econômico abastecer os carros da CTT com álcool ou com gasolina. No caso de não haver diferença de custo entre abastecer com álcool ou gasolina a CTT prefere utilizar gasolina.
Entrada

 - A entrada é composta por uma linha contendo quatro números reais com precisão de duas casas decimais A e G (0.01 ≤ A, G ≤ 10.00) Ra e Rg (0.01 ≤ Ra , Rg ≤ 20.00) representando respectivamente o preço por litro do álcool, o preço por litro da gasolina, o rendimento (km/l) do carro utilizando álcool e o rendimento (km/l) do carro utilizando gasolina.

 - A entrada deve ser lida do dispositivo de entrada padrão (normalmente o teclado).
Saída

- A saída deve ser composta por uma única linha contendo o caractere ‘A’ se é mais econômico abastecer a frota com álcool ou o caractere ‘G’ se é mais econômico ou indiferente abastecer a frota com gasolina.

- A saída deve ser escrita no dispositivo de saída padrão (normalmente a tela).

| Exemplos de Entrada   | Exemplos de Saída |
| --------------------- | ----------------- |
| 1.20 2.30 10.00 15.00 | A                 |
| 1.00 1.00 9.00 9.01   | G                 |
| 1.00 1.00 11.00 11.00 | G                 |

 	

OBI - Olimpíada Brasileira de Informática 2005 Nível 1

## Desafio 2 - Xadrez

## Desafio

No tabuleiro de xadrez, a casa na linha 1, coluna 1 (canto superior  esquerdo) é sempre branca e as cores das casas se alternam entre branca e preta, formando o formato tão conhecido como xadrez. Dessa forma, como o tabuleiro tradicional tem oito linhas e oito colunas, a casa na linha  8, coluna 8 (canto inferior direito) será também branca. Porém, neste  problema, queremos ser capazes de predizer a cor independente do número  de linhas e colunas, sendo: **L** linhas e **C** colunas. No exemplo da figura, para **L** = 6 e **C** = 9, a casa no canto inferior direito será preta, uma simples previsão matemática, não?

![img](https://resources.urionlinejudge.com.br/gallery/images/problems/UOJ_2787.png)

## Entrada

A primeira linha da entrada contém um inteiro **L** (1 ≤ **L** ≤ 1000) indicando o número de linhas do tabuleiro.
 A segunda linha da entrada contém um inteiro **C** (1 ≤ **C** ≤ 1000) representando o número de colunas.

## Saída

Imprima uma linha na saída. A linha deve conter um inteiro,  representando a cor da casa no canto inferior direito do tabuleiro, e  para identificar, considere o inteiro 1 para a cor branca e 0 para a cor preta.

| Exemplos de Entrada | Exemplos de Saída |
| ------------------- | ----------------- |
| 6 			9     | 0                 |
| 8 			8     | 1                 |
| 5 			91    | 1                 |



## Desafio 3 - Nossos Dias Nunca Voltarão



E aí? Curtiu a Esco<u>l</u>a de <u>I</u>nverno deste ano? Para que esta Escola acontecesse, <u>f</u>oram muitos qu<u>e</u> trabalharam, seja na elaboração dos problemas, na conf<u>i</u>guração do Portal, na logí<u>s</u>tica do eve<u>n</u>t<u>o</u> ou na cap<u>ta</u>ção dos recursos. Nosso agradecimento es<u>p</u>ecial deste ano vai pa<u>r</u>a o Prof. Ricardo Oliveira, que não somente aceitou vir ministrar as oficinas como tam<u>b</u>ém participou ativamente na organização da Escola. Te<u>mo</u>s certeza que a experiência e a carreira dele n<u>o</u> ICPC como competidor e como *coach* motivaram e inspiraram todos nós.

Esperamos que você tenha gostado desses últimos dias em Essos e em Westeros, que tenha aprendido bastant<u>e</u> e que tenha <u>s</u>e divertid<u>o</u>. Mas não é só em Essos e em Westeros que você deve se divertir. Aqui, em Além da Muralha, programar também é di<u>ve</u>rtid<u>o</u>. Continue estudando, continue treinando, e cada vez mais. O importante é o caminho que você vai trilhar daqui para frente. Nosso conselho é que  você procure sempre aproveitar ao máximo cada momento, cada oficina,  cada escola, cada treino, cada tempo de prática ou estudo em casa.  Nossos dias nunca voltarão.

## Entrada

A entrada consiste de um único inteiro **N** (1 ≤ **N** ≤ 34) numa linha.

## Saída

Imprima os **N** primeiros caracteres da citação de  Søren Kierkegaard definida pelas letras que foram sublinhadas no  enunciado deste problema. Preste atenção, pois nenhum espaço foi  sublinhado — você é que deve adivinhar o número e a localização dos  espaços na frase. A única linha da saída deve consistir apenas de letras maiúsculas e espaços e ser finalizada por *fim de linha*.

 

| Exemplos de Entrada | Exemplos de Saída |
| ------------------- | ----------------- |
| 1                   | L                 |
| 3                   | LIF               |
| 7                   | LIFE IS           |

 

