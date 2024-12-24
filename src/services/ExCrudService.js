let myData = [];

const createUser =  (userData) => {
    const { name, age } =  userData;
    const newData = { id: Date.now(), name, age };
    myData.push(newData);
    return myData;
};

const readUserById = async (id) => {
    return await myData.find((data) => data.id === id);
};

const updateUserById = async (id, updatedData) => {
    const data = await myData.find((data) => data.id === id);
    if (!data) return null;

    const { name, age } = updatedData;
    data.name = name;
    data.age = age;
    return data;
};

const deleteUserById =  (id) => {
    const index = myData.findIndex((data) => data.id === id);
    if (index === -1) return null;

    return myData.splice(index, 1)[0];
};

const filterUserByNameAndAge = (name, age) => {
    const nameData =  myData.filter((data) => data.name === name);
    if (nameData.length === 0) {
        return { message: "No data found for the given name." };
    }
    if (age < 18) {
        const under18Data = myData.filter((data) => data.age <= 18);
        return { message: "Age is below 18", data: under18Data };
    }

    const ageData = myData.filter((data) => data.age >= age);
    if (ageData.length === 0) return { message: "No data found for the given age.", data: [] };

    return { message: "Age is above 18", data: ageData };
};

module.exports = {
    createUser , readUserById , updateUserById , deleteUserById , filterUserByNameAndAge
}