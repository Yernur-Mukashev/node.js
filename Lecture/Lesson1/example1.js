// Например, попробуем сложить все числа массива и вывести результат в консоль:

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = numArray.reduce((acc, number) => (acc += number), 0);
console.log("Результат сложения чисел массива:", sum);
