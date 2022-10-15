const fs = require('fs');
const path = require( 'path');
const input = process.argv;
const dirpath = path.join(__dirname, 'kgs');

if (input[2] == 'add') {
    for(i=0; i<5 ;i++){
        fs.writeFileSync( dirpath +"/d"+i+".txt","hello word");
     }
}

else if (input[2] == 'remove') {
 
    fs.unlinkSync(input[3]);

     

}
else{
    console.log("Invalid input");
}




