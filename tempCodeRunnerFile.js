const getMiddle = (str) => {
  const length = str.length;
  let mid = length / 2;
  if (mid % 2 === 0) {
    return str[mid - 1] + str[mid];
  } else {
    return str[Math.floor(mid)];
  }
};

console.log(getMiddle("test")); // 'es'
console.log(getMiddle("testing")); // 't'
console.log(getMiddle("middle")); // 'dd'
console.log(getMiddle("A")); // 'A'
