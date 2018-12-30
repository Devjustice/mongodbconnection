/**
 * http://usejsdoc.org/
 */
var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

mongoose.connect("mongodb://아이디:비번@dsxxxxxx.mlab.com:xxxx/boardtest", { useNewUrlParser: true });
var db = mongoose.connection;
db.once("open",function(){
	console.log("DB CONNECTED");
});
db.on("ERROR",function(err){
console.log("DB ERROR",err);	
	
});
app.set("view engin",'ejs');
app.use(express.static(path.join(__dirname,'public')));
var data={count:0};
app.get('/',function (req,res){
	data.count++;
	res.render('my_first_ejs',data)
});
