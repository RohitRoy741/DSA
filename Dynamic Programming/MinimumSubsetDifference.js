function minimumSubsetDifference(array, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += array[i];
  }
  let t = [];
  for (let i = 0; i <= n; i++) {
    let row = [];
    for (let j = 0; j <= sum; j++) {
      if (j === 0) {
        row.push(true);
      } else {
        row.push(false);
      }
    }
    t.push(row);
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (array[i - 1] > j) {
        t[i][j] = t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j - array[i - 1]] || t[i - 1][j];
      }
    }
  }
  for (let s1 = sum / 2; s1 <= sum; s1++) {
    if (t[n][s1]) {
      return Math.abs(s1 - (sum - s1));
    }
  }
}
array = [1, 2, 7];
console.log(minimumSubsetDifference(array, 3));
