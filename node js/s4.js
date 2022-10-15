const fs = require('fs');
 const path = require('path');
const dirpath =path.join(__dirname,'CRUD');
 const filePath = `${dirpath}/apple.txt`;

// fs.writeFileSync(  filePath, ' this is apple file ');

// fs.readFile(filePath, 'utf8',(err, item)=>{
//   console.log(item)
// })


fs.appendFile()