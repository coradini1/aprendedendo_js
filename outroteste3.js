const past = (h, m, s) => {
  let segundo = 1000 * s;
  let minuto = m * (60 * 1000);
  let hora = h * (60 * 60 * 1000);
  let all = minuto + segundo + hora;
  return all;
};

console.log(past(0, 0, 0)); // 0
console.log(past(0, 1, 1)); // 61000
console.log(past(1, 0, 0)); // 3600000
console.log(past(1, 0, 1)); // 3601000
console.log(past(1, 1, 1)); // 3661000
