const express = require('express')
const app = express()
//imported routes
const usersRoute = require("./src/routes/users.js")
const userEx = require("./src/routes/ExCrud.js")
const queryRoute = require("./src/routes/queryPara.js")
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//routes
app.use("/userData",usersRoute)
app.use("/myData",userEx)
app.use("/queryParams",queryRoute)


app.listen(3000,()=>{
    console.log("Listing to port 3000")
})