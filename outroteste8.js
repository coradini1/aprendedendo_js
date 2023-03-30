const getCount = (str) => {
  let vowelsCount = 0;
  for (let char of str) {
    if ("aeiou".includes(char)) vowelsCount++;
  }
  return vowelsCount;
};
console.log(getCount("my pyx")); // 0
console.log(getCount("pear tree")); // 4
console.log(getCount("abracadabra")); // 5
console.log(getCount("o a kak ushakov lil vo kashu kakao")); // 13
