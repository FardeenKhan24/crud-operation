
const userService = require('../services/userService');

const getUserCreate = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.json(user);
    } catch (err) {
        res.json({ message: err.message });
    }
};

const getUserRead = async(req,res)  => {
    try{
        const users = await userService.getAllUsers({})
        res.json(users)
    }catch(err){
        res.json({message:err.message})
    }
}

const getUserByid = async(req,res)  => {
    try{
        const {id} = req.params
        const users = await userService.getUserByid(id)
        res.json(users)
    }catch(err){
        res.json({message:err.message})
    }
}

const getUserUpdate = async(req,res) => {
    try{
        const {id} = req.params
        const users = await userService.updateUserById(id,req.body)
        if(!users){
            return res.json({message:"user not found"})
        }
        const updatedUser = await userService.getUserById(id)
        res.json(updatedUser)
    }catch(err){
        res.json({message:err.message})
    }
}

const getUserAndDelete = async(req,res) => {
    try{
        const {id} = req.params
        const users = await userService.deleteUserById(id)
        if(!users){
            return res.json({message:"user not found"})
        }
        res.json({message:"user deleted successfully",userData:users})
    }catch(err){
        res.json({message:err.message})
    }
}

module.exports = {
    getUserCreate,getUserRead,getUserByid,getUserUpdate,getUserAndDelete
}

