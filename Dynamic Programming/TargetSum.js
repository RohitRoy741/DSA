function targetSum(array, target) {
  let sum = 0,
    cnt = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    if (array[i] === 0) {
      cnt++;
    }
  }
  if ((sum + target) % 2 === 1) {
    return 0;
  }
  let s1 = (sum + target) / 2;
  let t = [];
  for (let i = 0; i <= array.length; i++) {
    let row = [];
    for (let j = 0; j <= s1; j++) {
      if (j === 0) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    t.push(row);
  }
  for (let i = 1; i <= array.length; i++) {
    if (array[i - 1] > j || array[i - 1] === 0) {
      t[i][j] = t[i - 1][j];
    } else {
      t[i][j] = t[i - 1][j - array[i - 1]] + t[i - 1][j];
    }
  }
  return Math.pow(2, cnt) * t[array.length][s1];
}
