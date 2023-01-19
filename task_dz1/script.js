// 1. Необходимо с помощью цикла for вывести 11 строк в консоль:
// 0 - это ноль
// 1 - нечетное число
// 2 - четное число
// 3 - нечетное число
// …
// 10 - четное число

const arrayOne = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i <= 10; i++) {
    let element = arrayOne[i];

    if ((i+1) % 2 && i !== 0) {
        element = element + ' - ' + 'четное число';
    } else if (i === 0) {
        element = element + ' - ' + 'это ноль';
    } else {
        element = element + ' - ' + 'нечетное число';
    }
    console.log(element);
}
    