const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const { User, Tips, Cards } = require('../models/models')

class UserController {
    async registration(req, res, next) {

        const { login, password } = req.body
        if (!login || !password) {
            return next(ApiError.badRequest('Некорректный login или password'))

        }
        const candidate = await User.findOne({ where: { login } })
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким login уже существует'))
        }
        const hashPassword = await bcryptjs.hash(password, 5)
        const user = await User.create({ login, password: hashPassword })
        const token = jwt.sign({ id: user.id, login: user.login }, process.env.SECRET_KEY, { expiresIn: '24h' })

        return res.json({ token })

    }



    async login(req, res, next) {
        const { login, password } = req.body
        const user = await User.findOne({ where: { login } })
        if (!user) {
            return next(ApiError.internal("User is not found"))
        }
        let comaparePassword = bcryptjs.compareSync(password, user.password)
        if (!comaparePassword) {
            return next(ApiError.internal("Password is not correct"))

        }
        const token = jwt.sign({ id: user.id, login: user.login }, process.env.SECRET_KEY, { expiresIn: '24h' })
        return res.json({ token })

    }


    async check(req, res, next) {
      
    }


    async create(req, res) {
        try {
            const {
                name,
                surname,
                patronymic,
                tips_id,
                future_tips,
                history_of_actions,
                phone_number,
                cards_id,

            } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))



            const device = await User.create({
                name,
                surname,
                patronymic,
                tips_id,
                future_tips,
                history_of_actions,
                phone_number,
                cards_id,
                img: fileName,
            })

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }


    async getOne(req, res) {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const user_id = decoded.id

        const user = await User.findOne({ user_id })
        return res.json(user)

    }

    
}


module.exports = new UserController()