function LIS(A) {
  let max = 0;
  let t = [];
  for (let i = 0; i <= A.length; i++) {
    t.push(-1);
  }
  t[0] = 0;
  t[1] = 1;
  function aux(A, n) {
    if (t[n] !== -1) {
      return t[n];
    }
    let maxHere = 0;
    for (let i = 1; i < n; i++) {
      let result = aux(A, i);
      if (result + 1 > maxHere && A[i - 1] < A[n - 1]) {
        maxHere = result + 1;
      }
    }
    max = maxHere > max ? maxHere : max;
    t[n] = maxHere;
    return t[n];
  }
  aux(A, A.length);
  return max;
}
let A = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
console.log(LIS(A));
