import { readFileSync } from 'fs';

let bags = new Map();
let canBeContainedList = new Map();

// PART 1
readFileSync('input_day7.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
    let split = line.split("contain");
    let bagColor = split[0].split("bags")[0].trim();
    
    let contained = [];
    split[1].split(",").forEach(item => {
        let part = item.replace("bags.", "").replace("bag.", "").replace("bags", "").replace("bag", "").trim(); 
        if(part !== "no other") {
            let firstSpace = part.indexOf(" ");
            let color = part.slice(firstSpace + 1).trim();
            contained.push({number: parseInt(part.slice(0, firstSpace)), color: color});
            if(canBeContainedList.has(color)) {
                canBeContainedList.get(color).push(bagColor.trim());
            } else {
                canBeContainedList.set(color, [bagColor.trim()]);
            }
        }
    });
    bags.set(bagColor, contained);
});

//PART 1
let canHoldShinyGold = [];
let checkBags = canBeContainedList.get("shiny gold");

while(checkBags.length > 0) {
    let bag = checkBags.pop();
    if(!canHoldShinyGold.includes(bag)) {
        canHoldShinyGold.push(bag);
        if(canBeContainedList.has(bag)) {
            canBeContainedList.get(bag).forEach(a => checkBags.push(a));
        }
    }
}

console.log(canHoldShinyGold.length);

// PART 2
let countBags = color => {
    if(bags.get(color).length === 0) {
        return 0;
    } else {
        let sum = 0;
        bags.get(color).forEach(bag => {
            sum += bag.number;
            sum += (bag.number*countBags(bag.color));
        });
        return sum;
    }
}
console.log(countBags("shiny gold"));