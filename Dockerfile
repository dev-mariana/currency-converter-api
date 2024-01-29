FROM node:18 

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 3000

ENV NODE_ENV production

RUN npm run build

CMD [ "npm", "run", "start:prod" ]