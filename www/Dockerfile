FROM node:20-alpine

WORKDIR /app

RUN npm i -g pnpm 

COPY package.json ./
COPY pnpm-lock.yaml ./

COPY . .

RUN pnpm install 

EXPOSE 3030

CMD [ "pnpm", "start:dev" ]