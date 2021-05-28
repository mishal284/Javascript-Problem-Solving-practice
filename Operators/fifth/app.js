function check(fahrenheit) {
    fahrenheit = parseFloat(fahrenheit);
    document.getElementById("celsiusOutput").innerHTML= (fahrenheit-32)/1.8;    
}
function show(celsius) {
    celsius = parseFloat(celsius);
    document.getElementById("fahrenheitOutput").innerHTML= (celsius*1.8)+32;    
}