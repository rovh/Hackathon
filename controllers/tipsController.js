const { Tips } = require('../models/models')
const ApiError = require('../error/ApiError');

class TipsController {
    async create(req, res) {
        const { name } = req.body
        const date_of_action = new Date()
        const tip = await Tips.create({ name, date_of_action })
        return res.json(tip)
    }

    async getAll(req, res) {
        const tips = await Tips.findAll()
        return res.json(tips)
    }

    async getOne(req, res){
        



    }

}

module.exports = new TipsController()