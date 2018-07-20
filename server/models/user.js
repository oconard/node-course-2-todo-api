var mongoose = require('mongoose')
var User = mongoose.model('User', {
  email: {
  type:  String,
  required: true,
  minlength: 1,
  trim: true
}
})


var newUser = new User({
  email: "oconard@shaw.ca"
})
newUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save todo', e)
})
module.exports = {User};
