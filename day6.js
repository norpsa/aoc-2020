import { readFileSync } from 'fs';

let groups = [];
// PART 1
readFileSync('input_day6.txt', 'utf-8').split(/\r?\n\n/).forEach(function(group){
   groups.push(group);
});

let counts = [];

groups.forEach(group => {
    let letters = [];
    group.split(/\r?\n/).forEach(line => {
        line.split("").forEach(letter => {
            if(!letters.includes(letter)) {
                letters.push(letter);
            }
        });
    });
    counts.push(letters.length);
});

console.log(counts.reduce((a, b) => a + b, 0));

// PART 2
counts = [];
groups.forEach(group => {
    let all_known = "abcdefghijklmnopqrstuvwxyz".split("");
    group.split(/\r?\n/).forEach(line => {
        let one_knows = line.split("");
        all_known = all_known.filter(element => one_knows.includes(element));
    });

    counts.push(all_known.length);
});

console.log(counts.reduce((a, b) => a + b, 0));