const Router = require('express')
const router = new Router()
const tipsController = require('../controllers/tipsController')


router.post('/', tipsController.create)
router.get('/', tipsController.getAll)
router.get('/:id', tipsController.getOne)


module.exports = router