function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
function knapsack(values, weights, capacity, n) {
  let t = [];
  for (let i = 0; i <= n; i++) {
    let row = [];
    for (let j = 0; j <= capacity; j++) {
      if (i == 0 || j == 0) {
        row.push(0);
      } else {
        row.push(-1);
      }
    }
    t.push(row);
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (weights[i - 1] > j) {
        t[i][j] = t[i - 1][j];
      } else {
        t[i][j] = max(
          values[i - 1] + t[i - 1][j - weights[i - 1]],
          t[i - 1][j]
        );
      }
    }
  }
  return t[n][capacity];
}
values = [3, 4, 5, 6];
weights = [2, 3, 4, 5];
capacity = 5;
console.log(knapsack(values, weights, capacity, 4));
