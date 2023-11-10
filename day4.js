import { readFileSync } from 'fs';

let passports = [];
// PART 1
readFileSync('input_day4.txt', 'utf-8').split(/\r?\n\n/).forEach(function(passport){
   passports.push(passport);
});

const required_fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

// PART 1
let validCount = 0;
passports.forEach(passport => {
    let parts = passport.replace( /\n/g, " " ).split( " " );
    let fields = parts.map(a => a.split(":")[0]);
    let valid = true;
    required_fields.forEach(f => {
        if(!fields.includes(f)){
            valid = false;
        }
    });

    if(valid) {
        validCount++;
    }

});

console.log("PART 1", validCount);

// PART 2
validCount = 0;
passports.forEach(passport => {
    let parts = passport.replace( /\n/g, " " ).split( " " );
    let fields = parts.map(a => a.split(":")[0]);
    let valid = true;
    required_fields.forEach(f => {
        if(!fields.includes(f)){
            valid = false;
        }
    });

    if(valid) {
        parts.forEach(part => {
            let split = part.split(":");
            switch(split[0]) {
                case 'byr':
                    let number = parseInt(split[1]);
                    if(!number) {
                        valid = false;
                    } else {
                        if(number < 1920 || number > 2002) {
                            valid = false;
                        }
                    }
                    console.log(split[0], split[1], valid);
                    break;
                case 'iyr':
                    let iyr = parseInt(split[1]);
                    if(!iyr) {
                        valid = false;
                    } else {
                        if(iyr < 2010 || iyr > 2020) {
                            valid = false;
                        }
                    }
                    console.log(split[0], split[1], valid);
                    break;
                case 'eyr':
                    let eyr = parseInt(split[1]);
                    if(!eyr) {
                        valid = false;
                    } else {
                        if(eyr < 2020 || eyr > 2030) {
                            valid = false;
                        }
                    }
                    console.log(split[0], split[1], valid);
                    break;
                case 'hgt':
                    let end = split[1].slice(-2);
                    if(end === 'cm') {
                        let cm = parseInt(split[1].slice(0, -2));
                        if(!cm) {
                            valid = false;
                        } else {
                            if(cm < 150 || cm > 193) {
                                valid = false;
                            }
                        }
                    } else if(end === 'in') {
                        let inch = parseInt(split[1].slice(0, -2));
                        if(!inch) {
                            valid = false;
                        } else {
                            if(inch < 59 || inch > 76) {
                                valid = false;
                            }
                        }
                    } else {
                        valid = false;
                    }
                    console.log(split[0], split[1], valid);
                    break;
                case 'hcl':
                    if(split[1].length !== 7) {
                        valid = false;
                    } else {
                        if(split[1].at(0) !== '#') {
                            valid = false;
                        } else {
                            console.log(split[1].slice(1));
                            if(!/[a-f]|[0-9]+$/.test(split[1].slice(1))) {
                                valid = false;
                            }
                        }
                    }
                    console.log(split[0], split[1], valid);
                    break;
                case 'ecl':
                    const validColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
                    if(!validColors.includes(split[1])) {
                        valid = false;
                    }
                    console.log(split[0], split[1], valid);
                    break;
                case 'pid':
                    if(split[1].length !== 9) {
                        valid = false;
                    } else {
                        if(!/^\d+$/.test(split[1])) {
                            valid = false;
                        }
                    }
                    console.log(split[0], split[1], valid);
                    break;
                default:
                    break;
            }
            

        })
    }
    if(valid) {
        validCount++;
    }

});

console.log(validCount);