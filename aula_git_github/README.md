# Índice

1. [Índice](#%C3%ADndice)
2. [Comandos básicos Linux](#comandos-básicos-linux)
3. [Criar chave ssh](#criar-chave-ssh---terminal-bash-linux)
4. [Comandos básicos git](#comandos-basicos-git)



# Comandos básicos Linux



`mkdir <nome do diretorio>` - Cria diretório.

`cd <diretorio>` - navega para o diretório.

`cd ..` - retorna para o diretório a um nível acima.

`rm -r <diretório>`- remove recursivamente (todos os arquivos e diretórios contidos) o diretório.

`mv <diretorio/arquivo fonte> <diretorio alvo>`- move o diretório ou arquivo fonte para o diretório alvo.

# Criar chave ssh - terminal bash linux

- Aplicar o comando abaixo no terminal bash para criar a chave ssh:

```bash
ssh-keygen -t ed25519 -C <meuemail@meudominio.com>
```

- Navegar até a pasta .ssh, dar o comando ls, usar a chave publica para colocar no github [^dica1];

- Inicialiar o ssh agent na pasta ssh.

`eval $(ssh-agent -s)`

- Passar a chave para o agent.

`ssh-add "<arquivo da chave privada>"`



# Comandos git

`git init` - inicia o repositorio na pasta do projeto.

`git config --global user.email "<meuemail@...>"` - Cria email do autor de forma global.

`git config --global user.name "<meunome>"` - Cria o nome do autor de forma global [^dica2].

`git add --all` - adiciona todas as alterações realizadas nos arquivos para o status staged.

`git commit -m "<descrição do commit>"` - faz o commit com a descrição desejada.

`git remote add origin <url do repositório remoto>` - aponta seu repositório local para o repositório remoto.

`git push origin <branch>` - "empurra" repositório local para o repositório remoto.

`git status` - retorna o status do repositório.







[^dica1]: usar comando `cat "<arquivo da chave publica>"` para mostrar a chave no console do terminal
[^dica2]: Use o mesmo email e nome da conta do github para associar seus commits ao seu usuário cadastrado 
