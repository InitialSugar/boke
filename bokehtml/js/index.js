    //收藏
     function AddFavorite(title, url) {
        try {
            window.external.addFavorite(url, title);
        }
        catch (e) {
            try {
                window.sidebar.addPanel(title, url, "");
            }
            catch (e) {
                alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
            }
        }
    }
    // 登录
    var shade=document.getElementById('shade');
    function loginingnow(){
        var logining=document.getElementById('logining');
        logining.style.display='block';
        shade.style.display='block';
    }

    // 关闭登录
    var closeLogin=document.getElementById('closeLogin');
    closeLogin.onclick=function(){
        logining.style.display='none';
        shade.style.display='none';
    }

    // 注册
    function registernow(){
        var registering=document.getElementById('registernow');
        registering.style.display='block';
        shade.style.display='block';
    }

    // 取消注册
    var backNow=document.getElementById('backing');
    backNow.onclick=function(){
        var registering=document.getElementById('registernow');
        registering.style.display='none';
        shade.style.display='none';
    }