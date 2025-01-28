var timer = 10;
var score = 0;
var hitrn


function increaseScore(){
    score+=10;
    document.querySelector("#scorevalue").textContent=score;
}


function bubble(){
    var clutter ="";

for(var i =1;i<=176;i++){
    var num = Math.floor(Math.random()*10);
 clutter += `<div id="bubble">${num}</div>`;
}

document.querySelector("#pbottom").innerHTML = clutter;

}

function getNewHit(){
    hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=hitrn;
}



function runTimer(){
 var timerinterval = setInterval(function(){
    if (timer>0){
        timer--;
        document.querySelector("#timervalue").textContent=timer;
    }
    else{
        clearInterval(timerinterval);
        document.querySelector("#pbottom").innerHTML = `<h1>Game Over <br> Your Score is ${score}</h1> <br> <button onclick="reload()" id="btn">Restart</button>`;
        document.querySelector("#btn").addEventListener("click",function(){
            location.reload()
        })
    }
    
 },1000)
}

document.querySelector("#pbottom").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent)
    if(clickedNum == hitrn){
        timer=10;
        increaseScore()
        bubble()
        getNewHit()
        
    }
   else{

    timer = 0;
    document.querySelector("#timervalue").textContent=timer;
    
    document.querySelector("#pbottom").innerHTML = `<h1>Game Over <br> Your Score is ${score}</h1> <br> <button onclick="reload()" id="btn">Restart</button>`;
    document.querySelector("#btn").addEventListener("click",function(){
        location.reload()
    })

    }
})


runTimer()
bubble()
getNewHit()
