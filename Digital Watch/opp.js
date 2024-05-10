
function displayTime(){
    var now= new Date();
    var hours= now.getHours();
    var minutes= now.getMinutes();
    var second= now.getSeconds();

    var am_or_pm="AM"

    if(hours>12){
        am_or_pm="PM"
    }
    if(hours>12){
        hours=hours-12
    }
    if(hours<10){
        hours='0'+hours;
    }
    if(minutes<10){
        minutes='0'+minutes;
    }
    if(second<10){
        second='0'+second;
    }

    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=second;
    document.getElementById("shift").innerHTML=am_or_pm;
}

setInterval(displayTime, 1000);