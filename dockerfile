# Usar uma imagem oficial do Node.js
FROM node:16
#Definir o diretório de trabalho do container
WORKDIR /app
#Copiar os arquivos e dependências
COPY package*.json ./
# Instalar as dependências
RUN npm install
#Copiar o restante do código da aplicação
COPY . .
# Expor a porta usada pela aplicação
EXPOSE 3000
# Comando para iniciar a aplicação
CMD ["npm", "start"]
