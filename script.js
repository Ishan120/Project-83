//make canvas and ctx variable
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
//make mouse event and last_x &last_y

var last_x ,last_y
//add event listeners and make funtions
if(screen.width<997){
  canvas.width=screen.width-30
  canvas.height=screen.height-30
  document.body.style.overflow="hidden"
}

//mousedown
canvas.addEventListener("touchstart",down)
function down(e){
last_x=e.touches[0].clientX-canvas.offsetLeft
last_y=e.touches[0].clientY-canvas.offsetTop
}

//mousemove
radius=40
canvas.addEventListener("touchmove",move)
function move(e){
  console.log(e)
  //current_x and current_y
 currentX=e.touches[0].clientX-canvas.offsetLeft
 currentY=e.touches[0].clientY-canvas.offsetTop
//if condition
{
  //pen
 ctx.beginPath();
//set color
ctx.strokeStyle = "red";
//width of pen
 ctx.lineWidth = 3;
//make a line (moveTo and lineTo)
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
//draw
ctx.stroke();
}


//give value to last-x and last y
last_x=currentX
last_y=currentY
}