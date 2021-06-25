document.getElementById('btn').addEventListener("click",  function clickMe() {
    let element1 = document.getElementById('inp1');
    let element2 = document.getElementById('inp2');

    if (element1.value == null && element2.value == null) {
        alert("Fill the empty spaces");
        return false;}
    else if (element1.value == null || element2.value == null){
        alert('Some blanks are empty');
    }
    else {
        alert('Logged In Successfully')
    }
    if (element2 < 8){
        alert('Length is too short')
    }
});