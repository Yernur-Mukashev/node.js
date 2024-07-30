// Модуль fs помимо асинхронных методов имеет также синхронные методы. Давайте разберёмся в чём различие.

const fs = require('fs');

try {
    const result = fs.readFileSync(__filename, 'utf-8');
    console.log(result);
} catch (err) {
    console.log(err);
}

try {
    fs.appendFileSync(__filename, '\nconsole.log("Hello, World!")');
    console.log('The file was saved!');
} catch (err) {
    console.log(err);
}
console.log("Hello, World!")