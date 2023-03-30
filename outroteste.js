const even_or_odd = (number) => {
  let result = "";
  if (number % 2 === 0) {
    return (result = "even");
  } else return (result = "odd");
};
console.log(even_or_odd(0)); // 'Even'
console.log(even_or_odd(2)); // 'Even'
console.log(even_or_odd(3)); // 'Odd'
console.log(even_or_odd(-3)); // 'Odd'
