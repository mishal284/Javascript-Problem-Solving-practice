let games = ["baseball", "volleyball", "throwball", "cricket", "tennis", "hockey"];
// for loop
for (let i = 0; i < games.length; i++) {

  if ( "cricket" == games[i] ){
    document("Cricket exists");
  }else {
    console.log("Cricket Does not exists");
  }
  
}
// for Each loop


games.forEach(myFunction)

function myFunction(arr) {
    if ("cricket" == arr){
        console.log("Cricket Exits!");
    }
    else {
        console.log("Does not Exist");
    }
    
}



// For Of loop


for (i of games) {
    if ("cricket" == i){
        console.log("Cricket Exits!");
    }
    else {
        console.log("Does not Exist");
    }
}