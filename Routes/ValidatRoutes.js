const express = require('express')
const authControllers = require('../controllers/authControllers');
const router = express.Router()

const registerValidation = require('../validations/register-validation')



router.route('/loginPage').get(authControllers.getLogin)
router.route('/login').post(authControllers.postLogin)
router.route('/registerPage').get(authControllers.getRegister)

router.route('/register').post(
    registerValidation
    ,authControllers.postRegister)

router.route('/logout').get(authControllers.logout)


module.exports = router