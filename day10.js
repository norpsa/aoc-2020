import { readFileSync } from 'fs';

let numbers = [];

// PART 1
readFileSync('input_day10.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
   numbers.push(parseInt(line));
});
numbers.sort((a,b) => a - b);
numbers.push(numbers[numbers.length - 1] + 3);

let difference1 = 0;
let difference3 = 0;

let differences = [];
differences.push(numbers[0] - 0);
if(numbers[0] - 0 === 1) {
    difference1++;
} else {
    difference3++;
}

for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] - numbers[i-1] === 1) {
        difference1++;
    } else if(numbers[i] - numbers[i-1] === 3) {
        difference3++;
    }
}

console.log(difference1*difference3);

let counted = [];

for(let i = 0; i < numbers.length; i++) {
    counted.push(-1);
}

const possiblePaths = (index) => {

    let possiblePrevious = [];
    for(let j = index - 1; j > 0; j++) {
        if(numbers[index] - numbers[j] <= 3) {
            possiblePrevious.push(j);
        }
    }
    return possiblePrevious;
}

let paths = [];
let finalPaths = [];

paths.push([numbers[numbers.length - 1]]);

for(let i = 0; i < paths.length; j++) {
    let possible = possiblePaths(paths[i][paths[i].length - 1]);
    if()
    for(let k = 0; k < possible.length; k++){
        paths[i].push(numbers[possible[k]]);
    }
}


possiblePaths(numbers.length - 1);
