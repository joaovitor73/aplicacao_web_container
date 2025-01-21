# Aplicação Web Container

## Descrição
Uma aplicação simples construída com Node.js e Express, empacotada em um container Docker para gerenciar itens.

## Requisitos
- Docker instalado na sua máquina

## Como usar

### 1. **Clonar o repositório**
   Primeiro, clone o repositório: <br>
   git clone <URL_DO_REPOSITORIO> <br>
   cd aplicacao_web_container 

### 2. **Construir a imagem Docker**

docker build -t t13469878/aplicacao_web_container:1.0 .


### 3. **Rodar o container**

docker run -p 3000:3000 t13469878/aplicacao_web_container:1.0

###  **Endpoints**

GET /items: Retorna todos os itens armazenados. <br>
POST /items: Cria um novo item. Envie um corpo JSON com o campo

###  **Tecnologias**

<ol>
  <li>Node.js: Ambiente de execução JavaScript.</li>
  <li>Express: Framework para servidores web.</li>
  <li>Docker: Contêinerização da aplicação para portabilidade e escalabilidade.</li>
</ol>
