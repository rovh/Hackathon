const { Tips } = require('../models/models')
const ApiError = require('../error/ApiError');
const clientController = require('./clientController');

class TipsController {
    async create(req, res) {
        // client_id = clientController.client_id
        // const client = await Client.findOne({where: {id}})
        // const { name } = req.body
        // const date_of_action = new Date()
        // const tip = await Tips.create( client_id)
        // return res.json(tip)
        return res.json("ERRor")
    }

    async getAll(req, res) {
        const tips = await Tips.findAll()
        return res.json(tips)
    }

    async getOne(req, res){
        



    }

}

module.exports = new TipsController()