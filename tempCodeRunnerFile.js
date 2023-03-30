const disemvowel = (str) => {
  for (let char of str) {
    let newStr = char.replace("i", "");
  }
  return newStr;
};

console.log(disemvowel("This website is for losers LOL!")); // 'Ths wbst s fr lsrs LL!'
