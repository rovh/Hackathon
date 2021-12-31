const { Client } = require('../models/models')
const ApiError = require('../error/ApiError');


class ClientController {
    async create(req, res) {
        const { name, tips_amount } = req.body
        var date_of_action = new Date()
        // date_of_action = date_of_action.toLocaleString();
        const client = await Client.create({ name, tips_amount, date_of_action })
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