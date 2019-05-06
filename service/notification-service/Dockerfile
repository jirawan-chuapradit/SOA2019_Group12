FROM node:12.0.0-alpine
WORKDIR /src
COPY . .
EXPOSE 5051
RUN npm install

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait 
RUN chmod +x /wait

CMD /wait && npm start