const { Cards } = require('../models/models')
const ApiError = require('../error/ApiError');



class CardsController {
    async create(req, res) {
        const { name, card_number, validity_period, cvc } = req.body
        const card = await Cards.create({ name, card_number, validity_period, cvc })
        return res.json(card)
    }
    async getAll(req, res) {
            const cards = await Cards.findAll()
            return res.json(cards)
        }
        // async getONE(req, res) {}


}

module.exports = new CardsController()