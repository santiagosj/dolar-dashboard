# Usa una imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos necesarios
COPY package*.json ./
COPY tsconfig.json ./
COPY ./src ./src

# Instala las dependencias
RUN npm install

# Compila el código TypeScript a JavaScript
RUN npx tsc

# Exponer el puerto
EXPOSE 4000

# Comando para iniciar el servidor
CMD ["node", "dist/index.js"]
