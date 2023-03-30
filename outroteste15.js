//minha solucao
const isSquare = (n) => {
  let numero = Math.sqrt(n);
  return Number.isInteger(numero);
};

//solucao do cara
const isSquare1 = (n) => {
  return Math.sqrt(n) % 1 === 0;
};

console.log(isSquare(0)); // true
console.log(isSquare(4)); // true
console.log(isSquare(25)); // true
console.log(isSquare(3)); // false
console.log(isSquare(93)); // false
console.log(isSquare(-1)); // false
