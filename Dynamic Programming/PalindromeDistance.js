function max(a, b) {
  return a > b ? a : b;
}
function palindromeDeletions(A) {
  let B = A.split("").reverse().join("");
  let t = [];
  for (let i = 0; i <= A.length; i++) {
    let row = [];
    for (let j = 0; j <= B.length; j++) {
      if (i == 0 || j == 0) {
        row.push(0);
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
        t[i][j] = max(t[i - 1][j], t[i][j - 1]);
      }
    }
  }
  return A.length - t[A.length][B.length];
}
console.log(palindromeDeletions("ABBDCACB"));
