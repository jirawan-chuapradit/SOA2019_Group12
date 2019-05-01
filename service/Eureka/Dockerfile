FROM openjdk:8-jdk-alpine

VOLUME /tmp

EXPOSE 8761

ARG JAR_FILE=target/eureka_server.jar

ADD ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app.jar"]