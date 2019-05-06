package com.example.circuitbreaker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.bind.annotation.GetMapping;

@EnableCircuitBreaker
@RestController
@SpringBootApplication
public class CircuitbreakerApplication {

	@Autowired
	private ArticleService articleService;
	
	@Autowired
	private MatchingService matchingService;

	@Autowired
	private AuthService authService;

    @Bean
    public RestTemplate rest(RestTemplateBuilder builder) {
        return builder.build();
    }

    @GetMapping("/article-service")
    public String getArticle() {
        return articleService.testCall();
	}

	@GetMapping("/matching-service")
	public String getMatching(){
		return matchingService.testCall();
	}

	@GetMapping("/auth-service")
	public String getAuth(){
		return authService.testCall();
	}

	
	
	public static void main(String[] args) {
		SpringApplication.run(CircuitbreakerApplication.class, args);
	}

}
