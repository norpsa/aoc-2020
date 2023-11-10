import { readFileSync } from 'fs';

let numbers = [];

readFileSync('input_day1.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
    numbers.push(parseInt(line))
});

for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
        if(numbers[i] + numbers[j] === 2020) {
            console.log("PART 1");
            console.log(numbers[i]*numbers[j])
        }
    }
}

for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
        for(let k = j + 1; k < numbers.length; k++) {
            if(numbers[i] + numbers[j] + numbers[k] === 2020) {
                console.log(numbers[i]*numbers[j]*numbers[k])
            }
        }
    }
}