const fs = require('fs');
const path = require('path');
const dirpath =path.join(__dirname, 'k');

// for(i=0; i<5 ;i++){
//    fs.writeFileSync( dirpath +"/t1"+i+".txt","hello word");
// }

fs.readdir(dirpath , (err , files)=>{
  files.forEach ((item)=>{
      console.log( item)
  })
 
})