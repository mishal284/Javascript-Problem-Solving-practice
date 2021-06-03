let percentage = parseInt(prompt('Enter your percentage'));
switch (true) {
    case percentage > 85:
        alert("The Grade is 'A'");
        
    break;

    case (percentage <= 85 && percentage > 80):
        alert("The Grade is 'A-'");
        
    break;

    case (percentage <= 80 && percentage > 70):
        alert("The Grade is 'B'");
        
    break;

    case(percentage <= 70 && percentage > 60):
        alert('The Grade is C');
        
    break;

    case(percentage <= 60 && percentage > 40):
        alert('The Grade is D');
    break;

    case percentage <= 40:
        alert('The Grade is E');
    break;

    case percentage <= 35:
        alert('candidate failed');
    break;
    default:
        alert ('submit your result');

        
}
