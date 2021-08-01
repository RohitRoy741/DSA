function subsetCount(array, sum, n) {
  let t = [];
  for (let i = 0; i <= n; i++) {
    let row = [];
    for (let j = 0; j <= sum; j++) {
      if (j === 0) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    t.push(row);
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (array[i - 1] > j) {
        t[i][j] = t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j - array[i - 1]] + t[i - 1][j];
      }
    }
  }
  return t[n][sum];
}
array = [5, 6, 8];
sum = 10;
console.log(subsetCount(array, sum, 3));
