# Running
  1. Install Node.js, MongoDB
  2. Install all dependencies
  
      ``` npm install ```
  
  3. Run service with development environment
  
      ``` npm run dev ```
  
# Testing
  Running test with Mocha and Chai
  
   ``` npm test ```
  
# Endpoints
  1. Get all articles
  
  * ``` GET / ```
    
    RETURN ``` 200 ``` WITH all articles in database 
    
    RETURN ``` 404 ``` WHEN have no articles in database
    
    ---
    
  2. Search articles
  * ``` GET /?category={value}&subject={value} ```
    
    or ``` GET /?subject={value}&category={value} ```
    
    RETURN ``` 200 ``` WITH search results
    
    RETURN ``` 404 ``` WHEN has no result
    
    ---
   
  3. Create new article
  * ``` POST / ```
    ```
    /* Example of Request Body */
    {
      title: 'REVIEW SOA',
      subject: 'SOA and SERVICE PROGRAMMING',
      category: 'Faculty',
      author: 'Phanupong R.',
      description: 'อาจารย์สอนสนุก ลุกนั่งสบาย',
      grade: 'B+',
      midterm: 3,
      attendance: 1,
      groupWorker: 5,
      difficulty: 4,
    }
    ```
  
    RETURN ``` 201 ``` WITH success message
    
    RETURN ``` 400 ``` WHEN missing some parameter to create article WITH success message
    
    ---
    
  4. Select single article
  * ``` GET /:ARTICLE_ID ```
  
    RETURN ``` 200 ``` WITH selected article
    
    RETURN ``` 400 ``` WHEN using wrong url
    
    RETURN ``` 404 ``` WHEN has no selected article
    
    ---
    
  5. Add comment to selected article
  * ``` POST /:ARTICLE_ID ```
  
    ```
    /* Example of Request Body */
    {
      comment: [{
        content: 'เห็นด้วยครับ',
        star: 4,
        profileId: 59070131,
      }]
    }
    ```
  
    RETURN ``` 201 ``` WITH success message
    
    RETURN ``` 400 ``` WHEN using wrong url
    

