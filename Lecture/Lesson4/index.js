// Генерация HTML “на лету”. То есть мы можем добавлять к базовой строке другие строки с HTML тегами и контентом внутри в зависимости от различных условий. После того, как строка сконкатенированна, остается её передать в метод res.send(), и мы получим ровно то, чего хотели - динамическую генерацию HTML.


const express = require('express');
const app = express();

const articles = [
    {title: 'Article 1', description: 'First awesome article'},
    {title: 'Article 2', description: 'Second awesome article'},
    {title: 'Article 3', description: 'Third awesome article'},
];

app.get('/', (req, res) => {
    let html = '<h1>Article list</h1>';

    for (const articleData of articles) {
        html += `<h2>${articleData.title}</h2>`;
        html += `<p>${articleData.description}</p>`;
    }

    res.send(html);
});

app.listen(3000);