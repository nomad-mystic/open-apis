import express from 'express';
import 'bootstrap';

const app = express();

// This is now built in middleware from express
app.use(express.json());
app.use(express.urlencoded());

// This is for all public static files we are going to serve
app.use(express.static('./public'));


// This is the root of the whole project
app.get('/', (req, res) => {

    res.send('Hello World');

});

const server = app.listen(8000, 'localhost', () => {

    console.log(`The server is listening on post 8000`);

});

module.exports = server;
