# Introdução ao Node.js com JavaScript

Repositório da aula: https://github.com/DianaMartine/nodejs-liveCoding-DIO

Instalando o Node.js:
[Artigo para instalação do Node no Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-pt)

[Documentação NodeJS](https://nodejs.org/dist/latest-v16.x/docs/api/)

O nodeJS é um abmiente de execução do JS em server-side.

Permite executar o JS no ambiente da máquina (local), sem a necessidade de um navegador.

Em 2009 um estudante chamado Ryan Dahl criou o NOdeJS à partir do interpretador do navegador Chrome, o famoso Javascript Engine V8.

O Node trabalha com single thread. Imagine que cada requisição é um pedido de delivery. As requisições são assíncronas, agilizando assim a entrega. O mesmo trabalha em Event Looping, ou seja executa as requisições de forma assíncrona.

- **Blocking**: síncrono, pois a entrega depende que todas as requisições estejam prontas;
- **Non-blocking**: assíncrono, pois a entrega é feita mesmo sem todas as requisições estarem prontas. (trabalha com o Event-Loop)
- **Event-Loop**: execução das requisições de forma assíncrona

- Vantagens do NodeJS:
  - Flexibilidade;
  - Leveza;
  - Escalabilidade;
  - Redução de custos;
  - Maior repositório do mundo (NPM);
  - Mesma linguagem no frontend e no backend;

## O que é o NPM?

O NPM é uma ferramenta de gerenciamento de pacotes do Node.

## Criando o Package JSON e o server

Na raiz do projeto digite no terminal o comando abaixo para iniciar o package.json

`npm init`
