const express = require('express')
const router = express.Router()
const user = require('../models/user')
const controllerFunc = require('../controller/controller')

router.get('/',controllerFunc.getAllUsers)
router.get('/:id',controllerFunc.getSingleUser)
router.post('/',controllerFunc.createSingleUser)
router.put('/:id',controllerFunc.putUser)
router.delete('/:id',controllerFunc.deleteUser)




module.exports= router