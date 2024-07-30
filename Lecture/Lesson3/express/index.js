// Express - это быстрый, гибкий и минималистичный фреймворк для создания веб-приложений на Node.js

const express = require('express');

const app = express();

// Обрабатываем каждый запрос и добавляем в консоль (должен быть в начале)
app.use((req, res, next) => {
    console.log('Поступил запрос', req.method, req.url);
    next();
});

// Корневая страница
app.get('/', (req, res) => {
    res.send('<h1>Добро пожаловать на мой сайт!</h1>')
});

// Страница "Обо мне"
app.get('/about', (req, res) => {
    res.send('<h1>Страница обо мне!</h1>')
})

const port = 3000;

app.listen(port, ()  => {
    console.log(`Сервер запущен на порту ${port}`);
    });