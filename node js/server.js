// make basic server in node js 
// import http module 

const http = require('http');


function mithil (req, resp)  // mithil functio take a two parameter which is funcction to allow the request and responce to server 
{ 

resp.write(" <h1>  i am mithil maske </h1> ");
resp.end();

}
http.createServer(mithil).listen(4500) // call the function in the http  createserver function  as perameter