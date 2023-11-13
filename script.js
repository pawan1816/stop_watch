var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;

function start(){
   timer=true;
   stop_watch()
}
function stop(){
   timer=false;
}
function reset(){
timer=false;
hr=0;
sec=0;
count=0;
min=0;
document.getElementById("hr").innerHTML="00";
document.getElementById("sc").innerHTML="00";
document.getElementById("hr").innerHTML="00";
document.getElementById("count").innerHTML="00";
}

function stop_watch(){
   if(timer==true){
    count=count+1;
    if(count>=100){
        sec+=1;
        count=0;
        
    }
    if(sec>=60){
      sec=0;
      min+=1;
      
    }
    if(min>=60){
        min=0;
        hr+=1;
        
    }
    var hrstring=hr;
    var minstring=min;
    var secstring=sec;
    var countstring=count;
    if(hr<10){
        hrstring='0'+hrstring;
    }
    if(min<10){
        minstring='0'+minstring;
    }
    if(sec<10){
        secstring='0'+secstring;
    }
    if(count<10){
        countstring='0'+countstring;
    }
    document.getElementById("sc").innerHTML=secstring;
    document.getElementById("min").innerHTML=minstring;
    document.getElementById("hr").innerHTML=hrstring;
    document.getElementById("count").innerHTML=countstring;
    setTimeout("stop_watch()",10);
   }
}