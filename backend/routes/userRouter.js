const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)

router.post('/', userController.create)
router.get('/', userController.getAll)

module.exports = router