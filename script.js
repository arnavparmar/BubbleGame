var timer=60;
var score=0;
var hitrn=0;;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function newHit(){
    hitrn= Math.floor(Math.random()*10)
     document.querySelector("#hitval").textContent= hitrn;
 }
function makeBubble(){
    var clutter = "";
for(var i = 1; i<=126; i++){
    var rn=Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML = clutter;

}
function runTimer(){
    
    var interval = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timeval").textContent=timer;
        
    }else{
        clearInterval(interval)
        document.querySelector("#pbottom").innerHTML=`<h1>Game Over</h1>`;
    }
}
,1000);
   
} 
document.querySelector("#pbottom")
.addEventListener("click", function(dets){
var clickedNumber = Number(dets.target.textContent); //number function to convert string into number as dets.target.textcontent giving string value.//
if(clickedNumber===hitrn){
    increaseScore();
    makeBubble();
    newHit();
}
})
newHit();
makeBubble();
runTimer();
