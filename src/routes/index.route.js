const express = require("express");
const router = express.Router();

const usersRoute = require("./users.js");
const userEx = require("./ExCrud.js");
const queryRoute = require("./queryPara.js");


router.use("/userData", usersRoute);
router.use("/myData", userEx);
router.use("/queryParams", queryRoute);

module.exports = router;
