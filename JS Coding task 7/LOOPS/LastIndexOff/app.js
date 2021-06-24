games = ["baseball", "volleyball", "throwball", "tennis",  "cricket", "hockey"];
for (var i=games.lastIndexOf("Cricket",3);i<games.length;i++){
  if (games[i] == "Cricket"){
      console.log("Cricket Exits!");
      console.log("The Index of Cricket is : ",games.indexOf("Cricket"));
  }
  else {
      console.log("Does not Exist");
  }
}