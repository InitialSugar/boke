var imgList = document.getElementById('imgList');
var imgOne=imgList.getElementsByTagName('li'); 
var dot=document.getElementById('dot');
var dotList=dot.getElementsByTagName('li');
var go = null;
var i=0;
var a=0.1;
var b=-1;
var c=1;
var d=0;
function checkImgs(){
	a=a+0.05;
	c=c-0.05;
	if(a<=1.5){
		imgOne[i].style.opacity=a;
		dotList[i].style.background='#5e99e2';
		if(b>-1){
			imgOne[b].style.opacity=c;
			dotList[b].style.background='#9ec9ff';
		}
	}else{
		a=0;b=i;i++;
	}
	if(i>4){
		i=0;
	}
}
go = setInterval(checkImgs,100)
imgList.onmousemove=function(){
	clearInterval(go);
}
imgList.onmouseleave=function(){
	clearInterval(go);
	go = setInterval(checkImgs,100)
}
dot.onclick=function(e){
	var target=e.target;
	clearInterval(go);
	for(var i=0;i<dotList.length;i++){
		if(dotList[i]==target){
			for(var f=0;f<dotList.length;f++){
				imgOne[f].style.opacity=0;
				dotList[f].style.background='#9ec9ff';
			}
			imgOne[i].style.opacity=1;
			dotList[i].style.background='#5e99e2';
			d=i;
		}
	}
}
dot.onmouseleave=function(){
	clearInterval(go);
	i=d;
	go = setInterval(checkImgs,100)
}