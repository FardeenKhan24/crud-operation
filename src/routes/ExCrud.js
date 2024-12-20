const express = require('express')
const {userCreate,userRead,userUpdate,userDelete, userNameandAge} = require("../controller/ExCrud")
const router = express.Router()

router.post("/",userCreate)
router.get("/:id",userRead)
router.put("/:id",userUpdate)
router.delete("/:id",userDelete)
router.post("/:name/:age",userNameandAge)

module.exports = router