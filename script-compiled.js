'use strict';

var hello = 'Hello';
var world = 'World';

console.log(hello + ' ' + world);
"use strict";

var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

var score = multiply(6, 4);
console.log(score);
"use strict";

var average = function average(arr) {
  return arr.reduce(function (p, c) {
    return p + c;
  }, 0);
};

var score2 = average([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(score2);

// numbers = [1, 2, 3, 4];
// const [first, second, ...rest] = numbers;
// const total = 0;
// const logArguments = (...args) => args.forEach(arg => total + numbers);
// var avg = total / numbers.length;
// console.log(avg);

// Nie wiem do końca jak w tym przypadku przerobić pętlę for na es6
"use strict";

var avg = function avg(arr) {
  return arr.reduce(function (p, c) {
    return p + c;
  }, 0);
};

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var score3 = avg(grades);
console.log(score3);
'use strict';

var names = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = names[2],
    lastName = names[4];

console.log(firstName, lastName);
