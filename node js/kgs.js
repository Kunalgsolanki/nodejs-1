const express = require('express');
const app = express ();


app.get( '', (req , resp)=>{
   resp.send("<h1> Kunal G solanki </h1>")
});

app.get( '/d', (req , resp)=>{
    resp.send("<h1>  Param </h1>")
 });

 app.get( '/m', (req , resp)=>{
    resp.send("<h1> Mithil </h1>")
 });
 
 app.listen(9000);
 