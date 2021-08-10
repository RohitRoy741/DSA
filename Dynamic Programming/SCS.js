function min(num1, num2) {
  return num1 < num2 ? num1 : num2;
}
function SCS(A, B) {
  let t = [];
  for (let i = 0; i <= A.length; i++) {
    let row = [];
    for (let j = 0; j <= B.length; j++) {
      if (i === 0) {
        row.push(j);
      } else if (j === 0) {
        row.push(i);
      } else {
        row.push(-1);
      }
    }
    t.push(row);
  }
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      if (A[i - 1] === B[j - 1]) {
        t[i][j] = 1 + t[i - 1][j - 1];
      } else {
        t[i][j] = 1 + min(t[i - 1][j], t[i][j - 1]);
      }
    }
  }
  return t[A.length][B.length];
}
let A = "ABCBDAB";
let B = "BDCABA";
console.log(SCS(A, B));
