let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let tot = 0;
let div = 0;

for (let index = 0; index < numbers.length; index += 1) {
    tot += numbers[index]
}

console.log(tot / numbers.length)