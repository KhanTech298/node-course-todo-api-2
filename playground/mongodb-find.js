const {
    MongoClient,
    ObjectID
} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Can't connect to mongodb", err);
    }
    let db1 = client.db('TodoApp');
    // db1.collection('Todos').find({_id : new ObjectID('5c210a566db05caa43be8999')}).toArray().then((docs)=>{ 
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{ 
    //   console.log('Unable to fetch data');
    // });
    //   client.close(); 
    //----------------------------------------------------------
    //     db1.collection('Todos').find().count().then((count)=>{ 
    //   console.log(`Todos count: ${count}`);
    // }, (err)=>{ 
    //   console.log('Unable to fetch data');
    // });
    //  client.close();  
    //---------------------------------------------------------- 
    db1.collection('User').find({name:"Chien"}).toArray().then((res)=>{ 
      console.log(JSON.stringify(res, undefined, 2));
    });

});
