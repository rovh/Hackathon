// const { Client } = require('../models/models')
// const ApiError = require('../error/ApiError');


class ClientController {
    async create(req, res) {
        // const { name } = req.body
        // const client = await Client.create({ name })
        // return res.json(card)
    }
    async getAll(req, res) {
        // const cards = await Client.findAll()
        // return res.json(cards)
    }

}

module.exports = new ClientController()