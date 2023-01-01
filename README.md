
# Store Manager

Store Manager foi proposto como uma atividade de aprimoramento dos meus estudos sobre desenvolvimento de API. 
O projeto me permitiu colocar em prática o que aprendi durante o módulo de Back-end na [Trybe](https://www.betrybe.com/).

## Objetivo

Desenvolver um sistemas de gestão onde deve ser possivel fazer um CRUD (Criar, Ler, Atualizar e Deletar).

## Tecnologias e Ferramentas
<div>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs"/>
    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="docker"/>
    <img src="https://camo.githubusercontent.com/92407fc26e09271d8137b8aaf1585b266f04046b96f1564dfe5a69f146e21301/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a57542d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d4a534f4e253230776562253230746f6b656e73266c6f676f436f6c6f723d7768697465" alt="jwt"/>
    <img src="https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white" alt="mocha"/>
</div>

<br>

Na elaboração da API RESTful, o projeto foi organizado com a arquitetura MSC (Model-Service-Controller).

## ⚙️ Execução

Antes de definir a forma que vamos executar a aplicação, devemos fazer um clone do projeto em sua máquina.

    git clone git@github.com:guilhermepallma/store-manager.git

Navegue até a raíz do projeto.

    cd store-manager/

<details>
  <summary>Local</summary>

  Na raíz do projeto execute o comando abaixo para instalar as dependências.

    npm install

  Para subir o servidor com o <strong>nodemon</strong> utilize o comando abaixo no terminal dentro do projeto.
    
    npm run debug
    
  Faça login no banco de dados usando suas credenciais.
  
    mysql -u <your-username> -p
    
  Execute os scripts <strong>migration.sql</strong> e <strong>seed.sql</strong> para criar o banco de dados e povoar.
    
    npm run migration && npm run seed
  
  Para executar todos os testes do projeto.
  
    npm run test:mocha
    
 </details>  
   
 <details>
  <summary>Docker</summary>
  
  Para montarmos os containers com a API e o Banco de Dados.
  
    docker-compose up -d
    
  Para acessar o terminal do container da aplicação.
  
     docker exec -it store_manager bash
     
  Dentro do container <strong>store_manager</strong> instale as dependências.
  
    npm install
  
  </details>
    

Desenvolvido por [Guilherme Palma](www.linkedin.com/in/guilhermepallma) © 2022.
