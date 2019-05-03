FROM node:12.0.0-alpine
WORKDIR /src
COPY . .
EXPOSE 3000
RUN npm install
CMD ["npm", "start"]

# docker image build -t earthzphanu/api_gateway .
# docker login
# docker image push earthzphanu/api_gateway

# docker container run -d -p 80:3000 earthzphanu/api_gateway