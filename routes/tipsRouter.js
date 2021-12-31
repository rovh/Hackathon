const Router = require('express')
const router = new Router()
const tipsController = require('../controllers/tipsController')


router.post('/', tipsController.create)
router.get('/', tipsController.getAll)
router.get('/', tipsController.getAll)


module.exports = router