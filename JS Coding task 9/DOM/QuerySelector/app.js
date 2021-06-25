//get the reference of first div using DOM methods
var y = document.querySelectorAll(".div-class1")[0]; 
console.log(y);

//Change attribute class of this div to ‘changed-class’
var x = y.className = "changed-class";
console.log(x);

//change the style attribute of that div to give red color to the text 
y.style.color = "red";

//give solid blue border to it.
y.style.border = " 2px solid blue";