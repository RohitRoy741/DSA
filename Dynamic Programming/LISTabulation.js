function LIS(A) {
  let max = 0;
  let t = [];
  for (let i = 0; i <= A.length; i++) {
    t.push(1);
  }
  t[0] = 0;
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j < i; j++) {
      if (t[j] + 1 > t[i] && A[j - 1] < A[i - 1]) {
        t[i] = t[j] + 1;
      }
    }
    max = t[i] > max ? t[i] : max;
  }
  return max;
}
let A = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
console.log(LIS(A));
