/*jshint esversion: 6 */
window.addEventListener("deviceorientation", handleOrientation, true);
var test;
$(document).ready(()=>{
  $("#p1").click(()=>{$("#pageone").css("visibility","hidden");$("#pagetwo").css("visibility","visible");/*test=120;*/});
  $("#p2").click(()=>{$("#pagetwo").css("visibility","hidden");$("#pageone").css("visibility", "visible");});
});

var bubble = document.querySelector(".bubble");// create variable bubble
var spiritbalancer = document.querySelector(".spiritbalancer");//create variable spiritbalancer
var output = document.querySelector(".output");// create variable out
var target = document.querySelector(".target");//create variable target

var maxX = spiritbalancer.clientWidth - bubble.clientWidth;//create variable maxX and substarcts the bubble width
var maxY = spiritbalancer.clientHeight - bubble.clientHeight;//create variable maxY and substarcts the bubble height

function handleOrientation(event) {
  var x = event.beta; // the range [-180,180]
  var y = event.gamma; //the range [-90,90]

  
  x = Math.round(x ,-1);// round X Coordinates figures down
  y = Math.round(y ,-1);// round Y Coordinatesfigures down

  output.innerHTML = " X : " + x + "\n";//Displays coordinates X on screen
  output.innerHTML += " Y: " + y + "\n";//Displays coordinates Y on screen

  
  // We constrain the x value to the range [-90,90], because we dont want the device upside down
  if (x > 90) {x = 90;}
  if (x < -90) {x = -90;}
  if (y > 90) {y = 90;}
  if (y < -90) {y = -90;}

  // shift the range of x and y to [0,180]
  x += 90;
  y += 90;

  if(test==0){
    bubble.style.top = maxY * x / 150 - 30 + "px";// 30 is half the size of the ball
    bubble.style.left = maxX * y / 150 - 30 + "px";// It centre the positioning point to the center of the ball
  }
  else{

    bubble.style.top = test+"px";
    bubble.style.left = test+"px";
    test=0;
  }
  

}
