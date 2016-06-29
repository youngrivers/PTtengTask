/**
 * Created by youngrivers on 2016/4/21.
 */
    window.onload=function(){
        var banner=document.getElementById("banner");
        var bannerList=document.getElementById("banner-list");
        //获取按钮
        var bannerButton=document.getElementById("banner-button").getElementsByTagName("span");
        var bannerLeft=document.getElementById("banner-left");
        var bannerRight=document.getElementById("banner-right");
        var index=1;
        var animated=false;
        var timer;
        bannerLeft.onclick=function(){
            if(index==1){
                index=4;
            }else{
                index -= 1;
            }
            showButton();
            if(!animated){
                animate(1349);
            }
        };
        bannerRight.onclick=function(){
            if(index==4){
                index=1;
            }else{
                index += 1;
            }
            showButton();
            if(!animated){
                animate(-1349);
            }
        };
        for(var i=0;i<bannerButton.length;i++){
            bannerButton[i].onclick=function(){
                if(this.className=="active"){//点击当前页面对应角标，以下函数不执行
                    return;
                }
                var myIndex=parseInt(this.getAttribute("index"));//getAttribute获取容器里的值，得到当前角标
                var offset=-1349*(myIndex-index);
                index=myIndex;//更新index
                showButton();
                if(!animated){
                    animate(offset);
                }
            }
        }
        //函数的封装
        //点击左右箭头图片移动(此处实现无限循环)
        function animate(offset){
            animated=true;
            var newLeft=parseInt(bannerList.style.left)+offset;//parseInt将字符串转变成数字
            var time=600;//位移总时间
            var interval=10;//位移间隔时间
            var speed=offset/(time/interval);//每次位移量

            function go(){
                if((speed<0&&parseInt(bannerList.style.left)>newLeft)||(speed>0&&parseInt(bannerList.style.left)<newLeft)){
                    bannerList.style.left=parseInt(bannerList.style.left)+speed+"px";
                    setTimeout(go,interval);
                }
                else{
                    animated=false;
                    bannerList.style.left=newLeft+"px";
                    if(newLeft>-1349){
                        bannerList.style.left=-5396+"px";
                    }
                    if(newLeft<-5396){
                        bannerList.style.left=-1349+"px";
                    }
                }
            }
            go();
        }
        //图片移动下方按钮变化
        function showButton(){
            for(var i=0;i<bannerButton.length;i++){
                if(bannerButton[i].className=="active"){
                    bannerButton[i].className="";
                }
            }
            bannerButton[index-1].className="active";
        }
        //自动切换
        function play(){
            timer=setInterval(function(){
                bannerRight.onclick();
            },6000)
        }
        function stop(){
            clearInterval(timer);
        }
        banner.onmouseover=stop;
        banner.onmouseout=play;
        play();
    };