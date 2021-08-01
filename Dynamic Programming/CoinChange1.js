function coinChange(coins, sum) {
  let t = [];
  for (let i = 0; i <= coins.length; i++) {
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
  for (let i = 1; i <= coins.length; i++) {
    for (let j = 1; j <= sum; j++) {
      if (coins[i - 1] > j) {
        t[i][j] = t[i - 1][j];
      } else {
        t[i][j] = t[i][j - coins[i - 1]] + t[i - 1][j];
      }
    }
  }
  return t[coins.length][sum];
}
coins = [1, 2, 3];
sum = 5;
console.log(coinChange(coins, sum));
