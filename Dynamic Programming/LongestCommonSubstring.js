function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
function longestSubstring(A, B) {
  let maxLength = 0,
    endIndex = 0;
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
        if (t[i][j] > maxLength) {
          maxLength = t[i][j];
          endIndex = i - 1;
        } else {
          t[i][j] = 0;
        }
      }
    }
  }
  return A.substring(endIndex - maxLength + 1, endIndex + 1);
}
let A = "ABC",
  B = "BABA";
console.log(longestSubstring(A, B));
