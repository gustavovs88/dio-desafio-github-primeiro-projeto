# MySql - Trabalhando com as suas primeiras tabelas no Ubuntu

## MySQL

- Banco de dados gratuito
- Muito utilizado
- phpMyAdmin - Sitema gerenciador de banco de dados (temos outros como MySQLWorkBench) é instalado junto do pacote XAMPP 



## Configurando o ambiente (Linux - Ubuntu)

Para iniciar a utilização do MySQL uma das opções mais fáceis e rápidas é utilizando o XAMPP. O XAMPP é um pacote de código aberto

- Instalar o XAMPP

  - Verificar a versão do sistema 

  ```bash
  uname -m
  ```

  - Se for 32bits:

    - ```bash
      wget https://ufpr.dl.sourceforge.net/project/xampp/XAMPP%20Linux/7.4.11/xampp-linux-7.4.11-0-installer.run -O xampp-installer.run
      ```

  - Se for 64 bits

    - ```bash
      wget "https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/7.4.22/xampp-linux-x64-7.4.22-0-installer.run/download" -O xampp-installer.run
      ```

  - Rodar os scripts na sequência:

    - Tornar o arquivo de instalação do XAMPP executável:

      ```bash
      chmod +x xampp-installer.run
      ```

    - Iniciar a instalação:

      ```bash
      sudo ./xampp-installer.run
      ```

    - Seguir os passos do instalador...

    - Inicializar os servidores:

      ```bash
      sudo /opt/lampp/lampp start
      ```

    - No navegador insira a url abaixo para entrar no phpMyAdmin

      ```bash
      http://localhost/phpmyadmin/
      ```

      

##  Criando sua primeira tabela

No phpMyAdmin crie um banco de dados. Entre no banco de dados e digite o comando SQL:

-  CREATE TABLE <nome da tabela> (<nome da coluna> <tipo>, <nome da colina> <tipo>, .....)
  - ex.: CREATE TABLE pessoa (id, nome varchar(20), nascimento date, idade int)
- Inserir dados na tabela:
  - INSERT INTO pessoas (nome, nascimento, idade) VALUES ('Gustavo', '1988-07-24', 33)
- Selecionar dados
  - SELECT <coluna> FROM <tabela>
- Atualizar os dados
  - UPDATE <tabela> SET <coluna>  = <valor a ser atualizado> WHERE <condicao>

- Deletar dados
  - DELETE FROM <tabela> WHERE <condicao>
- Ordenando dados
  - SELECT * FROM <tabela> ORDER BY <coluna>
  - Para ordenar em ordem decrescente:
  - SELECT * FROM <tabela> ORDER BY <coluna> DESC
- Agrupando dados
  - SELECT  COUNT(id) FROM <tabela> GROUP BY <coluna>