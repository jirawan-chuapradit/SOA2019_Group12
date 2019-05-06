package com.example.circuitbreaker;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import java.net.URI;


@Service
public class ArticleService {
    private final RestTemplate restTemplate;

    public ArticleService(RestTemplate rest) {
        this.restTemplate = rest;
    }

    @HystrixCommand(fallbackMethod = "reliable")
    public String testCallNew() {
        URI uri = URI.create("http://matching:5050/matching/addMatchingSubject");
        return this.restTemplate.getForObject(uri, String.class);
    }

    @HystrixCommand(fallbackMethod = "reliable")
    public String testCallEdit() {
        URI uri = URI.create("http://matching:5050/matching/editMatchingSubject");
        return this.restTemplate.getForObject(uri, String.class);
    }

    public String reliable() {
        return "Matching Service unavailable please try again";
    }
}