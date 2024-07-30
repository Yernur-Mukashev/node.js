// Этот модуль позволяет получить информацию об операционной системе

const os = require('os');

console.log(os.cpus()); // Выводит в консоль информацию о ядрах процессора

console.log(os.arch()); // Выводит в консоль информацию о архитектуре процессора

console.log(os.freemem()); // Выводит в консоль количество свободной памяти в байтах

console.log(os.totalmem() / 1024 / 1024 / 1024);


// Какие еще существуют модули?
// Основы Node.js
// url - позволяет работать с URL адресами и их компонентами
// crypto - позволяет работать с криптографией. Содержит в себе различные криптографические функции
// stream - позволяет управлять большими потоками данных
