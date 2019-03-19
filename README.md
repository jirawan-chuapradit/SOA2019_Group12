# SOA2019_Group12

# วิธีการ Run Service
## Clone Project 
```
git clone https://github.com/jirawan-chuapradit/SOA2019_Group12.git
cd /review_course
```
## Compile & Run
```
mvnw clean package
java -jar target\review_course-0.0.1-SNAPSHOT.jar
```

# Test
```
mvnw test
```

# Deploy

# API & Endpoint
## Article Service
| Endpoint |
|--|
| GET /article      |
| GET /article/rank |
| GET /subject |
| POST /article |
| GET /article/all |
| POST /article/comment |

## Authentication Service
| Endpoint |
|--|
| GET /user |
| POST /user |
