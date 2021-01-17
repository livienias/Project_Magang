const http = require('http')
const fs = require('fs')
const port = 5000

const app = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('home.html', function(err, data){
        if(err){
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else{
            res.write(data)
        }
        res.end()
    })
})

app.listen(port, function(err){
    if(err){
        console.log('Cannot connect', err)
    } else{
        console.log('Server is listening on port ' + port)
    }
})