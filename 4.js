/*4. How to Navigate This Course*/
"usestrict";

const x = 23;

if (x === 23) {
  console.log(23);
}

console.log("i am on live");

/*devloper skills and editor setup*/
const temp = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmp = function (remp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (curTemp > max) max = curTemp;
    if (curTemp > min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amp = calcTempAmp(temp);
console.log(amp);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degree celsius:"),
  };
  console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

/*Coding challange #1*/
const array = [17, 21, 23];
const array1 = [12, 5, -5, 0, 4];

console.log(`...${array1[0]}℃...${array1[1]}℃...${array1[2]}℃...`);

const print = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}℃`;
  }
  console.log(str);
};
print(array1);
