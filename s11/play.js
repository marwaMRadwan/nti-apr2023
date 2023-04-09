const express = require("express")
const app = express()

app.get('/api/test', (req,res)=>{
    res.status(200).send({
        name:"marwa",
        age:37
    })
})

app.listen(3000)
