//Image SlideShow

var popup1=document.getElementById("popup1"),
popup2=document.getElementById("popup2"),
popup3=document.getElementById("popup3"),
popup4=document.getElementById("popup4"),
popup5=document.getElementById("popup5"),
popup6=document.getElementById("popup6");
var currentImageIndex=1;

function imgSlideShow(){
    document.getElementById("popup"+currentImageIndex).style.display = "none";
    currentImageIndex++;
    if(currentImageIndex>6){
        currentImageIndex=1;
    }
    document.getElementById("popup" + currentImageIndex).style.display = "block";
}
setInterval(imgSlideShow,2000);

//Digital Clock
function digiClock(){
    var data=new Date();
    document.getElementById("hours").innerHTML = (data.getHours()<10?"0":"")+data.getHours();
    document.getElementById("minutes").innerHTML = (data.getMinutes()<10?"0":"")+data.getMinutes();
    document.getElementById("seconds").innerHTML = (data.getSeconds()<10?"0":"")+data.getSeconds();
    document.getElementById("ampm").innerHTML = data.getHours()>12?"PM":"AM";
    waterRemind(data.getHours(),data.getMinutes(),data.getSeconds());
    mealRemind(data.getHours(),data.getMinutes(),data.getSeconds());
}
setInterval(digiClock,1000);

//Diet Plan Table Show
function dietPlan(){
    document.getElementById("table").style.display = "block";
}

// Diet Plan Table Close
function closed(){
    document.getElementById("table").style.display = "none";
}

//Water Reminder
function waterRemind(currentHours,currentMinutes,currentSeconds){
    if(currentHours===7 &&currentMinutes===0 && currentSeconds===0){
        alert("Good morning! Time to drink 250-300 ml of water to start your day hydrated.");
    }
    else if(currentHours===9 && currentMinutes===30 && currentSeconds===0){
        alert("Hydration check! Drink 250-300 ml of water to keep refreshed.");
    }
    else if(currentHours===12 && currentMinutes===30 && currentSeconds===0){
        alert("Don't forget your water! Have 250-300 ml before or after lunch.");
    }
    else if(currentHours===15 && currentMinutes===0 && currentSeconds===0){
        alert("Stay hydrated! Drink 250-300 ml of water to keep your energy up.");
    }
    else if(currentHours===18 && currentMinutes===30 && currentSeconds===0){
        alert("Almost dinner time! Drink 250-300 ml of water to stay refreshed.");
    }
    else if(currentHours===20 &&currentMinutes===0 && currentSeconds===0){
        alert("End your day hydrated! Drink 250-300 ml of water before winding down.");
    }
}
waterRemind();

//Meal Reminder
function mealRemind(currentHours,currentMinutes,currentSeconds){
    if(currentHours === 7 && currentMinutes === 0 && currentSeconds === 0) {
        alert("Good morning! It's time for breakfast. Have a healthy start to your day!");
    }
    else if(currentHours === 13 && currentMinutes === 0 && currentSeconds === 0) {
        alert("Time for lunch! Take a break and enjoy your meal.");
    }
    else if(currentHours === 18 && currentMinutes === 30 && currentSeconds === 0) {
        alert("Dinner time! Enjoy a nice, balanced dinner.");
    }
}
mealRemind();