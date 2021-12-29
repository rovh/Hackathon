const { Tips } = require('../models/models')
const ApiError = require('../error/ApiError');

class TipsController {
    async create(req, res) {
        const { name } = req.body
        const tip = await Tips.create({ name })
        return res.json(tip)
    }
    async getAll(req, res) {
            const tips = await Tips.findAll()
            return res.json(tips)
        }
        // async getONE(req, res) {}


}

module.exports = new TipsController()