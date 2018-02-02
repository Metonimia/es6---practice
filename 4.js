const avg = (...arr) => arr.reduce((acc, item) => acc + item)/arr.length;
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const scoree = avg (...grades);
console.log(scoree);


