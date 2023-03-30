const createPhoneNumber = (numbers) => {
  // Using substrings
  const str = numbers.join("");
  return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;

  // Alternative solution using RegEx
  // return numbers.join('').replace(/(\d{3})(\d{3})(\d+)/, '($1) $2-$3');

  // Alternative solution using reduce()
  // return numbers.reduce((acc, cur) => acc.replace('x', cur), '(xxx) xxx-xxxx');
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // '(111) 111-1111'
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
