function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
function LCS(A, B, n1, n2) {
  if (n1 === 0 || n2 === 0) {
    return 0;
  } else if (A[n1 - 1] === B[n2 - 1]) {
    return 1 + LCS(A, B, n1 - 1, n2 - 1);
  } else {
    return max(LCS(A, B, n1 - 1, n2), LCS(A, B, n1, n2 - 1));
  }
}
let A = "abcdgh";
let B = "abedfhr";
console.log(LCS(A, B, A.length, B.length));
