// 3. Используйте Math.rendom() вам необходимо генерировать цифры от 0 до 9
// и создать массив состоящий из 5 таких элементов
// 1 Рассчитать сумму элементов этого массива
// 2 Найти минимальное число
// 3 Найти есть ли в этом массиве число 3

const arrThreeTask = new Array(5);
let sum = 0;
let min;
let findNumber;
let min2;

for (let i = 0; i < arrThreeTask.length; i++) {

    arrThreeTask[i] = Math.floor(Math.random() * 10);
    sum = sum + arrThreeTask[i];
}
if (arrThreeTask.indexOf(3) + 1 === 0) {
    findNumber = 'отсутствует';
} else {
    findNumber = `присутствует - ${arrThreeTask.indexOf(3) + 1} по счету слева `;
}

min = Math.min.apply(null, arrThreeTask);


console.log(arrThreeTask);
console.log(` Сумма элементов массива равна ${sum}`);
console.log(` Минимальное значение элементов массива равно ${min}`);
console.log(` Число 3 в массиве ${findNumber}`);


// Var2 min
min2 = arrThreeTask[0];
for (let i = 1; i < arrThreeTask.length; i++) {

    if (arrThreeTask[i] < min2) {
        min2 = arrThreeTask[i];
    }
}

console.log('');
console.log(`Минимальное значение элементов массива (2 вариант) равно ${min2}`);

