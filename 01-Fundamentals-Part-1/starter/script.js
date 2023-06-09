// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Jonas");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// const birthYear = 1991;
// birthYear = 1990;

// const job = "programmer";
// job = "teacher";

// lastName = "Schmedtmann";
// console.log(lastName);

/*
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 j= 2 * 2 * 2

const firstName = 'Jonas'
const lastName = 'Schmedtmann'
console.log(firstName + ' ' + lastName)

let x = 10 + 5
x += 10
x *= 4
x++
x--
x--
console.log(x)

// Comparison operators
console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18

console.log(now - 1991 > now - 2018)
*/

/* // operator precedence
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018

console.log(now - 1991 > now - 2018)

let x, y 
x = y = 25 - 10 - 5
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge)
*/

/* // Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old" + job + "!";
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!}`
console.log(jonasNew)

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines')

console.log(`String 
multiple
lines`)
 */

/* // Taking Decisions: if / else Statements
const age = 15
const isOldEnough = age >= 18
if (isOldEnough) {
  console.log('Sarah can start driving license 🚗')
} else {
  const yearsLeft = 18 - age
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 1991
if(birthYear <= 2000){
  let century = 20
} else {
  let century = 21
}
console.log(century)
 */

/* Type Conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // => number, string
console.log(Number(inputYear) + 18); // => number

console.log(Number("Jonas")); // => NaN
console.log(typeof NaN); // => number

console.log(String(23), 23) // String, number

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3) // => 10
console.log('23' / '2')
 */

/* Truthy and False Values
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({})) // => true
console.log(Boolean(''))

const money = 0
if(money){
  console.log("Dont't spend it all ;")
} else {
  console.log('You sould get a job!')
}

let height
if(height) {
  console.log('YAY! Height is defined')
} else {
  console.log('Height is UNDEFINED')
}
*/

/* Equality Operators: == vs. ===
const age = '18'
if (age === 18) console.log('You just became an adult :D (strict)') // => false
if(age == 18) console.log('You just became an adult :D (loose)') // => true
*/

/* Logical Operators
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive~!");
} else {
  console.log("Someone else should drive...");
}

const isTired = trueconsoel.log(hasDriversLicense && hasGoodVision && isTired);

if (shouldDrive && !isTired) {
  console.log("Sarah is able to drive~!");
} else {
  console.log("Someone else should drive...");
}
 */

/* The switch Statement
const day = 'monday'

switch(day) {
  case 'monday':
    console.log('Plan course structure')
    console.log('Go to coding meetup')
    break
  case 'tuesday':
    console.log.apply('Prepare theory videos')
    break
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples')
    break
  case 'friday':
    console.log('Record videos')
    break
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D')
    break
  default:
    console.log('Not a valid day!')
}

if (day === 'monday') {
    console.log('Plan course structure')
    console.log('Go to coding meetup')
}
*/

/* Statements and Expressions
 */

/* The Conditional (Ternary) Operator
const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
 */
