const { calculateResultSum: calc } = require('./calculate');

// Должен быть результат  78.66
const total = calc([12.1, 32.2, 43.1], 0.9);

// По факту получаем 78.66000000000001
console.log('Общая стоимость покупки: ' + total +' рублей');