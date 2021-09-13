FROM node:14

WORKDIR /app

COPY . .

RUN ls -a

RUN npm install

EXPOSE 3333

CMD [ "npm", "run-script", "dev:server" ]
