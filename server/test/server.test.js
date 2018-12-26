const request = require('supertest'); 
const expect = require('expect');  


const {app} = require('./../server'); 
const {Todos} = require('./../models/Todos') ; 
 
const todo = [{ 
  text : "To do 1"
},{ 
  text : "To do 2"
}];
beforeEach((done) => { 
  Todos.remove({}).then(() => { 
     return Todos.insertMany(todo);
  }).then(() => {done()});
  });


describe('POST /TodoApp', ()=> { 
  it('Should create new to do', (done) => { 
    let text = "to do text"; 
    request(app) 
        .post('/Todos') 
        .send({text}) 
        .expect(200) 
        .expect((res) => { 
          expect(res.body.text).toBe(text);
        }) 
        .end((err,res) => { 
          if(err) { 
        return done(err);
          } 
          Todos.find({text}).then((todo) => { 
            expect(todo.length).toBe(1); 
            expect(todo[0].text).toBe(text); 
            done();
          }).catch((e) => {done(e)})
        })
  }); 
    
  it('Should not create invaild to do', (done) => { 
    request(app) 
        .post('/Todos')
        .send({}) 
        .expect(400) 
        .end((err, res) => { 
          if(err) { 
            return done(err);
          } 
          Todos.find().then((doc) => { 
            expect(doc.length).toBe(2); 
            done();
          }).catch((err) => {done(err)});
        });
});
}); 

describe('GET /TodoApp', () => { 
  it('Should get all to do', (done) => { 
    request(app) 
      .get('/Todos') 
      .expect(200) 
      .expect((res) => { 
        expect(res.body.Todo.length).toBe(2); 
      }).end((done));
  });
});