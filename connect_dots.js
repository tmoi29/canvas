//Tiffany Moi
//SoftDev2 pd7
//K0 
//2018-02-05

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var toggle_btn = document.getElementById("toggle");
var clear_btn = document.getElementById("clear");

var toggle = true;

var x = 0;
var y = 0;
var start = true;

ctx.fillStyle = "#42ddc3";

var clear = function(e){
    e.preventDefault();
    ctx.clearRect(0,0,c.width,c.height);
    start = true;
};


var draw = function(e){
    var x_new = e.offsetX;
    var y_new = e.offsetY;
    if (start){
	x = x_new;
	y = y_new;
	start = false;
    }

    ctx.beginPath();
    ctx.moveTo(x,y);

    ctx.lineTo(x_new,y_new);
    ctx.stroke();
    ctx.closePath();

    
    if (toggle){
        ctx.fillRect(x_new, y_new, 20, 20);
    }  
    else{
        ctx.beginPath();
        ctx.arc(x_new, y_new, 10, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    x = x_new;
    y = y_new;
    
};

var flip = function(){
    toggle = !(toggle);
    console.log(toggle);
};

c.addEventListener("click", draw);
toggle_btn.addEventListener("click", flip);
clear_btn.addEventListener("click", clear);
