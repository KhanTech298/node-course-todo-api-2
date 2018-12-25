let mongoose = require('mongoose'); 
var Todos = mongoose.model('Todos', { 
  text : {  
    type : String 
  }, 
  completed : { 
    type : Boolean 
  }, 
  completedAt : {  
    type : Number
  }
});  
module.exports = {Todos};