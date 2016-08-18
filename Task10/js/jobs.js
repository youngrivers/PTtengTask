/**
 * Created by youngrivers on 2016/5/29.
 */
var li1=document.getElementById("li1");
var li2=document.getElementById("li2");
var li3=document.getElementById("li3");
var liCol1=document.getElementById("li-col1");
var liCol2=document.getElementById("li-col2");
li1.onclick=function(){/*
    for(var i=1;i<4;i++){
        document.getElementById("li+'i'").style.color="#333";
        document.getElementById("li+'i'").style.borderColor="rgb(192,192,192)";
    }*/
    this.style.color="#ff650e";
    this.style.borderColor="#ff650e";
    liCol1.innerText="从未接触过编程，从其他行业转来，对IT一无所知";
    liCol2.innerText="对于零基础，而又希望进入IT工程师行列的人，css最适合，毕竟css工程师是最容易上手的IT职业，并且现在整个市场也存在巨大的缺口。";
};
li2.onclick=function(){
    this.style.color="#ff650e";
    this.style.borderColor="#ff650e";
    liCol1.innerText="接触过硬件设备，对软件了解不多";
    liCol2.innerText="一般来说。从网管出身的话，转运维几乎是无缝的。网管的发展空间很容易受限，但是如果转做运维，就不一样了。两到三年的运维，薪水在12~20K之间。";
};
li3.onclick=function(){
    this.style.color="#ff650e";
    this.style.borderColor="#ff650e";
    liCol1.innerText="基础知识牢固，思维敏捷已有一定的基础";
    liCol2.innerText="对于科班出身的学霸来说，你拥有很好的基础，但是这并不意味着IT修真这条路就是一帆风顺。确切的说，毕业才算是真正修行的开始，所以，欢迎你挑战一些高难度的职业。";
};