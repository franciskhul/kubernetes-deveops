# Use an official Node.js runtime as a parent image
FROM node:18.8.0

# Set the working directory in the container
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js" ]