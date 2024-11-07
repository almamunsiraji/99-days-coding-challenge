//Default
const greeting = (msg = "Good day to you") => {
  console.log(msg);
};

greeting("Good Morning");
greeting("Good Afternoon");
greeting("Good Evening");
greeting();
/*const greeting = ()=>{
console.log('Good Morning');
}

greeting();
greeting();
greeting();*/

/*const oldperson = {
  Name: "Abdullah Al Mamun",
  Age: 24,
  nationality: "Bangladeshi",
  languages: {
    Native: "Bengali",
    fluent: {
      speak: "English",
      learn: "Arabic",
    },
  },
};
// Distructer
const { Name: fullName, Age, nationality, languages } = oldperson;
console.log(fullName);
console.log(Age);
console.log(languages);*/

/*console.log(oldperson);
console.log(oldperson.languages);
console.log(oldperson.languages.Native);
console.log(oldperson.languages.fluent.speak);*/

/*const addNumbers = (...numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(addNumbers(10, 20));
console.log(addNumbers(30, 40, 50));
console.log(addNumbers(10, 30, 50, 60));*/

/*const oldArray = [10, 20, 30];
const newArray = [...oldArray, 40, 50, 60];
console.log(newArray);
const oldPerson = {
  Name: "Abdullah Al Mamun",
  Location: "Dhaka",
  Country: "Bnagladesh",
};
const newPerson = { ...oldPerson, Nationality: "Bnagladeshi" };
console.log(newPerson); */

/*import { add, sub } from "./calculator.js";
import { person } from "./person.js";
console.log(add(10, 20));
console.log(sub(40, 30));
console.log(person.Name);
console.log(person.Age);
console.log(person.Nationality);
console.log(person.printinfo());*/

/*var fullName = "Abdulla Al Mamun";
console.log(`My name is ${fullName}`);
const Name = "Abdulla Al Mamun Siraji";
console.log(`my name is ${Name}`);
let name = "Al Mamun";
console.log(`my name is ${name}`);
*/
