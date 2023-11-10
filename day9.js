import { readFileSync } from 'fs';

let numbers = [];

// PART 1
readFileSync('input_day9.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
   numbers.push(parseInt(line));
});

const getSums = (start, end) => {
    let sums = [];
    for(let i = start; i < end; i++) {
        for(let j = i + 1; j <= end; j++) {
            sums.push(numbers[i] + numbers[j]);
        }
    }
    return sums;
}
let invalidNumber = 0;
for(let i = 25; i < numbers.length; i++) {
    let possibleSums = getSums(i - 25, i - 1);
    if(!possibleSums.includes(numbers[i])) {
        invalidNumber = numbers[i];
        console.log(numbers[i]);
        break;
    }
}

let sum = 0;
let sumNumbers = [];
for(let i = 0; i < numbers.length - 1; i++) {
    sum = numbers[i];
    sumNumbers = [];
    sumNumbers.push(numbers[i]);
    for(let j = i + 1; j < numbers.length; j++) {
        sum += numbers[j];
        sumNumbers.push(numbers[j]);
        if(sum >= invalidNumber) {
            break;
        }
    }
    if(sum === invalidNumber){
        break;
    }
}

sumNumbers.sort((a,b) => a - b);
console.log(sumNumbers[0] + sumNumbers[sumNumbers.length - 1]);