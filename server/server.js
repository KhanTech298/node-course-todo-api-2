let {mongoose} = require('./db/mongoose'); 
// let mongoose = require('./db/mongoose').mongoose
let {Todos} = require('./models/Todos'); 
let {User} = require('./models/User');

let express = require('express'); 
let bodyParser = require('body-parser'); 

let app = express();
 
app.use(bodyParser.json());
app.post('/Todos', (req, res) => { 
  let Todo = new Todos({ 
    text : req.body.text
  }); 
    Todo.save().then((docs) => { 
      res.send(docs)
    }, (e) => { 
      res.status(400).send(e);
    }) 
   // console.log(req.body);
});
app.listen(3000, ()=> { 
console.log('Started on port 3000');
}) 
//var newTodos = new Todos({ 
// text : "Cook dinner"
// }); 
// 
// newTodos.save().then((doc) => { 
//  console.log('Save to do ', doc) 
// }, (err) => { 
//  console.log('Unable to save todos model')
// });

//var newTodos2 = new Todos({ 
//  text : 'Clean room', 
//  completed : false , 
//  completedAt : 10
//}); 
//
//newTodos2.save().then((doc) => { 
//  console.log('Save to do ', doc)
//}, (err) => { 
//  console.log('Unable to save todos model');
//}) 



//let user = new User({ 
//email : " xxxatention@gmail.com "
//}); 
//
//user.save().then((doc) => { 
//  console.log('Save to user ', doc);
//}, (err) => { 
//  console.log('Unable to save user ', err);
//});