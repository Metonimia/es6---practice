const numAvg = num => {
    var total = 0;
    for (var i = 0; i < num.length; i++) { 
        total += num[i];
    }
    return total/num.length;
}

const average = numAvg([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
console.log(average);