const userModel = require('../models/users.js');

const createUser = async (userData) => {
    return await userModel.create(userData);
};

const getAllUsers = async () => {
    return await userModel.find({});
};

const getUserById = async (id) => {
    return await userModel.findById(id);
};

const updateUserById = async (id, userData) => {
    const user = await userModel.findByIdAndUpdate(id, userData);
    if (!user) {
        throw new Error("User not found");
    }
    return await userModel.findById(id);
};

const deleteUserById = async (id) => {
    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
};
