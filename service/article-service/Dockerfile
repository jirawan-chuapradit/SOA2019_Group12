FROM node:11.13.0
WORKDIR /src
COPY . .
EXPOSE 8000
RUN npm install
CMD ["npm", "start"]

# docker image build -t earthz306307/g12-article .
# docker login
# docker image push earthz306307/g12-article

# docker container run -d -p 80:8000 g12-article