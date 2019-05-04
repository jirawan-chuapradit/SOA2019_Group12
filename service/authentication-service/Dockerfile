FROM node:latest
WORKDIR /src
COPY . .
EXPOSE 5000
RUN apt-get update && apt-get install -y build-essential && apt-get install -y python && npm install
CMD ["npm", "start"]