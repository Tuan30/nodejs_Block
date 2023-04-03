const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController')

//newsController.index

router.use('/:slug', newsController.show)
router.use('/', newsController.index) //Luon luon nam duoi cung


module.exports = router