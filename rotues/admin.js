/*管理员配置*/
var mongoose=require('mongoose');
var uri='mongodb://localhost/adminmanagement';
mongoose.connect(uri);
var adminUserSchema=new mongoose.Schema({
	adminUserId:{type:String,unique:true},
	adminUserName:String,
	adminUserPwd:String,
	adminUserAge:String,
	adminUserSex:String,
	adminUserImg:String,
	adminUserEmail:String,
	adminUserRegtime:Date
});
/*管理员操作管理*/
var Adminuser=mongoose.model('Adminuser',adminUserSchema);
/*管理员注册*/
exports.adminregister=function(req,res){
	var adminUser=new Adminuser({
		adminUserId:req.body.adminUserId,
		adminUserName:req.body.adminUserName,
		adminUserPwd:req.body.adminUserPwd,
		adminUserAge:'',
		adminUserSex:'',
		adminUserImg:'',
		adminUserEmail:'',
		adminUserRegtime:new Date()
	});
	adminUser.save(function(err,doc){
		if (err) {
			console.log('错误：'+err)
		}else{
			res.json({code:100})
		}
	});
	console.log(req.body);
}
exports.aaaa = function(req,res){
	Adminuser.find({},function(err,doc){
		if(err){
			console.log(err)
		}
		else{
			console.log(doc)
		}
	})
}
/*管理员登录*/
exports.adminlogin=function(req,res){
	var adminUserId={adminUserId:req.body.adminUserId};
	var adminUserPwd=req.body.adminUserPwd;
	Adminuser.find(adminUserId,function(err,doc){
		if (err) {
			console.log(err);
		}else{
			if(doc[0].adminUserPwd==adminUserPwd){
				res.json({code:100,msg:doc[0]._id});
			}
			else if(doc[0]== undefined){
				res.json({code:103});
			}else{
				res.json({code:102});
			}
		}
});
}

/*管理员信息查找*/
exports.adminfind=function(req,res){
	var id=req.body.id;
	Adminuser.findById(id,function(req,res){
		if (err) {
			console.log(err);
		}else{
			console.log(doc);
		}
	})
}

/*管理员信息更新*/
exports.adminupdate=function(req,res){
	var adminUserup=new Adminuser({
		adminUserId:req.body.adminUserId,
		adminUserName:req.body.adminUserName,
		adminUserAge:req.body.adminUserAge,
		adminUserSex:req.body.adminUserSex,
		adminUserImg:req.body.adminUserImg,
		adminUserEmail:req.body.adminUserEmail
	});
	Adminuser.update({adminUserId:adminUserId},adminUserup,function(err,doc){
		if (err) {
			console.log(err)
		}else{
			res.json({code:101})
		}
	});
}