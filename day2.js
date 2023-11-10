import { readFileSync } from 'fs';

let validCount = 0;

// PART 1
readFileSync('input_day2.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
    let parts = line.split(" ");
    let occurences = parts[0].split("-");
    let minimum = occurences[0];
    let maximum = occurences[1];

    let letter = parts[1].at(0);

    let count = parts[2].split(letter).length - 1;

    if(count >= minimum && count <= maximum) {
        validCount++;
    }

});

console.log("PART 1", validCount);


validCount = 0;
// PART 2
readFileSync('input_day2.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
    let parts = line.split(" ");
    let occurences = parts[0].split("-");
    let first = occurences[0];
    let second = occurences[1];

    let letter = parts[1].at(0);

    let count = 0;
    if(parts[2].at(first - 1) === letter) {
        count++;
    }

    if(parts[2].at(second - 1) === letter) {
        count++;
    }

    if(count === 1) {
        validCount++;
    }

});

console.log("PART2", validCount);