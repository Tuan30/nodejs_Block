const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController')

//newsController.index

router.get('/:slug', newsController.show)
router.get('/', newsController.index) //Luon luon nam duoi cung


module.exports = router