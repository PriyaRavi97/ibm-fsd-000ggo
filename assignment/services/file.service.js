const fs = require('fs');



let fileName = 'category.js';

const appendFile = (data) =>{

    fs.appendFile(fileName,data,(err)=>{

        if(err){

            console.error(err);

            console.log('Error ');

        }

    })

}