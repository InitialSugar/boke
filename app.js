var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var multipart=require('connect-multiparty');
var multipartMiddleware=multipart();
var Adminuser=require('./rotues/admin.js');
app.use(multipart({uploadDir:'./bokehtml/images/userimg'}));
app.use(express.static('bokehtml'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/',function(req,res){
	res.redirect('admin/adminlogin.html');
});
app.post('/adminregister',Adminuser.adminregister);
app.post('/adminlogin',Adminuser.adminlogin);
app.post('/adminupdate',Adminuser.adminupdate);
app.post('/tpmdata',multipartMiddleware,function(req,res){
	console.log(req.files.myfile);
	res.json({src:req.files.myfile.path});
});
app.listen('8080',function(){
	console.log('服务器启动成功，端口号8080')
})