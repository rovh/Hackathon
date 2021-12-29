const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const clientRouter = require('./clientRouter')
const cardsRouter = require('./cardsRouter')
const tipsRouter = require('./tipsRouter')

router.use('/user', userRouter)
router.use('/client', clientRouter)
router.use('/tips', tipsRouter)
router.use('/cards', cardsRouter)

module.exports = router