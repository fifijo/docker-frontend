const http = require('http');

http
    .createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Hello World 2!');
    })
    .listen(5000);
