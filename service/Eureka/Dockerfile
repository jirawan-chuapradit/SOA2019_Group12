FROM maven:3.6.0-jdk-8-alpine as step1
WORKDIR /work
COPY . .
RUN mvn package

FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8761
ARG JAR_FILE=target/eureka_server.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app.jar"]

# docker image build -t earthzphanu/eureka_server .
# docker login
# docker image push earthzphanu/eureka_server

# docker container run -d -p 8761:8761 eureka_server