function MCM(p) {
  let t = [];
  for (let i = 0; i < p.length; i++) {
    let row = [];
    for (let j = 0; j < p.length; j++) {
      if (i == 0 || j == 0 || i >= j) {
        row.push(0);
      } else {
        row.push(1000000);
      }
    }
    t.push(row);
  }
  for (let i = 1; i < p.length; i++) {
    for (let j = i + 1; j < p.length; j++) {
      for (let k = i; k < j; k++) {
        let result = t[i][k] + t[k + 1][j] + p[i - 1] * p[k] * p[j];
        if (result < t[i][j]) {
          t[i][j] = result;
        }
      }
    }
  }
  console.log(t);
  return t[1][p.length - 1];
}
p = [1, 2, 3, 4, 3];
console.log(MCM(p));
