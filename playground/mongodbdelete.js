//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if (err){
    return console.log('Unable to Connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');


// db.collection('Users').deleteMany({name: 'Olivier'}).then((result) => {
//   console.log(result);
// })

db.collection('Users').deleteOne({
  _id: new ObjectID('5b5068a7502b50dfe9c03c14')
  }).then((result) => {
  console.log(result);
})

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// })





  client.close();
});
