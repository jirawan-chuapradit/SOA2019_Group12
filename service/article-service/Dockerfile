FROM node:12.0.0-alpine
WORKDIR /src
COPY . .
EXPOSE 8000
RUN npm install
CMD ["npm", "start"]

# docker image build -t earthzphanu/article_service .
# docker login
# docker image push earthzphanu/article_service

# docker container run -d -p 80:8000 article_service