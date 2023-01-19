// 2. Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// var1
const ArrayTwo = [1, 2, 3, 4, 5, 6, 7];
console.log(ArrayTwo);
ArrayTwo.splice(3,2);
console.log(ArrayTwo);
console.log('');

// var2
const ArrayTwoV2 = [1, 2, 3, 4, 5, 6, 7];
const part1 = ArrayTwoV2.slice(0, 3);
const part2 = ArrayTwoV2.slice(5);
// console.log(part1);
// console.log(part2);
const newArray = part1.concat(part2);
console.log(newArray);
