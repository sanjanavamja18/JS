function sanju() {
  console.log("My name is sanju.");
}
sanju();
sanju();
sanju();
sanju();

function fruit(p, o) {
  console.log(p, o);
  const juice = `Juice with ${p} pineapples and oranges ${o} oranges.`;
  return juice;
}
const juices = fruit(2, 5);
console.log(juices);

// function declaration..
function cal(birthYear) {
  return 2022 - birthYear;
}
const age = cal(2001);
console.log(age);

// Arror function..
const calc = (birthYear) => 2024 - birthYear;
const age1 = calc(2001);
console.log(age1);

// function callling..
function cutfruit(fruit) {
  return fruit * 4;
}
function fruitPro(apple, orange) {
  const applepiece = cutfruit(apple);
  const orangepiece = cutfruit(orange);

  const juice1 = `Juice with ${applepiece} apple pices and ${orangepiece} orrange peices.`;
  return juice1;
}
console.log(fruitPro(5, 2));

// reviewing function..
const calA = function (birth) {
  return 2027 - birth;
};
const yaerRetirment = function (birth, name) {
  const age = 2027 - birth;
  const retir = 55 - age;
  return retir;
  // return `${name} retirs in ${retir} years`;
};
console.log(yaerRetirment(1999, "sanju"));

// Coding challange #1..
const calAv = (a, b, c) => (a + b + c) / 3;
console.log(calAv(3, 4, 5));

// Test 1..
const dol = calAv(44, 23, 71);
const kol = calAv(65, 54, 49);
console.log(dol, kol);

const checkWinner = function (dolav, kolav) {
  if (dolav >= 2 * kolav) {
    console.log(`Dolphins win (${dolav}) vs. 
        (${kolav})`);
  } else if (kolav >= 2 * dolav) {
    console.log(`Koalas win (${kolav}) vs. 
        (${dolav})`);
  } else {
    console.log("No team wins");
  }
};
checkWinner(dol, kol);
checkWinner(555, 222);

// test 2..
scoDolp = calAv(85, 54, 41);
scoKols = calAv(23, 34, 27);
console.log(scoDolp, scoKols);
checkWinner(scoDolp, scoKols);

// Intro of array..
const frnd = ["sanju", "mansi", "hemaxi"];
console.log(frnd);

const year = new Array("2002", "2001", "2000");
console.log(year);

console.log(frnd.length);
console.log(frnd[1]);
frnd[0] = "jankee";
console.log(frnd);

// exercise..
const calAge = function (birthYear) {
  return 2030 - birthYear;
};
const years = ["2000", "2001", "2002", "2003"];
console.log(years);

const ag1 = calAge(years[2]);
console.log(ag1);

// basic aaray operation..

const frnds = ["sanju", "mansi", "hemaxi"];
const newLength = frnds.push("jankee");
console.log(frnds);
console.log(newLength);

// adding element..
frnds.unshift("sana");
console.log(frnds);

// remove element..
frnds.pop(); // last..
console.log(frnds);

frnds.shift(); // first..
console.log(frnds);

console.log(frnds.indexOf("mansi"));
console.log(frnds.indexOf("sana"));

console.log(frnds.includes("mansi"));
console.log(frnds.includes("sana"));

frnds.push(2);
console.log(frnds.includes(2));
console.log(frnds);

if (frnds.includes(2)) {
  console.log("we have also number it's called two");
}

// coding challenge #2..
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);

// introduction to objects..
const sanjuArray = [
  "sanjana",
  "vamja",
  2022 - 2001,
  "Teacher",
  ["mansi", "hemaxi", "jankee"],
];
console.log(sanjuArray);

//Dot vs Bracket Notation..
const sana = {
  firstName: "Sanjana",
  lastName: "Vamja",
  age: 2022 - 2001,
  job: "Engineer",
  frds: ["mansi", "hemaxi"],
};
console.log(sana);
console.log(sana.firstName);
const nameKey = "Name";
console.log(sana["firstName" + nameKey]);

//prompt function..
const inter = prompt(
  "what do you want about sanju?choose between firstname,lastname,age,job,frnds"
);
console.log(sana[inter]);

if (sana[inter]) {
  console.log(sana[inter]);
} else {
  console.log(
    "wrong request!! choose between the firstName,lastName,job,age,frds"
  );
}

console.log(
  `${sana.firstName} has ${sana.frds.length} friends,and his best friend is ${sana.frds[0]}`
);

// objects methods..
const saniya = {
  firtName: "sanju",
  birthYear: 2022 - 2001,
  job: "engineer",
  licence: "has Driving Licenece",
};
console.log(
  `${saniya.firtName} is a ${saniya.birthYear}-year old ${saniya.job}, and she ${saniya.licence}`
);

// coding challange #3..
const mark = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const John = {
  fullName: "Jone  Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
John.calcBMI();

console.log(mark.bmi, John.bmi);

// itreation the for loop..
for (let as = 1; as <= 5; as++) {
  console.log(`My Name is Sanjana Vamja ${as}`);
}

// lopping aaray,Breaking and cintinuing..
const sanu = [
  "sanjana",
  "vamja",
  2022 - 2001,
  "Teacher",
  ["mansi", "hemaxi", "jankee"],
];
const type = [];

for (let i = 0; i <= sanu.length; i++) {
  console.log(sanu[i], typeof sanu[i]);
  type.push(typeof sanu[i]);
}
console.log(type);

// continue and break..
console.log("--only string--");
for (let i = 0; i <= sanu.length; i++) {
  if (typeof sanu[i] !== "string") continue;
  console.log(sanu[i], typeof sanu[i]);
}

console.log("--Break with number--");
for (let i = 0; i <= sanu.length; i++) {
  if (typeof sanu[i] === "number") break;
  console.log(sanu[i], typeof sanu[i]);
}

// looping backwards and loop in loops..
const saana = [
  "sanjana",
  "vamja",
  2022 - 2001,
  "Teacher",
  ["mansi", "hemaxi", "jankee"],
];
for (let i = saana.length - 1; i >= 0; i--) {
  console.log(i, saana[i]);
}

for (let ex = 1; ex <= 5; ex++) {
  console.log(`----satrating exercise ${ex}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(rep, `--repeatating loops ${rep}`);
  }
}

// while loop..
for (let as = 1; as <= 5; as++) {
  console.log(`My Name is Sanjana Vamja ${as}`);
}
let as = 1;
while (as <= 5) {
  console.log(`WHILE :My Name is Sanjana Vamja ${as}`);
  as++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled  a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

// coding challange #4
const calTip = function (bil) {
  return bil <= 50 && bil <= 300 ? bil * 0.15 : bil * 0.2;
};
const bils = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipps = [];
const totalls = [];
for (let i = 0; i < bils.length; i++) {
  const topps = calTip(bils[i]);
  tipps.push(topps);
  totalls.push(topps + bils[i]);
}
console.log(bils, tipps, totalls);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totalls));
console.log(calcAverage(tipps));
