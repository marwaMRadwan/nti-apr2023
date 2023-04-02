const app = require('./controller/src')
require('dotenv').config()
app.listen(
    process.env.PORT, 
    ()=>console.log(`http://localhost:${process.env.PORT}`)
)
