const http = require('http');
const data3 = require('./data3');



http.createServer(
    ( req , resp )=>{
         resp.writeHead(
       200,
{'Content-type': 'application\json'}

         );

         resp.write( JSON.stringify(data3));
         resp.end()
    }
).listen(2000)
