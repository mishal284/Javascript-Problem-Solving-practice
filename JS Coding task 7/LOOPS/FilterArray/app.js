let ages = [40, 56, 80, 90, 100, 101, 102, 23, 22];

function checkAge(age) {
  return age >= 40;
}

  console.log(ages.filter(checkAge));