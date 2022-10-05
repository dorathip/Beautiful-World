
window.onload = init;

function init() {
    // access the canvas element and its context
     var canvas = document.getElementById("testCanvas");
     var context = canvas.getContext("2d");
   
     // create a linear gradient
     var gradient = context.createLinearGradient(25, 25, 1550, 200);
     gradient.addColorStop(0,   "#FF0000");
     gradient.addColorStop(0.33, "#00FF00");
     gradient.addColorStop(0.66, "#FF69B4");
     gradient.addColorStop(1,   "#0000FF");
      
     context.fillStyle = gradient;
   
     // fill a rectangle
     context.fillRect(25, 25, 1550, 150);
   
   
     context.clearRect(25, 75, 1550, 50);
     // draw filled text
     context.font = "30px serif";
     context.textAlign = "left";
     context.fillText("BEAUTIFUL WORLD", 600, 110);
    
}
 
 
 