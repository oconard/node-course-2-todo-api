var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
var todo = new Todo({
  text: req.body.text
})

todo.save().then((doc) => {
  res.send(doc);
}, (e) => {
  res.status(400).send(e);
})
})

// app.get('/todos', (req, res) => {
//   Todo.find().then((todos) => {
//     res.send({todos})
//   }, (e) => {
//   res.status(400).send(e);
//   })
// })

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
   return res.status(404).send();
   }
   Todo.findById(id).then((todo) => {
     if (!todo) {
       return res.status(404).send();
     }
     res.send({todo});
   }).catch((e)  => {
     res.status(400).send();

   })

  //404 - send back empty Send

  //query database findById
   //if todo - send it back
   //if no tod -send back 404 empty body
  //error
    //400 - and send body back
})

app.listen(3003, () => {
  console.log('Started on port 3002');
})

module.exports = {app};
