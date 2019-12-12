const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/plain'
  })
  res.write('hello server')
  res.end()
}).listen(80)
