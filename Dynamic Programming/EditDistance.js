function min(num1, num2, num3) {
  return num1 < num2 ? (num1 < num3 ? num1 : num3) : num2 < num3 ? num2 : num3;
}
function editDistance(A, B) {
  let t = [];
  for (let i = 0; i <= A.length; i++) {
    let row = [];
    for (let j = 0; j <= B.length; j++) {
      if (i === 0) {
        row.push(j);
      } else if (j === 0) {
        row.push(i);
      } else {
        row.push(100000);
      }
    }
    t.push(row);
  }
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      let cost = 0;
      if (A[i - 1] !== B[j - 1]) {
        cost = 1;
      }
      t[i][j] = min(t[i - 1][j - 1] + cost, t[i][j - 1] + 1, t[i - 1][j] + 1);
    }
  }
  return t[A.length][B.length];
}
let A = "kitten",
  B = "sitting";
console.log(editDistance(A, B));
