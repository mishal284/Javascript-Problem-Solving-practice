games = ["baseball", "volleyball", "throwball", "cricket", "tennis", "hockey"];
for (i=0;i<games.length;i++){
  if ("cricket" == games[i]){
      console.log("Cricket Exits!");
      console.log("The Index of Cricket is : ",games.indexOf("cricket"));
  }
  else {
    console.log("Cricket does not exist");
  }
}