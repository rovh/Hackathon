const { Client } = require('../models/models')
const ApiError = require('../error/ApiError');


class ClientController {
    async create(req, res) {
        const { name } = req.body
        const client = await Client.create({ name })
        return res.json(client)
    }
    async getAll(req, res) {
        const cards = await Client.findAll()
        return res.json(cards)
    }
    async getOne(req, res){
        const { id } = req.body
        const card = await Client.findOne({where: {id}})
        return res.json(card)
    }    

}

module.exports = new ClientController()