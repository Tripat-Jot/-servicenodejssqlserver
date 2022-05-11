const { json } = require('express');
var express = require('express');
var router = express.Router();
const sql = require("../dboperation");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('<p><h2>Welcome to Azure by Tripatjot Singh </h2></p> <p><a href="/getdata_withQuery"> Data Extracted from Stored Procedure </a>  <p><a href="/testconnect"> Check Server Connection </a> </p>') ;
});


//test connection
router.get('/testconnect', function(req, res, next) {
  
  sql.getdata();
  // res.render('index', { title: 'Express' });
  res.send ("Server is connected !!!")
  // res.send(result[0]) ;
});


router.get("/getdata_withQuery", function (req, res, next) {
  sql.getdata_withQuery().then((result) => {
    res.json(result[0]);
  });
});


module.exports = router;
