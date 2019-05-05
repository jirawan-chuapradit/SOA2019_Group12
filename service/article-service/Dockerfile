FROM node:10.15.3-alpine
WORKDIR /src
COPY . .
EXPOSE 8000
RUN npm install

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait 
RUN chmod +x /wait

CMD /wait && npm start

# docker image build -t earthzphanu/article_service .
# docker login
# docker image push earthzphanu/article_service

# docker container run -d -p 80:8000 article_service