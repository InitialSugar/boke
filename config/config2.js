/*文章管理配置*/
var mongoose=require('mongoose');
var uri='mongodb://localhost/addArticle';
mongoose.connect(uri);
var addArticleSchema=new mongoose.Schema({
	addArticletit:String,
	addArticleAuth:String,
	addArticlecont:String,
	addArticleTime:new Date()
});
mongoose.model('AddArticle',addArticleSchema);

