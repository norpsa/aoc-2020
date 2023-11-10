import { readFileSync } from 'fs';

let passes = [];

// PART 1
readFileSync('input_day5.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
   passes.push(line);
});

let seatIDs = [];
let maxSeatID = 0;

passes.forEach(pass => {
    let min = 0;
    let max = 127;
    for(let i = 0; i < 7; i++) {
        let letter = pass[i];
        if(letter === 'F') {
            max = Math.floor(max - ((max - min) / 2));
        } else {
            min = Math.ceil(min + ((max - min)/ 2));
        }
    }

    let row = min;
    
    let seatMin = 0;
    let seatMax = 7;
    for(let i = 7; i < 10; i++) {
        let letter = pass[i];
        if(letter === 'L') {
            seatMax = Math.floor(seatMax - ((seatMax - seatMin) / 2));
        } else {
            seatMin = Math.ceil(seatMin + ((seatMax - seatMin)/ 2));
        }
    }
    let seat = seatMin;
    let seatId = (row*8) + seat;

    if(seatId > maxSeatID) {
        maxSeatID = seatId;
    }
    seatIDs.push(seatId);
});

console.log("PART1", maxSeatID);

seatIDs.sort((a, b) => a - b);

for(let i = 1; i < seatIDs.length; i++) {
    if(seatIDs[i] - seatIDs[i-1] === 2) {
        console.log("PART2", seatIDs[i] - 1);
        break;
    }
}
