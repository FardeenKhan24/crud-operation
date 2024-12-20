const userModel = require('../models/users.js')

const getUserCreate = async(req,res) =>  {
    try{
        const users = await userModel.create(req.body)
        res.json(users)
    }
    catch(err){
        res.json({message:err.message})
    }
}

const getUserRead = async(req,res)  => {
    try{
        const users = await userModel.find({})
        res.json(users)
    }catch(err){
        res.json({message:err.message})
    }
}

const getUserByid = async(req,res)  => {
    try{
        const {id} = req.params
        const users = await userModel.findById(id)
        res.json(users)
    }catch(err){
        res.json({message:err.message})
    }
}

const getUserUpdate = async(req,res) => {
    try{
        const {id} = req.params
        const users = await userModel.findByIdAndUpdate(id,req.body)
        if(!users){
            return res.json({message:"user not found"})
        }
        const updatedUser = await userModel.findById(id)
        res.json(updatedUser)
    }catch(err){
        res.json({message:err.message})
    }
}

const getUserAndDelete = async(req,res) => {
    try{
        const {id} = req.params
        const users = await userModel.findByIdAndDelete(id)
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

