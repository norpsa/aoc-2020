import { readFileSync } from 'fs';

let operations = [];
let accumulator = 0;
let index = 0;

// PART 1
const read = () => { 
    operations = [];
    accumulator = 0;
    index = 0;
    readFileSync('input_day8.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
    let parts = line.split(" ");
    
    operations.push({ operator: parts[0], value: parts[1], visited: false });
});
}

read();




// Part 1
while(true) {
    let current = operations[index];
    if(current.visited) {
        console.log(accumulator);
        break;
    }

    operations[index].visited = true;
    if(current.operator === "nop") {
        index++;
    } else if(current.operator === "acc") {
        accumulator += parseInt(current.value);
        index++;
    } else {
        index += parseInt(current.value);
    }
}

// Part 2
let changedIndex = 0;
for(let i = 0; i < operations.length; i++) {
    let works = true;
    read();
    if(operations[i].operator === "jmp") {
        operations[i].operator = "nop";
    } else if(operations[i].operator === "nop"){
        operations[i].operator = "jmp";
    } else {
        continue;
    }
    while(index < operations.length) {
        let current = operations[index];
        if(current.visited) {
            works = false;
            break;
        }
    
        operations[index].visited = true;
        if(current.operator === "nop") {
            index++;
        } else if(current.operator === "acc") {
            accumulator += parseInt(current.value);
            index++;
        } else {
            index += parseInt(current.value);
        }
    }
    if(works) {
        changedIndex = i;
        break;
    }
}

read();
if(operations[changedIndex].operator === 'nop') {
    operations[changedIndex].operator = "jmp";
} else {
    operations[changedIndex].operator = "nop";
}

while(index < operations.length) {
    let current = operations[index];

    operations[index].visited = true;
    if(current.operator === "nop") {
        index++;
    } else if(current.operator === "acc") {
        accumulator += parseInt(current.value);
        index++;
    } else {
        index += parseInt(current.value);
    }
}

console.log(accumulator);

