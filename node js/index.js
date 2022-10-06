///  How to make  make simple api tutorial

// first make server 

const http = require('http');
const { json } = require('stream/consumers');
const data = require('./data');

  http.createServer (

     (req, resp)=>{
         

         resp.writeHead(200,
             {'Content-Type': 'application\json'}
            );

         resp.write(JSON.stringify(data))

         resp.end();
     }
  ).listen(2000)



 