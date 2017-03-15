var ageCalculator = function(name,yearOfBirth,currentYear) {
  if(currentYear > yearOfBirth)
  return(name+" is "+(currentYear-yearOfBirth)+" years old.");
    else
      return;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));