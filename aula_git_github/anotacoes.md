# Índice

[toc]

# Criar chave ssh - terminal bash linux

- Aplicar o comando abaixo no terminal bash para criar a chave ssh:

```bash
ssh-keygen -t ed25519 -C <meuemail@meudominio.com>
```

- Navegar até a pasta .ssh, dar o comando ls, usar a chave publica para colocar no github [^dica 1]

- Inicialiar o ssh agent na pasta ssh

`eval $(ssh-agent -s)`

- Passar a chave para o agent

`ssh-add "<arquivo da chave privada>"`



# Comandos git

`git init` - inicia o repositorio na pasta do projeto
`git config --global user.email "<meuemail@...>"` - Cria email do autor de forma global
`git config --global user.name "<meunome>"` - Cria o nome do autor de forma global [^dica 2]
`git add --all` - adiciona todas as alterações realizadas nos arquivos para o status staged
`git commit -m "<descrição do commit>"` - faz o commit com a descrição desejada

`git remote add origin <url do repositório remoto>` - aponta seu repositório local para o repositório remoto

`git push origin <branch>` - "empurra" repositório local para o repositório remoto







[^dica 1]: usar comando `cat "<arquivo da chave publica>"` para mostrar a chave no console do terminal
[^dica 2]: Use o mesmo email e nome da conta do github para associar seus commits ao seu usuário cadastrado 
