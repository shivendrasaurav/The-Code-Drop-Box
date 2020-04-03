function lightmode(){
    document.getElementById("body").style.background=("#dedede");
    document.getElementById("body").style.color=("black");
    document.getElementById("light").style.display=("none");
    document.getElementById("dark").style.display=("block");
    var a=document.getElementsByClassName("skeumorphic");
    var i;
    for(i=0; i<a.length; i++){
        a[i].style.boxShadow=("2px 2px 8px #000, -2px -2px 8px #fff");
    }
}

function darkmode(){
    document.getElementById("body").style.background=("#1e1e1e");
    document.getElementById("body").style.color=("#ddd");
    document.getElementById("dark").style.display=("none");
    document.getElementById("light").style.display=("block");
    var a=document.getElementsByClassName("skeumorphic");
    var i;
    for(i=0; i<a.length; i++){
        a[i].style.boxShadow=("2px 2px 8px #000, -2px -2px 8px #444");
    }
}