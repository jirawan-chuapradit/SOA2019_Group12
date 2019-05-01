/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	context = __webpack_require__(1);
	context.keys().forEach(context);
	module.exports = context;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./hello-test.js": 2,
		"./matching-test.js": 4
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var expect = __webpack_require__(3).expect;

	describe('Hello tests', function() {
	  it('Should pass', function() {
	    expect(true).to.be.true;
	  });
	});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("chai");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(5);
	var chai = __webpack_require__(3);
	var expect = chai.expect;
	const should = chai.should();
	const chaiHttp = __webpack_require__(6);
	const server = __webpack_require__(7);

	chai.use(chaiHttp);

	describe("Matcging", () => {
	  describe("should pass", () => {
	    // Test to get subject that match with rank
	    it("Should get subject that match with rank", done => {
	      chai
	        .request(server)
	        .get("/matching")
	        .send({
	          grade: "1",
	          midterm: "1",
	          attendance: "1",
	          groupWorker: "1",
	          difficulty: "1"
	        })
	        .end(function(err, res) {
	          console.log(res.status);
	          console.log(res.body);

	          res.should.have.status(200);
	          res.body.should.be.a("object");
	          done();
	        });
	    }).timeout(15000);

	    // Test Can't find the article suitable for you
	    it("Should GET a empty list with not match", done => {
	      chai
	        .request(server)
	        .get("/matching")
	        .send({
	          grade: "4",
	          midterm: "4",
	          attendance: "4",
	          groupWorker: "5",
	          difficulty: "5"
	        })
	        .end((err, res) => {
	            console.log(res.status);
	            console.log(res.body);
	            res.should.have.status(200);
	            res.body.should.be.a('object');
	            done();
	        });
	    });

	      // Test POST with not exists subject calculate Avg Rank of Subject
	      it("Should POST not exist", done => {
	        chai
	          .request(server)
	          .post("/matching/addMatchingSubject")
	          .send({
	            subject: 'SVV',
	            category: 'Software Engineer',
	            grade: 3,
	            midterm: 3,
	            attendance: 3,
	            groupWorker: 2,
	            difficulty: 5,
	          })
	          .end((err, res) => {
	              console.log(res.status);
	              console.log(res.body);
	              res.should.have.status(200);
	              res.body.should.be.a('object');
	              done();
	          });
	      });
	  });
	});


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("assert");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("chai-http");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var express = __webpack_require__(8)
	var bodyParser = __webpack_require__(9)
	var app = express()
	var mongoose = __webpack_require__(10)
	var PORT = process.env.port || 5050
	const Eureka = __webpack_require__(11).Eureka;

	const matchingSubjectController = __webpack_require__(12)

	// parse application/json
	app.use(bodyParser.json())
	app.use(
	    bodyParser.urlencoded({
	        extended:false
	    })
	)

	const mongoURI = 'mongodb://localhost:27017/subject'

	mongoose
	.connect(mongoURI, {useNewUrlParser: true})
	.then(()=>console.log("MongoDB connected"))
	.catch(err=> console.log(err))



	// Configuration
	const client = new Eureka({
	    // application instance information
	    instance: {
	        app: 'matching-service',
	        hostName: process.env.EUREKA_CLIENT_HOST || 'localhost',
	        ipAddr: '127.0.0.1',
	        statusPageUrl: (process.env.EUREKA_CLIENT_URL || 'http://localhost:') + PORT,
	        vipAddress: 'matching-service',
	        port: {
	            $: PORT,
	            '@enabled': 'true',
	        },
	        dataCenterInfo: {
	            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
	            name: 'MyOwn',
	        },
	        registerWithEureka: true,
	        fetchRegistry: true,
	        leaseRenewalIntervalInSeconds: 1,
	        leaseExpirationDurationInSeconds: 2
	    },
	    eureka: {
	        // Eureka server
	        host: process.env.EUREKA_SERVER_HOST || 'localhost',
	        port: process.env.EUREKA_SERVER_PORT || 8761,
	        servicePath: '/eureka/apps/',
	    },
	});

	client.logger.level('debug');
	client.start((error) => {
	    console.log(error || 'Eureka client started');
	    app.use("/matching", matchingSubjectController)
	});



	app.listen(PORT,() =>{
	    console.log("Index.js is running on port: " + PORT)
	})

	module.exports = app 

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("mongoose");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = require("eureka-js-client");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	const express = __webpack_require__(8);
	const router = express.Router();
	const matchingSubjectService = __webpack_require__(13);

	var bodyParser = __webpack_require__(9);

	/**
	 * parse application/json
	 */
	router.use(bodyParser.json());
	router.use(
	  bodyParser.urlencoded({
	    extended: true
	  })
	);

	/**
	 * route
	 */
	router.get("/", matchingSubjectService.finding);
	router.post("/addMatchingSubject", matchingSubjectService.addSubject);
	// router.get("/test", matchingSubjectService.test)

	router.use((req, res, next) => {
	  console.log("called: ", req.path);
	  next();
	});

	module.exports = router;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	const matchingSubjectDb = __webpack_require__(14);

	/**
	 * Function:  Create Mockup Data
	 * Description: create mock data
	 * Method: run on postman
	 * precondition: must have knowledge about MatchingSubjectSchema
	 * postcondition: subject have been created
	 */
	exports.addSubject = (req, res) => {
	  console.log(req.body);
	  const mathingData = {
	    subject: req.body.subject,
	    category: req.body.category,
	    grade: req.body.grade,
	    midterm: req.body.midterm,
	    attendance: req.body.attendance,
	    groupWorker: req.body.groupWorker,
	    difficulty: req.body.difficulty
	  };

	  matchingSubjectDb
	    .findOne({
	      subject: req.body.subject
	    })
	    .then(subject => {
	      if (!subject) {
	        matchingSubjectDb
	          .create(mathingData)
	          .then(subject => {
	            res
	              .status(200)
	              .json({ status: req.body.subject + " registered!!!" });
	          })
	          .catch(err => {
	            res.send("error: " + err);
	          });
	      } else {
	        //update
	        matchingSubjectDb
	          .update(
	            { subject: mathingData.subject },
	            {
	              $set: {
	                grade: mathingData.grade,
	                midterm: mathingData.midterm,
	                attendance: mathingData.attendance,
	                groupWorker: mathingData.groupWorker,
	                difficulty: mathingData.difficulty
	              }
	            }
	          )
	          .then(function(result) {
	            res.status(200);
	            console.log("update success")
	          })
	          .catch(err => {
	            res.send("error: " + err);
	            console.log(err)
	          });
	      }
	    })
	    .catch(err => {
	      res.send("error: " + err);
	    });
	};

	/**
	 * Function:  searh data
	 */
	exports.finding = (req, res) => {
	  console.log(req.query);

	  matchingSubjectDb
	    .find({
	      grade: { $gt: req.body.grade },
	      midterm: { $gt: req.body.midterm },
	      attendance: { $gt: req.body.attendance },
	      groupWorker: { $gt: req.body.groupWorker },
	      difficulty: { $gt: req.body.difficulty }
	    })

	    .then(subject => {
	      if (!Array.isArray(subject) || !subject.length) {
	        // array does not exist, is not an array, or is empty
	        // ⇒ do not attempt to process array
	        res.status(200).json({
	          status: "Sorry, Can't find the article suitable for you :("
	        });
	      } else {
	        return res.json({ info: subject });
	      }
	    })
	    .catch(err => {
	      res.send("error: " + err);
	    });
	};

	exports.test = (req, res) => {
	  return res.json({
	    test: 1,
	    test2: 2
	  });
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	const mongoose = __webpack_require__(10)
	const Schema = mongoose.Schema

	const MatchingSubjectSchema = new Schema({
	    subject: {
	        type: String,
	        required: true,
	        index: true,
	        unique: true,
	    },
	    category: {
	        type: String,
	        required: true,
	    },
	    grade: {
	        type: Number
	    },
	    midterm: {
	        type: Number
	    },
	    attendance : {
	        type: Number
	    },
	    groupWorker : {
	        type: Number
	    },
	    difficulty: {
	        type: Number
	    }
	})

	module.exports = MatchingSubject = mongoose.model('mathingSubject', MatchingSubjectSchema)

/***/ })
/******/ ]);