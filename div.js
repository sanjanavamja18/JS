const fArr = [];
const sArr = [];
function array(arr) {
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
