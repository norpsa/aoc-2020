import { readFileSync } from 'fs';

let seats = [];

// PART 1
readFileSync('input_day11.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
   seats.push(line.split(""));
});

let changes = 100;

const getAdjacent = (i, j) => {
    let adjacent = [];

    if(i > 0) {
        adjacent.push({ x: i - 1, y: j});
        if(j < seats.length - 1) {
            adjacent.push({ x: i - 1, y: j + 1});
        }
        if(j > 0) {
            adjacent.push({ x: i - 1, y: j - 1});
        }
    }

    if(j > 0) {
        adjacent.push({ x: i, y: j - 1});
        if(i < seats[0].length - 1) {
            adjacent.push({ x: i + 1, y: j - 1});
        }
    }

    if(i < seats[0].length - 1) {
        adjacent.push({ x: i + 1, y: j});

        if(j < seats.length - 1) {
            adjacent.push({ x: i + 1, y: j + 1});
        }
    }

    if(j < seats.length - 1) {
        adjacent.push({ x: i, y: j + 1});
    }
    return adjacent;
}

while(changes > 0) {
    changes = 0;
    let newSeats = [];

    for(let i = 0; i < seats.length; i++) {
        let line = [];
        for(let j = 0; j < seats[i].length; j++) {
            let adjacent = getAdjacent(j, i);
            if(seats[i][j] === 'L') {
                let countOccupied = 0;
                adjacent.forEach(c => {
                    if(seats[c.y][c.x] === '#') {
                        countOccupied++;
                    }
                });
                if(countOccupied === 0) {
                    line.push('#');
                    changes++;
                } else {
                    line.push('L');
                }
            }
            if(seats[i][j] === '#') {
                let countOccupied = 0;
                adjacent.forEach(c => {
                    if(seats[c.y][c.x] === '#') {
                        countOccupied++;
                    }
                });
                if(countOccupied >= 4) {
                    line.push('L');
                    changes++;
                } else {
                    line.push('#')
                }
            }
            if(seats[i][j] === '.') {
                line.push('.');
            }
        }
        newSeats.push(line);
    }
    for(let i = 0; i < seats.length; i++) {
        for(let j = 0; j < seats[i].length; j++) {
            seats[i][j] = newSeats[i][j];
        }
    }
}

/*console.log(seats);
for(let i = 0; i < seats.length; i++) {
    console.log(seats[i].join(""))
};*/

let countOccupied = 0;
for(let i = 0; i < seats.length; i++) {
    for(let j = 0; j < seats[i].length; j++) {
        if(seats[i][j] === "#") {
            countOccupied++;
        }
    }
}

console.log(countOccupied);