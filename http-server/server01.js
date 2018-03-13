const http = require('http')
const server = http.createServer()
const {readFile} = require('fs');

server.on('request', (req, res) => {
    console.log('Request received for:', req.url)
    let resource = req.url.slice(-1) === '/' ? req.url.slice(1).concat('index.html') : `${req.url.slice(1)}.html`
    readFile(resource, (err, file) => {
      if (err) { res.statusCode = 404;
      return res.end('Not found, dude');
      }
      res.end(file);
    });
});
server.listen(8080)