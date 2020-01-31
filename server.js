let http = require('http');
let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', "text/html");
  res.end('hellow world');
})

server.listen(3000, () => {
  console.log('this server is started http://localhost:3000/');

})