var jwt = require('jsonwebtoken');
var token = jwt.sign({ _id: '123' }, 'shhhhh');
console.log(token);
console.log("********************************************")
var data = jwt.verify(token, 'shhhhh')
console.log(data);