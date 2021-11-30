let t = [];
let maxMatrices = 20;
for (let i = 0; i <= maxMatrices; i++) {
  let row = [];
  for (let j = 0; j <= maxMatrices; j++) {
    if (i === j || i > j) {
      row.push(0);
    } else {
      row.push(-1);
    }
  }
  t.push(row);
}
function MCM(p, i, j) {
  if (t[i][j] !== -1) {
    return t[i][j];
  }
  let min = 1000000;
  let intermediate;
  for (let k = i; k < j; k++) {
    intermediate = MCM(p, i, k) + MCM(p, k + 1, j) + p[i - 1] * p[k] * p[j];
    min = intermediate < min ? intermediate : min;
  }
  t[i][j] = min;
  return t[i][j];
}
p = [1, 2, 3, 4, 3];
console.log(MCM(p, 1, p.length - 1));
