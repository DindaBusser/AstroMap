const http = require('http')
const fs = require ('fs')

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('AstroMap.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write("Oops,an error...")
        } else {
            res.write(data)
        }
        res.end()
    })
})
