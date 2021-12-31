const { Client } = require('../models/models')
const ApiError = require('../error/ApiError');


class ClientController {
    async create(req, res, next) {
        const { name, tips_amount } = req.body
        const client = await Client.create({ name, tips_amount })

        module.exports.client_id = client.id 
        module.exports.client_name = client.name 
        module.exports.client_tips_amount = client.tips_amount 

        next()
    }

    async getAll(req, res) {
        const cards = await Client.findAll()
        return res.json(cards)
    }

    async getOne(req, res){
        const { id } = req.params // Получем из указанного в роуте
        const card = await Client.findOne({where: {id}})
        return res.json(card)
    }    

}

module.exports = new ClientController()