
const http = require('http');
const data2 = require('./data2');

http.createServer(
    (req , resp )=>{
  
         resp.writeHead(200,
            {'Content-Type': 'application\json'}
            );
            resp.write(
                JSON.stringify(data2)
            );
      resp.end();
    } 
).listen(1500);