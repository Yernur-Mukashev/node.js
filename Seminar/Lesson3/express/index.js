const express = require('express');

const app = express();

app.get('/', (reg, res) => {
    res.send('<h1>Добро пожаловать на мой сайт!</h1>');
});

app.get('/about', (reg, res) => {
    res.send('<h1>Страница обо мне</h1>');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})