const express = require('express')
const userModel = require('../models/users.js')
const router = express.Router()
const {getUserCreate,getUserRead,getUserByid,getUserUpdate,getUserAndDelete} = require("../controller/users.js")

router.post("/",getUserCreate)
router.get("/",getUserRead)
router.get("/:id",getUserByid)
router.put("/:id",getUserUpdate)
router.delete("/:id",getUserAndDelete)

module.exports = router