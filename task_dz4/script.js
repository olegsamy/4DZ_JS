// 4 Необходимо вывести горку в консоль (используйте цикл for), как показано на рисунке,
// только у вашей горке должно быть 20 рядов, а не 5:
// х
// хх
// ххх
// хххх
// ххххх

// var 1
for (let i = 0; i < 20; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
        result = result + "x";
    }
    console.log(result);
}

// var 2    
const array = [];
for (let i = 0; i < 20; i++) {
    const element = array[i];
    array.push("x");
    console.log(array.join(''));
}

