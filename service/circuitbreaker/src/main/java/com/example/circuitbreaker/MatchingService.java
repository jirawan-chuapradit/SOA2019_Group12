package com.example.circuitbreaker;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import java.net.URI;


@Service
public class MatchingService {
    private final RestTemplate restTemplate;

    public MatchingService(RestTemplate rest) {
        this.restTemplate = rest;
    }

    @HystrixCommand(fallbackMethod = "reliable")
    public String testCall() {
        URI uri = URI.create("http://localhost:5050/matching");
        return this.restTemplate.getForObject(uri, String.class);
    }

    public String reliable() {
        return "Matching Service unavailable please try again";
    }
}