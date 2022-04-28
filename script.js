console.log('javascript is fun 🥰')

// VARIABLES
// 'John Doe'  // value
// let fullName, birthYear, job, isMarried;
// fullName = 'Saalma Rambo';    //STRING
// birthYear = 1990;        //NUMBER
// job = 'developer';       //STRING
// isMarried = true;       //BOOLLEAN

// console.log('John Doe');
// console.log(fullName);
// console.log(birthYear);
// console.log(job);
// console.log(isMarried);
// console.log('my name is ' + fullName + '. I was born in ' + birthYear + ', i am a ' + job + ' and my maritals status is ' + isMarried);
// console.log('my name is ' + fullName + '. I was born in ' + birthYear + ', \n i am a ' + job + ' and my maritals status is ' + isMarried);
// console.log('my name is ' + fullName + '. I was born in ' + birthYear + ', I\'m i am a ' + job + ' and my maritals status is ' + isMarried);

/**USING 'TYPEOF' TO CHECK VARIABLE */
// console.log(typeof(fullName));
// console.log(typeof(birthYear));
// console.log(typeof(isMarried));

// THE SEVEN 7 DATA-TYPES OF JavaScript
// 1. NUMBERS... NUMBERS HAVE DECIMALS.
// let myNumber = 7;

// 2. STRING... ARE TEXTS WRITTEN IN BETWEEN SINGLE OR DOUBLE QOUTES.
// let myCountry = 'Nigerial';

// 3. BOOLEAN... JAVASCRIPT LOGIC WHICH RETURNS EITHER TRUE OR FALSE.
// let _canVote = true;

// 4. UNDEFINED... THIS IS THE VALUE IF WE DONT ASIGN ANY VALUE TO A VARIABLE.
// UNDEFINED CAN BE USED TO SET A VALUE FOR A VARIABLE ALSO.
// let mySchool;
// let myDept = undefined;

// 5. Null... is an empty object
// let $can_drive = null;

/**JAVASCRIPT KEYWORDS THAT CAN'T BE USED TO SET VARIABLES  */
// 1. NAME
// 2. NEW
// 3. KEYWORD
// 4 FUNCTION
// 5. ARRAY
// 6. VARIABLE KEYWORDS

/**VARIABLE MUTABILITY ===> BETWEEN CONST, LET VAR */
// let age = 30;
// age = 40;
// console.log(age); 

// // const birthYear = 1990;   
// console.log(birthYear);

// let myRegion;
// myRegion = 'south-west';
// console.log(myRegion);

// const favColor = 'black';
// console.log(favColor);

// // var job;
//  job = 'programmer';
//  job = 'teacher';

// console.log(job); 


/**JAVASCRIPT BASIC OPERATORS */

// MINUS OPERATORS (-)
// const thisYear = 2022;
// const ageJohn = thisYear - 1990;
// const ageSarah = thisYear - 2005;
// const ageBada = thisYear - 1976;
// console.log(ageJohn, ageSarah);

// PLUS OPERATORS (+)
// const myBalance = 2500 + 658;
// const firstName = 'jack';
// const lastName = 'sparrow';
// const fullName = firstName + lastName;
// console.log(fullName);
// console.log(firstName + ' ' + lastName);


/**JAVASCRIPT ASSIGNMENT OPERATORS */
// PLUS OR EGUAL (+=)

// let salary = 1000;
// console.log(salary);

// let SalaryPlus = 870;

// let moreSalary = salary += SalaryPlus;
// console.log(moreSalary);


// MINUS OR EGUAL (+=)
// let fee = 2345;
// let newFee = fee -= 120;
// console.log(newFee);

// TIMES OR EGUAL (+=)
// let ageSola = 22;
// let ageMummy = age *= 2;
// console.log(ageMummy);

// DIVISION OR EQUAL (/=)
// let naigaPopulation = 1000;
// let naigaGhana = age /= 100;
// console.log(naigaGhana);

// EXPONETIATION (**)
// const powerThree = 3 ** 2;
// console.log(powerThree);

/** JAVASCRIPT COMPARISON OPERATORS */
// LESS THAN (<) AND GTREATER THAN (>)
// const isLess = 86 < 72;
// console.log (isLess);  // false

//LESS OR EQUAL (<=) AND GREATER OR EQUAL (>=)
// const isGreater = 86 >= 78;
// console.log(isGreater);  // True

// console.log(ageSarah >= 18);  // false

// const massMark = 95;
// const massJohn = 85;


// const heightMark = 1.88;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const hasHigherBMI = BMIMark > BMIJohn; // false

// console.log(BMIMark, BMIJohn)
// console.log(hasHigherBMI);

