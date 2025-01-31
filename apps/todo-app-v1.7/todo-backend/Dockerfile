FROM node:18.8.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

CMD [ "node", "index.js" ]