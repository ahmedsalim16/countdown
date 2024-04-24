var CountDownDate=new Date('june 10,2024 00:00:00').getTime();
var x=setInterval(function(){
var now=new Date().getTime();
var distance=CountDownDate-now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);



document.getElementById("days").innerHTML=days
document.getElementById("hours").innerHTML=hours
document.getElementById("minutes").innerHTML=minutes
document.getElementById("seconds").innerHTML=seconds


if(distance<0){
    clearInterval(x);
    document.getElementById("days").innerHTML="00"
    document.getElementById("hours").innerHTML="00"
    document.getElementById("minutes").innerHTML="00"
    document.getElementById("seconds").innerHTML="00"

}

},1000)





var CountDownDate2=new Date('juli 20,2024 00:00:00').getTime();
var x2=setInterval(function(){
var now2=new Date().getTime();
var distance2=CountDownDate2-now2;

var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);



document.getElementById("days2").innerHTML=days2
document.getElementById("hours2").innerHTML=hours2
document.getElementById("minutes2").innerHTML=minutes2
document.getElementById("seconds2").innerHTML=seconds2


if(distance2<0){
    clearInterval(x2);
    document.getElementById("days2").innerHTML="00"
    document.getElementById("hours2").innerHTML="00"
    document.getElementById("minutes2").innerHTML="00"
    document.getElementById("seconds2").innerHTML="00"

}

},1000)