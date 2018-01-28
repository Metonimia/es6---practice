const avg = arr => arr.reduce( ( p, c ) => p + c, 0 )

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const score3 = avg(grades);
console.log(score3);

