FROM python:3.9-slim

WORKDIR /usr/src/app

# Copiar el archivo requirements.txt
COPY requirements.txt .

# Instalar dependencias
RUN pip install -r requirements.txt

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto
EXPOSE 5000

# Ejecutar la aplicación Flask
CMD ["python3", "app.py"]
