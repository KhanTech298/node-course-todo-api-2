//const MongoClient = require('mongodb').MongoClient 
 const {MongoClient, ObjectID} = require('mongodb'); 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{ 
  if(err){ 
    return console.log("Can't connect to mongodb");
  }  
    console.log('Connected to mongodb');  
    
    const db = client.db('TodoApp'); 
//    
//    db.collection('Todos').insertOne( 
//   { 
//      test : 'Something to do', 
//      completed : false
//    }, (err, result) =>{ 
      //if(err) { 
//      return console.log('Unable insert Todos', err);
//      } 
//      console.log(JSON.stringify(result.ops, undefined, 2));
//    });  
//    db.collection('User').insertOne({ 
//      name : 'Nam', 
//      age : 25
//    }, (err, results) => { 
//      if(err) { 
//        console.log('Unable insert User', err);
//      } 
//      console.log(results.ops[0]);
//    });
//    client.close();
});