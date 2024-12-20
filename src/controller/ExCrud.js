
let myData = []
const userCreate = (req,res) => {
        const {name,age} = req.body
        const newData =  {id:Date.now(),name,age}
        myData.push(newData)
        res.send(myData)
        console.log(myData)
    }

const userRead = (req,res) => {
    const r = myData.find(d => d.id === parseInt(req.params.id))
    if(!r){
        return res.send("data not found")
    }
    res.send(r)
}

const userUpdate = (req,res) => {
    const data = myData.find(d => d.id === parseInt(req.params.id))
    if(!data){
        res.send("Data not found")
    }
    const {name,age} = req.body
    data.name=name
    data.age=age
    res.send(data)
    console.log("Updated Data",myData)
}

const userDelete = (req,res) => {
    const index = myData.findIndex(d => d.id === parseInt(req.params.id))
    if(!index){
        res.send("Data not found")
    }
    myData.splice(index,1)
    res.send('deleted')
    console.log("Deleted data",myData)
}

const userNameandAge = (req, res) => {
    const name = req.params.name;
    const age = parseInt(req.params.age);
    const nameData = myData.filter(data => data.name === name);
    if (nameData.length === 0) {
        return res.send("No data found for the given name.");
    }
    console.log("Data for the given name:", nameData);
    const ageData = myData.filter(data => data.age >= age);

    if (age < 18) {
        const under18Data = myData.filter(data => data.age <= 18);
        return res.json({ message: "Age is below 18", data: under18Data });
    }

    if (ageData.length === 0) {
        return res.send("No data found for the given age.");
    }
    console.log("Data for age above 18:", ageData);
    res.json({ message: "Age is above 18", data: ageData });
};

module.exports = {
    userCreate, userRead,userUpdate,userDelete,userNameandAge
}