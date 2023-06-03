const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', function(req,res){
  res.render('login')
})

app.get('/register', function(req,res){
  res.render('registration')
})

app.get('/register/student-register', function(req,res){
  res.render('student/student-registration')
})

app.get('/register/teacher-register', function(req,res){
  res.render('teacher/teacher-registration')
})

app.get('/admin-login', function(req,res){
  res.render('admin-login')
})

app.get('/admin-login/admin-home', function(req,res){
  res.render('admin/admin-home')
})

app.get('/student-home', function(req,res){
  res.render('student/student-home')
})

app.get('/teacher-home', function(req,res){
  res.render('teacher/teacher-home')
})









app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  