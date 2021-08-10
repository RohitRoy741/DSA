function LIS(A) {
  max = 0;
  function aux(A, n) {
    let maxHere = 1;
    if (n === 1) {
      return 1;
    }
    for (let i = 1; i < n; i++) {
      let result = aux(A, i);
      if (result + 1 > maxHere && A[i - 1] < A[n - 1]) {
        maxHere = result + 1;
      }
    }
    max = maxHere > max ? maxHere : max;
    return maxHere;
  }
  aux(A, A.length);
  return max;
}
let A = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
console.log(LIS(A));
