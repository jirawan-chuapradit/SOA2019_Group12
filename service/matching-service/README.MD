# Running

1. Install Node.js, Mongo before running or testing
2. Install all dependencies


``npm install``



3. Run the service with the development environment


``npm install``

# Testing
Running test with Chai and Mocha
``npm test``



# Endpoints
1. Get Articles that match with rank 
``Get /matching ``

Return ``200 OK`` with information of article when given an exists matched rank


Return  ``404 Sorry, Can't find the article suitable for you `` when given non article matched

-------------------

2. Create a subject with infomation from request body
``POST /addMatchingSubject``

```
/* Example of request body */
{
    subject: "ITF30",
          category: "Software Engineer",
          grade: 3,
          midterm: 3,
          attendance: 3,
          groupWorker: 2,
          difficulty: 5
}
```



Return ``201 CREATED`` with article has been created

-----------------------

3. Update a subject with information from request body
``PUT /editMatchingSubject``

```
/* Example of request body */
{
    subject: "Compro",
          category: "Software Engineer",
          grade: 1,
          midterm: 3,
          attendance: 2,
          groupWorker: 5,
          difficulty: 2
}
```

Return ``200 OK`` with information of edited post


Return ``404 NOT FOUND`` if post ID is not exists
