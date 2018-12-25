const {MongoClient, ObjectID}= require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) =>{ 
  if(err) { 
  return console.log('Unable to connect mongodb ', err)
  } 
    let db = client.db('TodoApp'); 
    db.collection('Todos').findOneAndUpdate({_id : new ObjectID('5c210a566db05caa43be8999')},{$set : {sonthing : 'sonething'}},{returnNewDocument : true}).then((result)=>{console.log(result)});
});