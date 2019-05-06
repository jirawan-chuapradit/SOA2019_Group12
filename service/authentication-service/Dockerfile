FROM node:11.13.0
WORKDIR /src
COPY . .
EXPOSE 5000
RUN npm install

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait 
RUN chmod +x /wait

CMD /wait && npm start