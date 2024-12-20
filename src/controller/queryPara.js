

const queryNameAndAge = (req,res) =>{
    let n = {name:req.query.name,age:req.query.age}
    res.send(n)
    console.log(n)
}

const queryGet = (req,res) => {
    console.log(req.query)
    return res.json({
        name:req.query.name,
        message:"Hello World",
        age:req.query.age
    })
}

module.exports = {
    queryNameAndAge,queryGet
}
