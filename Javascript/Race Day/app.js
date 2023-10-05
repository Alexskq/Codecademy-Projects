let raceNumber = Math.floor(Math.random() * 1000);

console.log(raceNumber)

const earlyRegister = false;

const age = 18;

if (earlyRegister && age > 18){
  raceNumber += 1000
}

if ( age > 18 && earlyRegister) {
  console.log("Your race starts at 9:30am")
} else if ( age > 18 && !earlyRegister){
  console.log("Your race starts at 11:00am")
}else if (age < 18) {
  console.log("Youth registrants run at 12:30 pm (regardless of registration")
}else {
  console.log("Let's see with the registration desk !")
}