capacityMax = 10;
itemsMax = 10;
function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
let t = [];
for (let i = 0; i <= itemsMax; i++) {
  let row = [];
  for (let j = 0; j < capacityMax; j++) {
    if (i == 0 || j == 0) {
      row.push(0);
    } else {
      row.push(-1);
    }
  }
  t.push(row);
}
function knapsack(values, weights, capacity, n) {
  if (t[n][capacity] !== -1) {
    return t[n][capacity];
  }
  if (weights[n - 1] > capacity) {
    t[n][capacity] = knapsack(values, weights, capacity, n - 1);
    return t[n][capacity];
  } else {
    t[n][capacity] = max(
      values[n - 1] +
        knapsack(values, weights, capacity - weights[n - 1], n - 1),
      knapsack(values, weights, capacity, n - 1)
    );
    return t[n][capacity];
  }
}

values = [3, 4, 5, 6];
weights = [2, 3, 4, 5];
capacity = 5;
console.log(knapsack(values, weights, capacity, 4));