// /**JAVASCRIPT STRING & TEMPLATE LITERALS */
// // const firstName = 'Jane';
// const lastName = 'Mane';
// // const job = 'Dancer';
// const yearOfBirth = 1994;

// // ES5 STRINGS
// // const janeES5 = 'I\'m ' + firstName + ' ' + lastName + ',I\'m a ' + job + ' and I am ' + (2022 - yearOfBirth);
// // console.log(janeES5);

// // ES6 TEMPLATE LITERIALS
// // const janeES6 = `I'm ${firstName} ${lastName}`;
// // console.log(janeES6);
// console.log(`we are here learning \n\ how to code`);


// /**JAVASCRIPT DECISION MAKING (IF/ELSE STATEMENT) */
// const ageSarah = 20;
// const canDriveCar = ageSarah >= 18;  
// console.log(canDriveCar);

// if (canDriveCar) {
//     console.log(`sarah is old enough to driver car 🚕`);

// } else {
//     console.log(`sarah is too young to drive`);
// }

// //////////////////////////////////////////////
// const birthYear = 2009;
// let century;

// if (birthYear < 2000) {
//     century = 20;
//     console.log(`${century}th`);
// } else {
//     century = 21;
//     console.log(`${century}st`);
// }
// // const firstName = 'Jane';
// // const job = 'Dancer';

// // if (job === 'Actor') {
// //     console.log(`${firstName} is a popular ${job}`);
// // } else if (job === 'Teacher') {
// //     console.log(`${firstName} is a popular ${job}`);
// // }

// // const firstName = 'Tope';
// const job = 'driver';

// if (job === 'Farmer') {
//     console.log(`${firstName} he likes going to the farm`);
// } else if (job === `coder`) {
//     console.log(`${firstName} loves to code all day!`);
// } else if (job === 'footballer') {
//     console.log(`${firstName} plays for Chelsea FC`);
// } else if (job === 'developer') {
//     console.log(`${firstName} is a full stack ${job}`);
// } else {
//     // console.log(`${firstName} didn't care about the work`); 
// }

// /**JAVASCRIPT TYPE CONVERTION & COERSION */
// // CONVERSION
// const inputYear = '1991';
// console.log(inputYear);           //  STRING
// console.log(Number(inputYear));      //  NUMBER  

// console.log(Number('John'));         //  NaN
// console.log(typeof(NaN));  

// const myLocalNum = 23;
// console.log(String(myLocalNum));     //  STRING
// console.log(myLocalNum.toString());  //  STRING

// COERSION
// WHEN U ARE ADD A NUMBER TO A STRING, IT BECOMES A STRING
// console.log('I am ' + 23 + ' years old');

// console.log('78' + '42');    // 7842 ===> STRING
// console.log('78' - '42');    // 36 ===> NUMBER
// console.log('72' / '8');     // 9 ===> NUMBER
// console.log('20' * '7');     // 140 ===> NUMBER
// console.log('23' - '10' -3);
// console.log('23' - '10' + 5);


//  GUESS THE NUMBER
// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// DON MANIPULATION
// const firstNumber = document.querySelector('#firstNum');
// const secondNumber = document.getElementById('secondNum');
// const submitBtn = document.getElementById('submitBtn');
// const calcOutput = document.getElementById('calcOutput');


// submitBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     const firstValue = Number(firstNumber.value);
//     const secondValue = Number(secondNumber.value);

//     function multiplyNums(a, b) {
//         return (a * b);
//     }
//     calcOutput.textContent = multiplyNums(firstValue, secondValue);
// })


//* CODING CHALLENGE ASSIGNMENT 1 */
// const marksBMI = 24.6;
// const johnBMI = 21.2;

// if (marksBMI <= johnBMI) {
//     console.log(`john's BMI is the highest`);
// } else {
//     console.log(`${marksBMI} mark's BMI is higher than john`);
// }

// /**JAVASCRIPT TRUTH & FALSY VALUE */

// Falsy values

// console.log(Boolean(0));
// console.log(Boolean (undefined));
// console.log(Boolean (''));
// console.log(Boolean (null));
// console.log(Boolean (NaN));

// // Truth values
// console.log(Boolean(23));
// console.log(Boolean('Ade'));

// const money = 10;

// if (money) {
//     console.log(`Don't spend all that $${money}`)
// } else {
//     console.log('you need to get a job!')
// }

// /**JAVASCRIPT EQUALITY OPERATORS */

//Double-equal (==) 👉 this does type-coersion.
// console.log('18' == 18);


// //Tripples-equal (==) 👉 this does NOT DO type-coersion.
// console.log('84' === 84);

// const favNum = String(prompt('What is your favourite number'));
// console.log(typeof favNum);

// if (favNum !== 7) {
//     console.log('your favourite number is a string');
// } else if (favNum === 7) {
//     console.log('Now you have a real number');
// }

