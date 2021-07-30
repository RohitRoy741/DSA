function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
function knapsack(values, weights, capacity, n) {
  if (capacity == 0 || n == 0) {
    return 0;
  } else if (weights[n - 1] > capacity) {
    return knapsack(values, weights, capacity, n - 1);
  } else {
    return max(
      values[n - 1] +
        knapsack(values, weights, capacity - weights[n - 1], n - 1),
      knapsack(values, weights, capacity, n - 1)
    );
  }
}

values = [3, 4, 5, 6];
weights = [2, 3, 4, 5];
capacity = 5;
console.log(knapsack(values, weights, capacity, 4));
