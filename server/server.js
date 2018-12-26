let {mongoose} = require('./db/mongoose'); 
// let mongoose = require('./db/mongoose').mongoose
let {Todos} = require('./models/Todos'); 
let {User} = require('./models/User');
let {ObjectID} = require('mongodb'); 

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
    res.send({Todos : doc});
  }) 
} , (err) => { 
  res.send(err);     
});  

app.get('/Todos/:id', (req, res) => { 
  let id = req.params.id;
  if(!ObjectID.isValid(id)) { 
    return res.status(404).send();
  } 
  Todos.findById(id).then((Todo) => { 
    if(!Todo){ 
      return res.status(404).send();
    } 
      return res.send({Todo});
  }).catch((e) => {res.status(400).send()});
});

app.listen(3000, ()=> { 
console.log('Started on port 3000');
}); 
module.exports = {app};
