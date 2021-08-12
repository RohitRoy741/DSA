function lbs(A) {
  let I = [];
  for (let i = 0; i < A.length; i++) {
    I.push(1);
  }
  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      if (I[j] + 1 > I[i] && A[i] > A[j]) {
        I[i] = I[j] + 1;
      }
    }
  }
  let D = [];
  for (let i = 0; i < A.length; i++) {
    D.push(1);
  }
  for (let i = A.length - 2; i >= 0; i--) {
    for (let j = A.length - 1; j > i; j--) {
      if (D[j] + 1 > D[i] && A[j] < A[i]) {
        D[i] = D[j] + 1;
      }
    }
  }
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    max = I[i] + D[i] - 1 > max ? I[i] + D[i] - 1 : max;
  }
  return max;
}
let A = [4, 2, 5, 9, 7, 6, 10, 3, 1];
console.log(lbs(A));
