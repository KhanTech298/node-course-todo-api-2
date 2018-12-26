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

app.get('/Todos', (req, res) => { 
  Todos.find().then((doc) => { 
    res.send({Todo : doc});
  }) 
} , (err) => { 
  res.send(err);     
}); 

app.listen(3000, ()=> { 
console.log('Started on port 3000');
}); 
module.exports = {app};
