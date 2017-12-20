import express from 'express';
import { serverConfig } from './config/serverConfig';

const app = express();

// Import custom routes
import router from './api/routes/index';

// This is now built in middleware from express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// This is for all public static files we are going to serve
app.use(express.static('./public'));

// For routes
app.use('/api', router);

// This is the root of the whole project
app.get('/', (req, res) => {

    res.send('Hello World!!');

});

const server = app.listen(serverConfig.PORT, serverConfig.HOST, () => {

    console.log(`The server is listening on http://${serverConfig.HOST}:${serverConfig.PORT}`);

});

module.exports = server;
