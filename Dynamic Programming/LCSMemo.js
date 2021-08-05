let t = [];
let maxLength = 100;
for (let i = 0; i <= maxLength; i++) {
  let row = [];
  for (let j = 0; j <= maxLength; j++) {
    if (i == 0 || j == 0) {
      row.push(0);
    } else {
      row.push(-1);
    }
  }
  t.push(row);
}
function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
function LCS(A, B, n1, n2) {
  if (t[n1][n2] !== -1) {
    return t[n1][n2];
  } else if (A[n1 - 1] === B[n2 - 1]) {
    t[n1][n2] = 1 + LCS(A, B, n1 - 1, n2 - 1);
    return t[n1][n2];
  } else {
    t[n1][n2] = max(LCS(A, B, n1 - 1, n2), LCS(A, B, n1, n2 - 1));
    return t[n1][n2];
  }
}
let A = "abcdgh";
let B = "abedfhr";
console.log(LCS(A, B, A.length, B.length));
