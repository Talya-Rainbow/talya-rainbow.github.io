let canvas=document.getElementById("game-canvas") 
let ctx=canvas.getContext("2d")
canvas.height=400
canvas.width=600
ctx.fillStyle="#7CDCFE"
ctx.fillRect(0,0,canvas.width,canvas.height)
ctx.fillStyle="#FBE8D1"
ctx.fillRect(50,50,25,15);
ctx.fillRect(300,200,12000000,9000)