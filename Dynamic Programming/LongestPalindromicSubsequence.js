function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
function LPS(A) {
  let B = A.split("").reverse().join("");
  let t = [];
  for (let i = 0; i <= A.length; i++) {
    let row = [];
    for (let j = 0; j <= B.length; j++) {
      row.push(0);
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
  let i = A.length,
    j = B.length,
    result = "";
  while (i > 0 && j > 0) {
    if (A[i - 1] === B[j - 1]) {
      result = A[i - 1] + result;
      i--;
      j--;
    } else if (t[i - 1][j] > t[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  return result;
}
A = "ABBDCACB";
console.log(LPS(A));
