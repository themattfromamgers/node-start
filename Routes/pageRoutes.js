const express = require('express')
const pageControllers = require('../controllers/pageControllers');
const router = express.Router()

router.route('/').get(pageControllers.index)



module.exports = router