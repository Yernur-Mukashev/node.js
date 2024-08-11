// Условный оператор.  Еще вы можете использовать условные конструкции в шаблоне. Начинается условие с двойных фигурных скобок и оператора #if. Далее через пробел указывается переменная, которая будет проверена на истинность


const handlebars = require("handlebars");

const template = handlebars.compile(
	"{{#if bold}} <b>Hello!</b> {{else}} <p>Hello!</p> {{/if}}"
);

console.log(template({ bold: true }));
console.log(template({ bold: false }));
