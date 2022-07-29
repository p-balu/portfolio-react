FROM node:latest as build
ENV NODE_ENV development

WORKDIR /app
COPY package.json .
COPY . .

RUN npm install && npm run build

EXPOSE 3000
CMD [ "npm", "start" ]