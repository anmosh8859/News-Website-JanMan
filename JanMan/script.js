function openNav() {
    document.getElementById("nav").style.height = "100%";
}
function closeNav() {
    document.getElementById("nav").style.height = "0%";
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navi").style.position = "fixed";
        document.getElementById("navi").style.top="0";
        document.getElementById("navi").style.overflow = "visible";
        document.getElementById("logoimg").style.display = "none";
        document.getElementById("logo").style.width="8%";
        document.getElementById("pv").style.display="none";
        document.getElementById("imp").style.marginTop="0";
        document.getElementById("imp").style.width="30%";
        document.getElementById("else").style.float="right";
        document.getElementById("else").style.width="10%";
        var v=document.getElementsByClassName("h1");
        for(var i=0;i<5;i++)
            v[i].style.fontSize="100%";
        document.getElementById("search").style.display="none";
        document.getElementById("open").style.fontSize="100%";
        document.getElementById("all").style.width="100%";
        document.getElementById("ic").style.zIndex="-1";
        document.getElementById("t").style.display="block";
        


    } else {
        document.getElementById("navi").style.overflow = "hidden";
        document.getElementById("navi").style.position = "static";
        document.getElementById("logoimg").style.display = "block";
        document.getElementById("logo").style.width="20%";
        document.getElementById("pv").style.display="block";
        document.getElementById("imp").style.width="40%";
        document.getElementById("imp").style.marginTop="3.5%";
        document.getElementById("else").style.float="left";
        document.getElementById("else").style.width="40%";
        var v=document.getElementsByClassName("h1");
        for(var i=0;i<5;i++)
            v[i].style.fontSize="160%";
        document.getElementById("search").style.display="block";
        document.getElementById("open").style.fontSize="160%";
        document.getElementById("all").style.width="40%";
        document.getElementById("ic").style.zIndex="0";
        document.getElementById("t").style.display="none";
    }
}
function cl(){
    document.getElementById("b").style.display = "none";
}