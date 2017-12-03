import express from 'express';

const server = express();

// This is now built in middleware from express
server.use(express.json());
server.use(express.urlencoded());

// This is for all public static files we are going to serve
server.use(express.static('./public'));


// This is the root of the whole project
server.get('/', (req, res) => {

    res.send('Hello World');

});

server.listen(8000, 'localhost', () => {

    console.log(`The server is listening on post 8000`);

});

module.exports = server;
