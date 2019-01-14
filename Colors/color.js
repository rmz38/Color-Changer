document.getElementById('rectangle4').style.visibility = "hidden";
document.getElementById('rectangle5').style.visibility = "hidden";
document.getElementById('rectangle3').style.visibility = "hidden";
document.getElementById('rectangle2').style.visibility = "hidden";

var setting = 1;
document.getElementById("aa").value = '#ffffff';
document.getElementById("b").value = '#ffffff';
document.getElementById("c").value = '#ffffff';
document.getElementById("d").value = '#ffffff';
document.getElementById("e").value = '#ffffff';
var c = document.getElementById("myCanvas");  
var ctx = c.getContext("2d");
var img = document.getElementById("change");
ctx.drawImage(img, 0, 0);
var rects = ['rectangle1','rectangle2','rectangle3','rectangle4','rectangle5'];
document.getElementById("rectangle2").addEventListener("click", function() {
  document.getElementById("b").focus();
  document.getElementById("b").click();
});


document.getElementById("b").onchange = function(){
  document.getElementById("rectangle2").style.backgroundColor = document.getElementById("b").value;
  document.getElementById("rectangle2").title = document.getElementById("b").value;
};

document.getElementById("rectangle1").addEventListener("click", function() {
  document.getElementById("aa").focus();
  document.getElementById("aa").click();
});
document.getElementById("aa").onchange = function(){
  document.getElementById("rectangle1").style.backgroundColor = document.getElementById("aa").value;
  document.getElementById("rectangle1").title = document.getElementById("aa").value;
};
document.getElementById("rectangle3").addEventListener("click", function() {
  document.getElementById("c").focus();
  document.getElementById("c").click();
});
document.getElementById("c").onchange = function(){
  document.getElementById("rectangle3").style.backgroundColor = document.getElementById("c").value;
  document.getElementById("rectangle3").title = document.getElementById("c").value;
};
document.getElementById("rectangle4").addEventListener("click", function() {
  document.getElementById("d").focus();
  document.getElementById("d").click();
});
document.getElementById("d").onchange = function(){
  document.getElementById("rectangle4").style.backgroundColor = document.getElementById("d").value;
  document.getElementById("rectangle4").title = document.getElementById("d").value;
};
document.getElementById("rectangle5").addEventListener("click", function() {
  document.getElementById("e").focus();
  document.getElementById("e").click();
});
document.getElementById("e").onchange = function(){
  document.getElementById("rectangle5").style.backgroundColor = document.getElementById("e").value;
  document.getElementById("rectangle5").title = document.getElementById("e").value;
};
document.getElementById("mom").addEventListener("click", function(){
document.getElementById("mode").innerHTML = 'Current Setting: Monochrome';
document.getElementById("info").style.visibility='hidden';
setting = 1;
var b = 0;
for(b = 1; b < rects.length;b++)
{
	document.getElementById(rects[b]).style.visibility = 'hidden';
}
});
document.getElementById("ana").addEventListener("click", function(){
 document.getElementById("mode").innerHTML = 'Current Setting: Analogous';
 document.getElementById("info").innerHTML = 'Select main color here. <br>Other swatches are for <br>comparison only. Gray-scale <br> colors do not have <br>analogous colors';
 document.getElementById("info").style.visibility = 'visible';
 setting = 2;
 var b;
 for(b = 1; b < 3;b++)
 {
	document.getElementById(rects[b]).style.visibility = 'visible';
 }
 document.getElementById(rects[3]).style.visibility = 'hidden';
 document.getElementById(rects[4]).style.visibility = 'hidden';

});
document.getElementById("free").addEventListener("click", function(){
 document.getElementById("mode").innerHTML = 'Current Setting: Free';
 document.getElementById("info").style.visibility = 'hidden';
 setting = 3;
 var b;
 for(b = 1; b < rects.length;b++)
 {
	document.getElementById(rects[b]).style.visibility = 'visible';
 }
 
});
document.getElementById('set').addEventListener('click',function(){
if(setting == 1){
//document.getElementById("p").innerHTML = document.getElementById("b").value;

document.getElementById("rectangle2").title = document.getElementById("b").value;
var c = document.getElementById("myCanvas");  
var ctx = c.getContext("2d");
    
    var img = document.getElementById("change");
    
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    var rects = ['rectangle1','rectangle2','rectangle3','rectangle4','rectangle5'];
    var x;
    
    
    document.getElementById("rectangle1").style.backgroundColor= document.getElementById("aa").value;

    document.getElementById("rectangle1").title = document.getElementById("rectangle1").style.backgroundColor;
    
    //rgbToHex(Math.round(rgb1[0]),Math.round(rgb1[1]),Math.round(rgb1[2]))
    for (x = 0; x < imgData.data.length; x+=4)
      {
	
  	 
	imgData.data[x] *= (parseInt(document.getElementById("aa").value.substring(1,3),16)/255);
	imgData.data[x+1] *= (parseInt(document.getElementById("aa").value.substring(3,5),16)/255);
	imgData.data[x+2] *= (parseInt(document.getElementById("aa").value.substring(5,7),16)/255);
	
	
      }	
    ctx.putImageData(imgData,0,0);
    
  }
//start of second copy paste
  else if(setting==3){
   document.getElementById("rectangle2").title = document.getElementById("b").value;
   var c = document.getElementById("myCanvas");  
   var ctx = c.getContext("2d");
    /*imgData.data[x] *= (parseInt(document.getElementById("aa").value.substring(1,3),16)/255);
	imgData.data[x+1] *= (parseInt(document.getElementById("aa").value.substring(3,5),16)/255);
	imgData.data[x+2] *= (parseInt(document.getElementById("aa").value.substring(5,7),16)/255);*/
    var img = document.getElementById("change");
    
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    
    var x;
    document.getElementById("rectangle1").title = document.getElementById("rectangle1").style.backgroundColor;
    document.getElementById("rectangle2").title = document.getElementById("rectangle2").style.backgroundColor;
    document.getElementById("rectangle3").title = document.getElementById("rectangle3").style.backgroundColor;
    document.getElementById("rectangle4").title = document.getElementById("rectangle4").style.backgroundColor;
    document.getElementById("rectangle5").title = document.getElementById("rectangle5").style.backgroundColor;
    
    //rgbToHex(Math.round(rgb1[0]),Math.round(rgb1[1]),Math.round(rgb1[2]))
    for (x = 0; x < imgData.data.length; x+=4)
      {
	
  	 
	if(x < imgData.data.length/5){
         imgData.data[x] *= (parseInt(document.getElementById("aa").value.substring(1,3),16)/255);
	 imgData.data[x+1] *= (parseInt(document.getElementById("aa").value.substring(3,5),16)/255);
	 imgData.data[x+2] *= (parseInt(document.getElementById("aa").value.substring(5,7),16)/255);}
	 else if(x < imgData.data.length *(2/5)){
	 imgData.data[x] *= (parseInt(document.getElementById("b").value.substring(1,3),16)/255);
	 imgData.data[x+1] *= (parseInt(document.getElementById("b").value.substring(3,5),16)/255);
	 imgData.data[x+2] *= (parseInt(document.getElementById("b").value.substring(5,7),16)/255);}
	 else if(x < imgData.data.length *(3/5)){
	 imgData.data[x] *= (parseInt(document.getElementById("c").value.substring(1,3),16)/255);
	 imgData.data[x+1] *= (parseInt(document.getElementById("c").value.substring(3,5),16)/255);
	 imgData.data[x+2] *= (parseInt(document.getElementById("c").value.substring(5,7),16)/255);}
	 else if(x < imgData.data.length *(4/5)){
	 imgData.data[x] *= (parseInt(document.getElementById("d").value.substring(1,3),16)/255);
	 imgData.data[x+1] *= (parseInt(document.getElementById("d").value.substring(3,5),16)/255);
	 imgData.data[x+2] *= (parseInt(document.getElementById("d").value.substring(5,7),16)/255);	
	 
	 }
	 else{
	 imgData.data[x] *= (parseInt(document.getElementById("e").value.substring(1,3),16)/255);
	 imgData.data[x+1] *= (parseInt(document.getElementById("e").value.substring(3,5),16)/255);
	 imgData.data[x+2] *= (parseInt(document.getElementById("e").value.substring(5,7),16)/255);
	 }
	
      }	
    ctx.putImageData(imgData,0,0);
    
  
}
  else{
//document.getElementById("p").innerHTML = document.getElementById("b").value;

document.getElementById("rectangle2").title = document.getElementById("b").value;
var c = document.getElementById("myCanvas");  
var ctx = c.getContext("2d");
    /*imgData.data[x] *= (parseInt(document.getElementById("aa").value.substring(1,3),16)/255);
	imgData.data[x+1] *= (parseInt(document.getElementById("aa").value.substring(3,5),16)/255);
	imgData.data[x+2] *= (parseInt(document.getElementById("aa").value.substring(5,7),16)/255);*/
    var img = document.getElementById("change");
    
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    
    var x;
    var red = parseInt(document.getElementById("b").value.substring(1,3),16);
    var gre = parseInt(document.getElementById("b").value.substring(3,5),16);
    var blu = parseInt(document.getElementById("b").value.substring(5,7),16);
    
    var hsv = rgbToHsv(red,gre,blu);
    var h1 = hsv[0] -.083;
    if(h1 < 0)
    {h1=1+h1;}
    var h2 = hsv[0] +.083;
    if(h2 > 1)
    {h2=h2-1;}
    var rgb1 = hsvToRgb(h1,hsv[1],hsv[2]);
    var rgb2 = hsvToRgb(hsv[0],hsv[1],hsv[2]);
    var rgb3 = hsvToRgb(h2,hsv[1],hsv[2]);
    document.getElementById("aa").value= rgbToHex(Math.round(rgb1[0]),Math.round(rgb1[1]),Math.round(rgb1[2]));
    document.getElementById("c").value= rgbToHex(Math.round(rgb3[0]),Math.round(rgb3[1]),Math.round(rgb3[2]));
    document.getElementById("rectangle1").style.backgroundColor= rgbToHex(Math.round(rgb1[0]),Math.round(rgb1[1]),Math.round(rgb1[2]));
    document.getElementById("rectangle2").style.backgroundColor= rgbToHex(Math.round(rgb2[0]),Math.round(rgb2[1]),Math.round(rgb2[2]));
    document.getElementById("rectangle3").style.backgroundColor= rgbToHex(Math.round(rgb3[0]),Math.round(rgb3[1]),Math.round(rgb3[2]));
    document.getElementById("rectangle1").title = document.getElementById("rectangle1").style.backgroundColor;
    document.getElementById("rectangle3").title = document.getElementById("rectangle3").style.backgroundColor;
    //rgbToHex(Math.round(rgb1[0]),Math.round(rgb1[1]),Math.round(rgb1[2]))
    for (x = 0; x < imgData.data.length; x+=4)
      {
	
  	 
	if(x < imgData.data.length/3){
         imgData.data[x] *= (rgb1[0]/255);
	 imgData.data[x+1] *= (rgb1[1]/255);
	 imgData.data[x+2] *= (rgb1[2]/255);}
	 else if(x < imgData.data.length *(2/3)){
	 imgData.data[x] *= (rgb2[0]/255);
	 imgData.data[x+1] *= (rgb2[1]/255);
	 imgData.data[x+2] *= (rgb2[2]/255);}
	 else {
	 imgData.data[x] *= (rgb3[0]/255);
	 imgData.data[x+1] *= (rgb3[1]/255);
	 imgData.data[x+2] *= (rgb3[2]/255);}
	
      }	
    ctx.putImageData(imgData,0,0);
    
  
}

});
function rgbToHsv(r, g, b) {
  r /= 255, g /= 255, b /= 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, v = max;

  var d = max - min;
  s = max == 0 ? 0 : d / max;

  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    
    h /= 6;
  }

  return [ h, s, v ];
}
function hsvToRgb(h, s, v) {
  var r, g, b;

  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }

  return [ r * 255, g * 255, b * 255 ];
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

$(document).ready(main);

