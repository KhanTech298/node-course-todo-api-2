let mongoose = require('mongoose'); 
let Todos = mongoose.model('Todos', { 
  text : {  
    type : String,  
    required : true
  }, 
  completed : { 
    type : Boolean, 
    default : false
  }, 
  completedAt : {  
    type : Number, 
    default : null
  }
});  
module.exports = {Todos};