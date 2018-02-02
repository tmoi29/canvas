//Tiffany Moi
//SoftDev2 pd7
//K0 
//2018-02-05

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var toggle_btn = document.getElementById("toggle");
var clear_btn = document.getElementById("clear");

var toggle = true;

ctx.fillStyle = "#42ddc3";

var clear = function(e){
    e.preventDefault();
    ctx.clearRect(0,0,c.width,c.height);
};

var draw = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    if (toggle){
        ctx.fillRect(x, y, 20, 20);
    }  
    else{
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fill();
    }
    
};

var flip = function(){
    toggle = !(toggle);
    console.log(toggle);
};

c.addEventListener("click", draw);
toggle_btn.addEventListener("click", flip);
clear_btn.addEventListener("click", clear);
