/*管理员配置*/
var mongoose=require('mongoose');
var uri='mongodb://localhost/adminUser';
mongoose.connect(uri);
var adminUserSchema=new mongoose.Schema({
	adminUserId:{type:String,unique:true},
	adminUserName:String,
	adminUserPwd:String,
	adminUserAge:String,
	adminUserSex:String,
	adminUserEmail:String
});
mongoose.model('Adminuser',adminUserSchema);