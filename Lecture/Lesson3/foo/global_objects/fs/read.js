// Для чтения файлов существует метод fs.readFile(). Он позволяет получить содержимое любого файла:

const fs = require("fs");

fs.readFile(__filename, "utf-8", (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});

// в консоли вы увидите содержимое файла скрипта, так как глобальное свойство __filename хранит в себе путь к запущенному скрипту и, следовательно, метод .readFile() прочитает этот же скрипт и выведет текст скрипта в консоль.
