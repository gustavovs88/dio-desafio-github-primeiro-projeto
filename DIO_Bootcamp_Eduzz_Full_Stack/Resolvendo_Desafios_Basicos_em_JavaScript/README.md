# Resolvendo Desafios Básicos em JavaScript



## Desafio 1

Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem **"Sao Multiplos"** ou **"Nao sao Multiplos"**, indicando se os valores lidos são múltiplos entre si.

### Entrada 

A entrada contém valores inteiros.

### Saída

A saída deve conter uma das mensagens conforme descrito acima.



| Exemplo de Entrada | Exemplo de Saída  |
| :----------------- | :---------------: |
| **6 24**           | **Sao Multiplos** |

| **6 25** | Nao sao Multiplos |
| :------- | :---------------: |

O desafio é conferir se os números fornecidos são múltiplos um do outro. Para isso o resto da divisão entre eles não pode ser zero.  

```javascript
let lines = gets().split("\n");

let line = lines.shift().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);

if (         B % A === 0 | A % B ===0      ) 
    print(  'Sao Multiplos'  );                   //complete com a sua lógica
else 
    print(    'Nao sao Multiplos'     );
```

## Desafio 2

Leia 4 valores inteiros A, B, C e D. Com base nisso, se o valor de B for maior do que de C e se D for maior do que A, e a soma de C com D for  maior que a soma de A e B e se tanto C quanto D forem positivos e,  ainda, se a variável A for par, escreva a mensagem **"Valores aceitos"**, senão escrever **"Valores nao aceitos"**.

### Entrada 

Quatro números inteiros A, B, C e D.

### Saída

Imprima a mensagem corretamente esperada pela validação dos valores.

| Exemplo de Entrada | Exemplo de Saída    |
| :----------------- | ------------------- |
| 5 6 7 8            | Valores nao aceitos |
| 2 3 2 6            | Valores aceitos     |

O desafio consiste em colocar na condicional if as instruções do enunciado.

```javascript
x = gets().split(" ");

a = parseInt(x[0]);

b = parseInt(x[1]);

c = parseInt(x[2]);

d = parseInt(x[3]);

if (    b > c & d > a & c + d > a + b & c >= 0 & d >=0 & a%2 ===0   )
{
print("Valores aceitos");
}else
{
print("Valores nao aceitos");
}
```



## Desafio 3

Precisamos saber quanto uma determinada empresa deve pagar para seus  colaboradores, porém temos apenas a quantidade de horas trabalhadas e o  valor hora. Escreva um programa que leia o número de um colaborador, seu número de horas trabalhadas, o valor que recebe por hora e calcula o  salário desse colaborador. Em seguida, apresente o número e o salário do colaborador, com duas casas decimais.

### Entrada

Você receverá 2 números inteiros e 1 número com duas casas decimais,  representando o número, quantidade de horas trabalhadas e o valor que o  funcionário recebe por hora trabalhada.

### Saída

Exiba o número e o salário do colaborador, conforme exemplo abaixo,  com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.



| Exemplos de Entrada               | Exemplos de Saída                           |
| --------------------------------- | ------------------------------------------- |
| **25  		100  		5.50** | **NUMBER = 25  		SALARY = U$ 550.00** |

| 1  		200  		20.50 | NUMBER = 1  		SALARY = U$ 4100.00 |
| ----------------------------- | --------------------------------------- |

| 6  		145  		15.55 | NUMBER = 6  		SALARY = U$ 2254.75 |
| ----------------------------- | --------------------------------------- |



O ponto deste desafio é garantir que o salário seja um número de 2 casas decimais. Para isso foi criada a variável `salary` e usada a função nativa do JS `tofixed()`, *considere que esta função retorna uma string*:

```javascript
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());

// Escreva o seu código aqui
let salary = (valor2 * valor3).toFixed(2);

console.log(`NUMBER = ${valor1}`);
console.log(`SALARY = U$ ${salary}`);
```

