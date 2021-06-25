//get the reference of first div using DOM methods
var element = document.getElementsByClassName("div-class1")[0]; 
console.log(element);

//Change attribute class of this div to ‘changed-class’
var y = element.className = "changed-class";
console.log(element);

//change the style attribute of that div to give red color to the text 
element.style.color = "red";

//give solid blue border to it.
element.style.border = " 2px solid blue";