// const newNumber = '9';

// if (newNumber != String) {
//     console.log('The number is a string')
// } else {
//     console.log('The number is not a string')
// }


// /**JAVASCRIPT BOOLEAN LOGIC */

// AND-OPERATOR  (&&) 👉 WHEN ALL CONDITIONS ARE TRUE

// OR-OPERATOR   (||) 👉 WHEN ONE-OF-THE CONDITIONS IS TRUE

// const excellentName = 'Alabi';
// const hasDriverLicence = false;
// const hasGoodVision = false;
// const isTired = false;
// const getBrain = false;

// if (!hasDriverLicence && !hasGoodVision && !isTired && getBrain) {
//     console.log(`${excellentName} can drive in the night!`)
// } else if (!hasDriverLicence || !hasGoodVision || !isTired || !getBrain) {
//     console.log(`police might arrest Mr. ${excellenttName}`)
// }

// CODING CHALLENGE #3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins won the troph`)
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('koalas won the trophy')
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`they played a dream match. no winners`)
// }

// CODING CHALLENGE #4

// const scoreDolphins = (97 + 110 + 120) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins wins the trophy with ${scoreDolphins} points`)
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log(`koalas wins the trophy ${scoreKoalas} points`)
// } else if (scoreDolphins === scoreKoalas && scoreDolphins <= 100 && scoreKoalas <= 100) {
//     console.log(`Nobody wins the match. They have less than 100 points`)
// }

/**JAVASCRIPT SWITCH STATEMENTS */

// const dayOfTheWeek = prompt('pick a day you like ...');
// console.log(dayOfTheWeek);



// if (dayOfTheWeek === 'monday') {
//     console.log(`have a fruitful week!`)
// } else if (dayOfTheWeek === `tuesday`) {
//     console.log(`its a beautiful ${dayOfTheWeek}`);
// } else if (dayOfTheWeek === `wednesday` || dayOfTheWeek`thursady`) {
//     console.log(`i have to write code everyday ${dayOfTheWeek}`);
// } else if (dayOfTheWeek === `friday`) {
//     console.log(`${dayOfTheWeek} is for jummah and i will go to the mosque`);
//     console.log(`Thanks God it friday ${dayOfTheWeek} we clud in the night`);
// } else if (dayOfTheWeek === `saturday`) {
//     console.log(`it's half day at work. Nothing much just for revision`);
// } else if (dayOfTheWeek === `sunday`) {
//     console.log(`Yay! It's weekend and i do watch football most time`);
// } else {
//     console.log(`wrong week day`)
// }


// switch (dayOfTheWeek) {
//     default:
//         console.log(`You have entered a wrong week day ....`);
//     case 'monday':
//         console.log(`Today is a first day of the week.`);
//         break;
//     case 'tuesday':
//         console.log(`its a free day for me`);
//         console.log(`I can decide to sleep all day`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`On ${dayOfTheWeek} I have to write code everyday`);
//         break;
//     case 'friday':
//         console.log(`${dayOfTheWeek} is for jummah and i will go to the mosque`);
//         console.log(`Thanks God it friday ${dayOfTheWeek} we clud in the night`);
//         break;
//     case 'saturday':
//         console.log(`it's half day at work. Nothing much just for revision`);
//         break;
//     case 'sunday':
//         console.log(`Yay! It's weekend and i do watch football most time`);
//         break;
// }


/**JAVASCRIPT TERNARY OPERATOR */

// const drinkerName = 'Bello';
// const age = 27;
// const canDrink = age >= 18 ? `can drink shayo` : `can only drink water`;
// console.log(canDrink)

// const drinkerName = `Bello`;
// const age = 27;
// const canDrink = age <= 18 ? `he take shayo` : `he take water`;
// console.log(canDrink)

// const lastName = `Tolu`;
// const canEat = true;
// const eating = canEat ? `${lastName} can eat two plates of rice` : `he can not eat two plate`;
// console.log(eating)

// const isEmployed = false;
// console.log(isEmployed ? `he word at celo` : `god purnish buhari`);




// if (age <= 18) {
//     console.log(`if the person is above 18 the person shoud dring alchol ${drinkerName}`);
// } else {
//     console.log(` if the person is bellow 18 he should not take it ${drinkerName}`)
// }

// CODING CHALLENGE #4

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, and the tips was ${tip} and the total value is ${bill + tip}`);


// the way we can code for date in javascript

const d = new Date();
const hour = d.getHours();
const _hour = d.getHours() > 12 ? hour - 12 : hour;
const minute = d.getMinutes();
const prepand = hour < 12 ? 'am' : 'pm';

console.log(`current Time: ${_hour}: ${minute} ${prepand}`);

console.log(d.getDay());