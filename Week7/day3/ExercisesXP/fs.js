// Exercise 1 : Reading From A File In Node.JS

const fs = require('fs');

let data = 'Some Text To See'


fs.writeFile('./text' ,data , (err)=>{
  if(err){
      console.log(err);
   }
});

fs.readFile('./text' , 'utf8' , (err , data)=>{
  if(err){
      console.log(err);
  }else{
      console.log(data);
  }
})




// Exercise 2 : Writing Files With Node JS
// 1. Create an fs.js file, and use the Node js File System to create a new text file and write to it.

let sumData = 'Buy orange juice'

fs.appendFile('newText' , sumData , (err)=>{
  if(err){
      console.log(err);
  }
} )

// 2. Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)

let db = 'Full stack'

fs.writeFile('./newText' , db , (err)=>{
   if(err){
       console.log(err);
   }
} )


//  3. Use the Node js File System to delete the file.


fs.unlink('./newText' , (err)=>{
  if(err){
      console.log(err);
  }else{
      console.log('delete');
  }
})