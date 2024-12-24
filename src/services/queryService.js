

const getNameAndAge = (query) => {
    return { name: query.name, age: query.age };
};

const getQueryResponse = (query) => {
    return {
        name: query.name,
        message: "Hello World",
        age: query.age,
    };
};

module.exports = { getNameAndAge, getQueryResponse };
