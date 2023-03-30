const likes = (names) => {
  let contador = 0;
  for (let char of names) {
    contador++;
  }

  if (contador === 0) {
    return (names = "no one likes this");
  } else if (contador === 1) {
    return (names = `${names[0]} likes this`);
  } else if (contador === 2) {
    return `${names[0]} and ${names[1]} likes this`;
  } else if (contador === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    let num = names.length - 2;
    return `${names[0]}, ${names[1]} and ${num} others like this`;
  }
};

console.log(likes([])); // 'no one likes this'
console.log(likes(["Peter"])); // 'Peter likes this'
console.log(likes(["Jacob", "Alex"])); // 'Jacob and Alex like this'
console.log(likes(["Max", "John", "Mark"])); // 'Max, John and Mark like this'
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // 'Alex, Jacob and 2 others like this'
