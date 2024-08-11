const express = require("express");
const fs = require("fs");
const path = require("path");
const Joi = require("joi");
const { v4: uuidv4 } = require("uuid");

const app = express();

const usersScheme = Joi.object({
	firstName: Joi.string().min(2).required(),
	secondName: Joi.string().min(2).required(),
	age: Joi.number().min(0).required(),
	city: Joi.string().min(2),
});

const usersListPath = path.join(__dirname, "./users.json");
app.use(express.json());

/**
 * Получить все статьи
 */
app.get("/users", (req, res) => {
	const usersJson = fs.readFileSync(usersListPath, "utf-8");
	const usersData = JSON.parse(usersJson);
	res.send({ users: usersData });
});

/**
 * Получить конкретную статью
 */
app.get("/users/:id", (req, res) => {
	const usersJson = fs.readFileSync(usersListPath, "utf-8");
	const usersData = JSON.parse(usersJson);

	const user = usersData.find((user) => user.id === Number(req.params.id));

	if (user) {
		res.send({ user });
	} else {
		res.status(404);
		res.send({ user: null, message: "Пользователь не найден" });
	}
});

/**
 * Создание статьи
 */
app.post("/users", (req, res) => {
	const validateData = usersScheme.validate(req.body);
	if (validateData.error) {
		return res.status(400).send({ error: validateData.error.details });
	}

	const usersJson = fs.readFileSync(usersListPath, "utf-8");
	const usersData = JSON.parse(usersJson);

	let uniqueID = uuidv4();

	usersData.push({
		id: uniqueID,
		...req.body,
	});

	fs.writeFileSync(usersListPath, JSON.stringify(usersData)); //перезаписали файл

	res.send({
		id: uniqueID,
	});
});

/**
 * Обновление статьи
 */
app.put("/users/:id", (req, res) => {
	const validateData = usersScheme.validate(req.body);
	if (validateData.error) {
		return res.status(400).send({ error: validateData.error.details });
	}

	const usersJson = fs.readFileSync(usersListPath, "utf-8");
	const usersData = JSON.parse(usersJson);

	const user = usersData.find((user) => user.id === Number(req.params.id));

	if (user) {
		user.firstName = req.body.firstName;
		user.secondName = req.body.secondName;
		user.age = req.body.age;
		user.city = req.body.city;

		fs.writeFileSync(usersListPath, JSON.stringify(usersData)); //перезаписали файл

		res.send({ user });
	} else {
		res.status(404);
		res.send({ user: null, message: "Пользователь не найден" });
	}
});

/**
 * Удаление статьи
 */
app.delete("/users/:id", (req, res) => {
	const usersJson = fs.readFileSync(usersListPath, "utf-8");
	const usersData = JSON.parse(usersJson);

	const userIndex = usersData.findIndex(
		(user) => user.id === Number(req.params.id)
	);

	if (userIndex > -1) {
		usersData.splice(userIndex, 1); // удаляет один элемент массива usersData с позиции userIndex
		fs.writeFileSync(usersListPath, JSON.stringify(usersData)); //перезаписали файл

		res.send({ message: "Пользователь успешно удален!" });
	} else {
		res.status(404);
		res.send({ message: "Пользователь не найден!" });
	}
});

/**
 * Обработка несуществующих роутов
 */
app.use((req, res) => {
	res.status(404).send({
		message: "URL not found!",
	});
});

app.listen(3000);
