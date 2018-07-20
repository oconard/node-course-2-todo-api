//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if (err){
    return console.log('Unable to Connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
// db.collection('Todos').find({
//
//   _id: new ObjectID('5b4dddfa17487b61f005c9ae')
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch todos', err);
//
// })
//   db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert todo', err);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
// })
   //client.close();


  // db.collection('Users').insertOne({
  // name: 'Olivier',
  // age: 41,
  // location: 'Lethbridge'
  // }, (err, result) => {
  // if (err) {
  //   return console.log('Unable to insert user', err);
  // }
  // console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // })



db.collection('Users').find({mnemonic: 'ORM'}).toArray().then((docs => {
  console.log('');
  console.log(JSON.stringify(docs, undefined, 2));
}), (err) => {
  console.log('Unable to fetch', err);
})
  client.close();
});
