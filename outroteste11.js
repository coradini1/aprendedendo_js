const getMiddle = (str) => {
  const length = str.length;
  let mid = length / 2;
  if (length % 2) {
    return str[Math.floor(mid)];
  } else {
    return str[mid - 1] + str[mid];
  }
};

console.log(getMiddle("test")); // 'es'
console.log(getMiddle("testing")); // 't'
console.log(getMiddle("middle")); // 'dd'
console.log(getMiddle("A")); // 'A'
