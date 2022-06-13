//Use of THIS KEYWORD

"use strict";
//console.log(this);
/*
const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAge(2001);

const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAgeArrow(1999);

const sanju = {
  year: 2001,
  calcAg: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
sanju.calcAg();

const vamja = {
  year: 1998,
};

vamja.calcAg = sanju.calcAg;
vamja.calcAg();

const f = sanju.calcAg;
f();
*/

var firstName = "vamja";

const sanju = {
  firstName: "sanjana",
  year: 2001,
  calcAg: function () {
    //console.log(this);
    console.log(2024 - this.year);

    const isMIllenial = function () {
      console.log(this);
      //console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMIllenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
sanju.greet();
sanju.calcAg();
//console.log(this.firstName);

//argument Keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 10, 15);

var addArrow = (a, b) => a + b;

console.log("this is sanju vamja");
//let e = /great/; //regular expression literal in js..
let e = /great/g;
e = /great/i;
console.log(e);
console.log(e.source);

let str = "it is a grEat day with gReat things";
//1.exec():- this function match the array for match or null for no match..
let result = e.exec(str);
console.log(result);
result = e.exec(str);
console.log(result.input);
result = e.exec(str);
console.log(result);

//2.test():-return true or false..
let result1 = e.test(str);
console.log(result1);

//3.match():- it will return array or null..
// let e = /great/g;
// let str = "it is a grEat day with gReat things";
let result3 = str.match(e);
console.log(result3);

//4.search():-return index of first match
let result5 = str.search(e);
console.log(result5);

//5.replace():-return new replaced string with all the replacement..
let result6 = str.replace(e, "sanju");
console.log(result6);

const greet = () => "Good evening!";
console.log(greet);

const vamja = {
  name: "sanjana",
  eNo: 511,
  sum: function () {
    let a = 2,
      b = 3;
    console.log(a + b);
    console.log(this.name);
    console.log(this);
  },
};
vamja.sum();
