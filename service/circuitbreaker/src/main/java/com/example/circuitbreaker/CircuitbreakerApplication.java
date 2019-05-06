package com.example.circuitbreaker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;


@EnableCircuitBreaker
@RestController
@SpringBootApplication
public class CircuitbreakerApplication {

	@Autowired
	private ArticleService articleService;
	
	

    @Bean
    public RestTemplate rest(RestTemplateBuilder builder) {
        return builder.build();
    }

    @PostMapping("/addmatching-service")
    public String postNewArticle() {
        return articleService.testCallNew();
	}

	@PutMapping("/editmatching-service")
    public String postEditArticle() {
        return articleService.testCallEdit();
	}

	
	public static void main(String[] args) {
		SpringApplication.run(CircuitbreakerApplication.class, args);
	}

}
