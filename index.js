const express = require('express')
const app = express()
//imported routes
const routes = require("./src/routes/index.route");
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//routes
app.use("/", routes);

app.listen(3000,() => {
    console.log("Listing to port 3000")
})