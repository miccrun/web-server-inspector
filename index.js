var http = require('http');

const PORT = 8080;

function handleRequest(request, response){
  var body = '';

  request.on('data', function(chunk) {
    body += chunk.toString();
  })

  request.on('end', function() {
    console.log('http version: ' + request.httpVersion);
    console.log('method: ' + request.method);
    console.log('url: ' + request.url);
    console.log('headers: ' + JSON.stringify(request.headers, null, 2));
    console.log('body: ' + body);
    response.end('OK\n');
  });
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});
