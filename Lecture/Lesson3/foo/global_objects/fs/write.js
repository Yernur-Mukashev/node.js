// Чтобы записать что-то в файл, можно воспользоваться методом .writeFile(). Этот метод полностью перезаписывает указанный файл:

const fs = require("fs");

fs.writeFile(__filename, 'console.log("Hello, World!!!")', (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("The file was saved");
	}
});

// Ответ: будет перезаписан запущенный файл скрипта. Здесь так же, как и в примере с fs.readFile(), __filename указывает на текущий скрипт и, так как fs.writeFile() перезаписывает файл полностью, в итоге вся информация в скрипте удалится и появится console.log(“Hello!”).
