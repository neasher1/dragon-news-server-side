const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/catagories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send("News API is Running..");
})

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.listen(port, () => {
    console.log("Dragon news server running on port ", port);
})