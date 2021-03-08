#!/bin/bash

REMOTE_SERVER=root@opencovid2.tk

# Comprimir carpeta de archivos estáticos
tar -zcf client.tar.gz public/ src/ next-env.d.ts next.config.js package.json tsconfig.json yarn.lock

# Enviar archivos al servidor remoto
scp client.tar.gz ${REMOTE_SERVER}:~/app/

# Elimina archivos residuales
rm client.tar.gz

# entrar al servidor por consola ssh
ssh ${REMOTE_SERVER} <<ENDSSH

# Ingresa a la carpeta de archivos
cd ~/app/

yarn 

# Descomprime el .tar dentro de la carpeta
tar -zxf client.tar.gz

# Elimina archivos residuales
rm client.tar.gz

yarn build

nohup yarn start &


ENDSSH
