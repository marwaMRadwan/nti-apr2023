var jwt = require('jsonwebtoken');
var token = jwt.sign({ _id: '123' }, 'shhhhh');
console.log(token);
console.log("********************************************")
var data = jwt.verify(token, 'shhhhh')
console.log(data);
const reqToken= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMzY2E2MzM2MzRlZWFmMTMzZGQ1ZjAiLCJpYXQiOjE2ODExOTk5Njh9.MYd3hO2xkZQ5rJFjAvgwDzZs0gXpcf-LFLWUVpcJqsU"
const reqUser = {
    "tokens": [
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMzY2E2MzM2MzRlZWFmMTMzZGQ1ZjAiLCJpYXQiOjE2ODExOTk5Njh9.MYd3hO2xkZQ5rJFjAvgwDzZs0gXpcf-LFLWUVpcJqsU",
            "_id": "64351360e76b7893cf5e68c0"
        },
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMzY2E2MzM2MzRlZWFmMTMzZGQ1ZjAiLCJpYXQiOjE2ODEyMDAwMjV9.A3XVsLBs505uyyhiCGUDW5BpctqH9ubxO_BoPbKxEYk",
            "_id": "64351399e76b7893cf5e68c4"
        }
    ]

}

reqUser.tokens = reqUser.tokens.filter(t=> t.token!= reqToken)