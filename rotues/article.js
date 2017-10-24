require('../config/config2.js');
var addAticle=new AddArticle({
	addArticletit:req.body.addArticletit,
	addArticleAuth:req.body.addArticleAuth,
	addArticlecont:req.body.addArticlecont
});
Addarticle.save(function(err,doc){
	if (err) {
		alert('提交错误，请稍后重试')
		console.log(err)
	}else{
		console.log(doc)
	}
});
