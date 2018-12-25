const {MongoClient ,ObjectID} = require('mongodb');  

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => { 
  if(err){ 
   return console.log(err);
  } 
   const db = client.db('TodoApp'); 
//   db.collection('Todos').deleteMany({completed : false}).then((result)=>{ 
//     console.log(result);
//   }); 
   db.collection('User').findOneAndDelete({_id : new ObjectID('5c20ffbe880f543e340fc026')}).then((res)=>{ 
     console.log(JSON.stringify(res, undefined, 2));
   });
    
});