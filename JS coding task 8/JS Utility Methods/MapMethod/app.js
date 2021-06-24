
 let agesArray = [12, 45, 56, 4];
 //Use map method to print all of the values and their indices.
 agesArray.map((element, index) => {
     console.log(index + " : " + element);
 });
 //suppose b is the new array, then
 let b = agesArray.map(multiply);
 console.log(b);
 function multiply(x) {
     return x * 10;
 }
// print array as a table
let usersData = [
  {
      name: "Saeed",
      lastName: "Ahmad",
      school: "UoT",
      profession: "engineer",
  },

  {
      name: "Ali",
      lastName: "Khan",
      school: "TUM",
      profession: "researcher",

  }

];
let printTable= usersData.map(test);
document.write(printTable);
function test(x) {
  return x.name + " " + x.lastName + " " + x.school + " " + x.profession;
} 