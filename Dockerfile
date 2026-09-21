FROM node:24.21.0-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci -qy

COPY . .

EXPOSE 5000

CMD ["npm", "start"]