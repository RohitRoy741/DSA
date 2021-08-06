function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
function diff(A, B) {
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
  console.log(t);
  let i = A.length,
    j = B.length,
    result = "";
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && A[i - 1] === B[j - 1]) {
      result = A[i - 1] + result;
      i--;
      j--;
    } else if (j > 0 && (i == 0 || t[i][j - 1] >= t[i - 1][j])) {
      result = "+" + B[j - 1] + result;
      j--;
    } else if (i > 0 && (j == 0 || t[i - 1][j] > t[i][j - 1])) {
      result = "-" + A[i - 1] + result;
      i--;
    }
  }
  return result;
}
let A = "ABCDFGHJQZ";
let B = "ABCDEFGIJKRXYZ";
console.log(diff(A, B));
