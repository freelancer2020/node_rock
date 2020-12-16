const http = require('http');
const fs = require('fs-extra');
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

http.createServer( (req, res) => {
    const para = '<b><i> Server response </i></b>';
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(para);
})
.listen(3000);