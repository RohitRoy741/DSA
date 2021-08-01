function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
function rodCutting(price, lengths, L, n) {
  let t = [];
  for (let i = 0; i <= n; i++) {
    let row = [];
    for (let j = 0; j <= L; j++) {
      if (i === 0 || j === 0) {
        row.push(0);
      } else {
        row.push(-1);
      }
    }
    t.push(row);
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= L; j++) {
      if (lengths[i - 1] > j) {
        t[i][j] = t[i - 1][j];
      } else {
        t[i][j] = max(price[i - 1] + t[i][j - lengths[i - 1]], t[i - 1][j]);
      }
    }
  }
  return t[n][L];
}
let price = [1, 5, 8, 9, 10, 17, 17, 20];
let lengths = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(rodCutting(price, lengths, 8, 8));
