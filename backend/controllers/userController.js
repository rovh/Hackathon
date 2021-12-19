// const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const ApiError = require('../error/ApiError')
const { User, Tips, Cards } = require('../models/models')

class UserController {
    async registration(req, res) {

        const { login, password } = req.body
        if (!login || !password) {
            return next(ApiError.badRequest('Некорректный login или password'))

        }
        const candidate = await User.findOne({ where: { login } })
        if (candidate) {


            return next(ApiError.badRequest('Пользователь с таким login уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ login, password: hashPassword })
        const token = jwt.sign({ id: user.id, login: user.login }, process.env.SECRET_KEY, { expiresIn: "24h" })

        return res.json({ token })

    }




    async login(req, res) {}


    async check(req, res, next) {
        const { id } = req.query
        if (!id) {
            return next(ApiError.badRequest('NO ID'))
        }
        res.json(id);
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
            let fileName_1 = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName_1))

            const { img_qr } = req.files
            let fileName_2 = uuid.v4() + ".jpg"
            img_qr.mv(path.resolve(__dirname, '..', 'static', fileName_2))



            const device = await User.create({
                name,
                surname,
                patronymic,
                tips_id,
                future_tips,
                history_of_actions,
                phone_number,
                cards_id,
                img: fileName_1,
                img_qr: fileName_2
            })

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }


    async getAll(req, res) {


    }

}


module.exports = new UserController()