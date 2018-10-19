const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');

//filesystem
fs.readFile('index.html', function(err, html){
  if(err){
    throw err;
  }

  var server = http.createServer(function(req, res){
    res.statusCode = 200;
    // text type html otherwise entire file will be printed
    res.setHeader('Content-type', 'text/html');
    // output the html from file system
    res.write(html);
    res.end();
  });

  server.listen(port, hostname, function(){
    console.log('Server started on port '+port);
  });
});
