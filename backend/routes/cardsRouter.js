const Router = require('express')
const router = new Router()
const cardsController = require('../controllers/cardsController')

router.post('/', cardsController.create)
router.get('/', cardsController.getAll)


module.exports = router