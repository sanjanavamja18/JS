//countWaysToSplit

const s = "sanju";
let count = 0;
for (let i = 0; i < s.length - 2; i++) {
  for (let j = i + 1; j < s.length - 1; j++) {
    let a = s.slice(0, i + 1);
    let b = s.slice(i + 1, j + 1);
    let c = s.slice(j + 1, s.length);
    //console.log("a is::", a);
    // console.log("b is::" + b);
    // console.log("c is::" + c);
    //console.log(a, b, c);
    if (a + b != b + c && b + c != c + a && a + b != c + a) {
      console.log(a, b, c);
      count++;
    }
  }
}
console.log("Count Ways To Split is::", count);
