FROM node:18.16-alpine

WORKDIR /app

RUN apk add --no-cache postgresql-client

COPY package*.json ./
RUN npm install

COPY . .

CMD npx prisma migrate deploy && npx prisma generate && npm run build && npm run start:prod
