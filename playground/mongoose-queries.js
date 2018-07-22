const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var id = '5b525139ad0e00e528b5456b';

// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })

User.findById(id).then((user) => {
  if(!user) {
    return console.log('ID not found');
  }
  console.log('User', user);
}).catch((e) => console.log(e));
