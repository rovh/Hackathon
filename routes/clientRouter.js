const Router = require('express')
const router = new Router()
const clientController = require('../controllers/clientController')
const tipsController = require('../controllers/tipsController')


router.post('/', clientController.create)
router.get('/', clientController.getAll)
router.get('/', clientController.getOne)


module.exports = router