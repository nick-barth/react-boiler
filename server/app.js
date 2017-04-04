// src/server.js
const path = require('path');
const Express = require('express');

const app = new Express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'files')));

app.get('/', (req, res) => {
    return res.render('index.ejs');
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info(`Server running on http://localhost:${port} [${env}]`);
});
