const { Client } = require('../models/models')
const ApiError = require('../error/ApiError');


class ClientController {
    async create(req, res, next) {
        const { name, tips_amount } = req.body
        const client = await Client.create({ name, tips_amount })
        // return res.json(client)
        module.exports.client_id = client.id 
        next()
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