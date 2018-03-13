/*
const http = require('http');

const server = http.createServer();

const Logger    = require('./logger'); 
const Constants = require('./constants');

server.on('request', (request, response) => {
    response.writeHead(200);

    Logger.loggerEmit(Constants.INFO, 'This is an info msg.', true);

    setTimeout(() => {
        Logger.loggerEmit(Constants.WARN, 'This is a warning msg.', true);
    }, 5000);

    setTimeout(() => {
        Logger.loggerEmit(Constants.ERROR, 'This is an err msg.', true);
    }, 10000);

    // request.on('end', () => {
    setTimeout(() => {
        response.end();
        server.close();
    }, 15000);
    // });
}).listen(8080, () => {
    Logger.loggerEmit(Constants.INFO, 'Server running on port 8080.', true);
});

server.on('close', () => {
    Logger.loggerEmit(Constants.INFO, 'Server connection closed.', true);
});
*/