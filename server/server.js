const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socket = require('socket.io');
module.exports.io = socket(server);

require('./socket/socket');

const path = require('path');
const pathPublic = path.resolve(__dirname, '../public');
app.use(express.static(pathPublic));

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Corriendo en el puerto' + port);
})