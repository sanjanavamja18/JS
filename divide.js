/*Divide Array*/
// const Arr1 = [2, 1, 2, 3, 3, 4];
// a1 = [];

// // const sort = Arr1.sort();
// // console.log(sort);
// const n = Math.ceil(Arr1.length / 2);
// function Array(Arr1, n) {
//   for (let i = 0; i <= Arr1.length; i++) {
//     if (Arr1[i] != Arr1[i + 1]) {
//       Arr1.push = a1;
//       i++;
//     }
//   }
//   console.log(a1);
// }

const fArr = [];
const sArr = [];
// let ans1 = 0;
// let ans2 = 0;
function array(arr) {
  //   if (!arr.length / 2) {
  //     console.log("Not possible");
  //   } else {
  //     console.log("posssible");

  for (let i = 0; i <= arr.length - 1; i += 1) {
    if (!fArr.includes(arr[i]) && fArr.length !== 3) {
      fArr.push(arr[i]);
    } else {
      sArr.push(arr[i]);
    }
  }
  console.log(fArr, sArr);
  return array;
}

array([2, 1, 2, 3, 3, 4]);
