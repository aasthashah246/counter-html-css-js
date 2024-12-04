let start = document.getElementById("start");
let pause = document.querySelector("#pause");
let restart = document.querySelector("#restart");
let label = document.querySelector("#mylabel");

let h=0;
let sec=0;
let min=0;
let ok;
let al=start.onclick=function(){

    ok=setInterval(st,1000); 
    function st(){if(sec<59){
        sec+=1;
    
    }
    else if(min<59 || sec == 60){
        min+=1;
        sec=0;
    }
    else if(h<59 || min == 60){
        h+=1;
        min=0;
        sec=0;
    
    }
    
    label.innerHTML=`${format(h)}:${format(min)}:${format(sec)}`;
    function format(time){
        let sm = time.toString();
        return sm.length < 2 ? "0" + time : time ;
    }
}  
}
pause.onclick=function(){
    clearInterval(ok);
  
}
restart.onclick=function(){
    h=0;
    sec=0;
    min=0;
    al;
}