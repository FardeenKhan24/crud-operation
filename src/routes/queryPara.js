const express = require('express')
const { queryNameAndAge, queryGet } = require('../controller/queryPara')
const router = express.Router()


router.post("/",queryNameAndAge)
router.get("/",queryGet)

module.exports = router