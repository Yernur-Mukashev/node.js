// Handlebars в express
// Теперь давайте попробуем использовать Handlebars в express. Сразу начнем с примера:

const fs = require("fs");
const path = require("path");
// В первую очередь импортируются четыре модуля: fs, path, express и handlebars. Для чего нужен fs и path вы узнаете совсем скоро.

const express = require("express");
const handlebars = require("handlebars");
const app = express();

const articles = [
	{ title: "Article 1", description: "First awesome article" },
	{ title: "Article 2", description: "Second awesome article" },
	{ title: "Article 3", description: "Third awesome article" },
];

app.get("/", (req, res) => {
	const pathToTemplate = path.join(__dirname, "/templates/home.handlebars");

	// На двадцатой строке загружается файл шаблона с помощью метода .readFile() модуля fs.
	fs.readFile(pathToTemplate, "utf-8", (err, data) => {
		if (err) {
			res.status(500);
			res.send(err.message);
		} else {
			const templates = handlebars.compile(data);
			res.send(templates({ articles }));
		}
	});
});

app.listen(3000);
