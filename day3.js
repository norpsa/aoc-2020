import { readFileSync } from 'fs';

let map = [];
// PART 1
readFileSync('input_day3.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
   map.push(line.split(""));
});

let treeCount = 0;
let x = 0;
const width = map[0].length;

for(let y = 1; y < map.length; y++) {
    x += 3;
    if(x >= width) {
        x = x - width;
    }
    if(map[y][x] === '#') {
        treeCount++;
    }
}

console.log("PART 1", treeCount);

let treeCounts = [];
treeCounts.push(treeCount);

treeCount = 0;
x = 0;

for(let y = 1; y < map.length; y++) {
    x += 1;
    if(x >= width) {
        x = x - width;
    }
    if(map[y][x] === '#') {
        treeCount++;
    }
}

treeCounts.push(treeCount);
treeCount = 0;
x = 0;

for(let y = 1; y < map.length; y++) {
    x += 5;
    if(x >= width) {
        x = x - width;
    }
    if(map[y][x] === '#') {
        treeCount++;
    }
}

treeCounts.push(treeCount);
treeCount = 0;
x = 0;

for(let y = 1; y < map.length; y++) {
    x += 7;
    if(x >= width) {
        x = x - width;
    }
    if(map[y][x] === '#') {
        treeCount++;
    }
}

treeCounts.push(treeCount);
treeCount = 0;
x = 0;

for(let y = 2; y < map.length; y += 2) {
    x += 1;
    if(x >= width) {
        x = x - width;
    }
    if(map[y][x] === '#') {
        treeCount++;
    }
}

treeCounts.push(treeCount);

console.log(treeCounts);
console.log(treeCounts.reduce((a, b) => a*b, 1));
