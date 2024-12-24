const crudService = require("../services/ExCrudService")

const userCreate = async (req, res) => {
    const newUserData = await crudService.createUser(req.body);
    res.send(newUserData);
    console.log("All Users:", newUserData);
};

const userRead = async(req, res) => {
    const user = await crudService.readUserById(parseInt(req.params.id));
    if (!user) {
        return res.send("Data not found");
    }
    res.send(user);
};

const userUpdate = async (req, res) => {
    const updatedUser = await crudService.updateUserById(parseInt(req.params.id), req.body);
    if (!updatedUser) {
        return res.send("Data not found");
    }
    res.send(updatedUser);
    console.log("Updated Data:", updatedUser);
};
    


const userDelete = async (req, res) => {
    const deletedUser = await crudService.deleteUserById(parseInt(req.params.id));
    if (!deletedUser) {
        return res.send("Data not found");
    }
    res.send("User deleted successfully");
    console.log("Deleted User:", deletedUser);
};


const userNameandAge = async (req, res) => {
    const { name } = req.params;
    const age = parseInt(req.params.age);
    const result = await crudService.filterUserByNameAndAge(name, age);
    
    res.json(result);
    console.log("Filtered Data:", result);
};
    
    

module.exports = {
    userCreate, userRead,userUpdate,userDelete,userNameandAge
}