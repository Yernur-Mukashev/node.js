const fs = require("fs");
const path = require("path");

// const person = {
//     "name": "Ivan",
// 	"surname": "Ivanov",
// 	"age": 30,
// 	"city": "Moscow",
// };

const filePath = path.join(__dirname, "person.json");

const dataJson = fs.readFileSync(filePath, "utf-8");
const data = JSON.parse(dataJson);
data.age -= 10;
data.city = "Ekaterinburg";

fs.writeFileSync(filePath, JSON.stringify(data));
