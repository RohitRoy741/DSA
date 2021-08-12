function MIS(A) {
  let t = [];
  for (let i = 0; i < A.length; i++) {
    t.push(A[i]);
  }
  max = A[0];
  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      if (t[j] + A[i] > t[i] && A[j] < A[i]) {
        t[i] = t[j] + A[i];
      }
    }
    if (t[i] > max) {
      max = t[i];
    }
  }
  return max;
}
let A = [8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11];
console.log(MIS(A));
