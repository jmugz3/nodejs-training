function handleHTTP(req, res){
    
    if(req.method === "GET"){
        
        if(req.url === '/'){
            res.writeHead(200, {
            "Content-type": "text/plain" 
            });
            res.end("Hello World "+ Math.random());
        } else {
            res.writeHead(403);
            res.end("Not here. Move on!");            
        }
        
    } else {
        res.writeHead(403);
        res.end("Not here. Move on!");
    }
}



var host = "localhost";
var port = 8006;

var http = require('http');
var http_serv = http.createServer(handleHTTP).listen(port, host);

