const queryService = require('../services/queryService');

const queryNameAndAge = (req, res) => {
    const result = queryService.getNameAndAge(req.query);
    res.send(result);
    console.log(result);
};

const queryGet =  (req, res) => {
    const result =  queryService.getQueryResponse(req.query);
    console.log(req.query);
    return res.json(result);
};

module.exports = { queryNameAndAge, queryGet };
