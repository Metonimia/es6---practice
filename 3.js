const average = arr => arr.reduce( ( p, c ) => p + c, 0 )

const score2 = average( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );
console.log(score2);

// numbers = [1, 2, 3, 4];
// const [first, second, ...rest] = numbers;
// const total = 0;
// const logArguments = (...args) => args.forEach(arg => total + numbers);
// var avg = total / numbers.length;
// console.log(avg);
 
// Nie wiem do końca jak w tym przypadku przerobić pętlę for na es6
