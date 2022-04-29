//'use strict';   
 
//let McqExam = false;
//const passtest = True;


//if(passtest) McqExam =true;

function sanju()
{
    console.log("My name is sanju.")
}
sanju()
sanju()
sanju()
sanju()

function fruit(p,o)
{
    console.log(p,o);  
    const juice = `Juice with ${p} pineapples and oranges ${o} oranges.`;
    return juice;
}
const juices = fruit(2,5);
console.log(juices);

//function declaration..
function cal(birthYear)
{
    return 2022 - birthYear;
}
const age = cal(2001);
console.log(age)

//Arror function

const calc = birthYear => 2024 - birthYear;
const age1 = calc(2001);
console.log(age1);

//function callling...

function cutfruit(fruit)
{
    return fruit* 4;
}
function fruitPro(apple,orange)
{
    const applepiece = cutfruit(apple);
    const orangepiece = cutfruit(orange);
    
    const juice1 = `Juice with ${applepiece} apple pices and ${orangepiece} orrange peices.`
    return juice1;

}
console.log(fruitPro(5,2));