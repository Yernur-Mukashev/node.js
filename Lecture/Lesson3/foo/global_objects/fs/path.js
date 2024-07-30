const path = require("path");

// console.log(path.join('/User/Student', 'Desktop/index.js')); // вернет строку "\User\Student\Desktop\index.js"

// console.log(path.parse('/User/Student/Desktop/index.js'));
// Вернется строка {
//     root: '/', //корень нашего пути
//     dir: '/User/Student/Desktop', // дириктория в котором храниться файл
//     base: 'index.js', // название  самого файла
//     ext: '.js', // расширение файла
//     name: 'index' // имя без расширение
//   }

// console.log(path.dirname('/User/Student/Desktop/index.js')); // Вернется строка /User/Student/Desktop

console.log(path.extname("/User/Student/Desktop/index.js")); // Метод path.extname() возвращает расширение файла, который указан в передаваемом пути .js
