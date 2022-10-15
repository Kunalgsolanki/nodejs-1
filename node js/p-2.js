const fs = require('fs');

const input = process.argv;

if (input[3] == 'add') {
    fs.writeFileSync(input[4], input[5]);
}
else if (input[3] == 'remove') {
 
    fs.unlinkSync(input[4]);

     

}
else{
    console.log("Invalid input");
}
