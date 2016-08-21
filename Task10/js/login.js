/**
 * Created by youngrivers on 2016/8/21.
 */
(function () {
    var oLi=document.getElementsByClassName("login-box")[0].getElementsByTagName("li");
    var oBox=document.getElementsByClassName("login-box-content");
    /*for(var i=0;i<oLi.length;i++){
        oLi[i].onclick=function () {
            oLi[0].className="login-on"
        }
    }*/

    oLi[0].onclick=function () {
        oLi[0].className="";
        oLi[1].className="login-on";
        console.log(oBox[0]);
        oBox[0].className="login-box-content";
        oBox[1].className="login-box-content login-hide";
    };
    oLi[1].onclick=function () {
        oLi[1].className="";
        oLi[0].className="login-on";

        oBox[0].className="login-box-content login-hide";
        oBox[1].className="login-box-content";
    };
    /*s标签*/
    /*var loginS=document.getElementsByClassName("checked")[0];
    loginS.onclick()=function () {
        this.style.backgroundImage="url('../images/checked_07.png')";
    }*/
})();