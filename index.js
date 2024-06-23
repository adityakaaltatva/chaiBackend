import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/twitter', (req, res) => {
    res.send('adityakaaltatva');
});

app.get('/login', (req, res) => {
    res.send('<h1>Login at Login</h1>');
});

app.listen(port, () => {
    console.log(`App is running on localhost:${port}`);
});
