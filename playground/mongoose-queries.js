const {mongoose} = require('./../server/db/mongoose'); 
const {User} = require('./../server/models/User'); 
const {ObjectID} = require('mongodb') 

let id = '5c21ec3eb5c9b41dec42f3ce'; 

if(!ObjectID.isValid(id)) { 
 return console.log('Id not valid');
} 

User.findById(id).then((res) => { 
  if(!res) { 
    return console.log('id not found');
  } 
  return console.log(JSON.stringify(res, undefined, 2));
}).catch((err) => {console.log(e)});