const { Tips } = require('../models/models')
const ApiError = require('../error/ApiError');
const clientController = require('./clientController');

class TipsController {
    async create(req, res) {
        const client_id = clientController.client_id
        const name = clientController.name
        const tips_amount = clientController.tips_amount


        // const client = await Client.findOne({where: {id}})
        // const { name } = req.body
        // const date_of_action = new Date()
        const tip = await Tips.create( { name, tips_amount, client_id })
        // return res.json(tip)
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