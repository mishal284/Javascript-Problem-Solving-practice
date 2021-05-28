function check() {
    let inputElement= document.querySelector('#name');
    console.log(inputElement);
    let inputValue= inputElement.value;
    console.log(inputValue);
    let headingElement= document.querySelector('h1 >span');
    console.log(headingElement);
    headingElement.innerHTML= inputValue;
    alert('The message has been sent to number')
}