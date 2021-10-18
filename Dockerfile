FROM node:16.11.1-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci -qy

COPY . .

EXPOSE 5000

CMD ["npm", "start"]