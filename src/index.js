const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


const bcrypt=require("bcryptjs")

const myFunction = async ()=>{
    const password="pass123";
    const hashpassword=await bcrypt.hash(password,8)

    const isMatch=await bcrypt.compare(password,hashpassword)
    console.log(isMatch)

}

myFunction();