function MCM(p, i, j) {
  if (i === j) {
    return 0;
  }
  let min = 1000000;
  let intermediate;
  for (let k = i; k < j; k++) {
    intermediate = MCM(p, i, k) + MCM(p, k + 1, j) + p[i - 1] * p[k] * p[j];
    min = intermediate < min ? intermediate : min;
  }
  return min;
}
p = [1, 2, 3, 4, 3];
console.log(MCM(p, 1, p.length - 1));
