"use strict";

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `${firstName},you are ${age},born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 2034) {
      var millenial = true;
      const str = `oh, and you're a millenial,${firstName}`;
      console.log(str);
    }
    //console.log(str);
    console.log(millenial);
  }
  printAge();

  return age;
}

const firstName = "sanju";
calcAge(2001);
//console.log(age);
console.log(me);
console.log(job);
console.log(year);

var me = "sanju";
let job = "enginer";
const year = 2000;
