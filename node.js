const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
    fs.readdir('/home/chikchicly/git/travel-oK/img', (err, files) => {
        if (err) throw err;
       
        console.log(files);
      });
});

server.listen(port, hostname, () => {
    console.log(
        `Сервер запущен на http://${hostname}:${port}/`
    );
});