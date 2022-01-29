const { Tips, Client } = require('../models/models')
const ApiError = require('../error/ApiError');
const clientController = require('./clientController');

class TipsController {
    async create(req, res, next) {
        var lastRow = Client[ Client.length - 1 ];

        // const client_id = clientController.client_id
        // const name = clientController.client_name
        // const tips_amount = clientController.client_tips_amount

        const client_id = lastRow.id
        const name = lastRow.name
        const tips_amount = lastRow.tips_amount


        const date_of_action = new Date().toString();

        const tip = await Tips.create( { name, tips_amount, client_id, date_of_action })
   
        // module.exports.tips_id_export = tip.id 

        return res.json(tip)
    }

    async getAll(req, res) {
        const tips = await Tips.findAll()
        return res.json(tips)
    }

    async getOne(req, res){
        const { id } = req.params // Получем из указанного в роуте
        const tip = await Tips.findOne({where: {id}})
        return res.json(tip)
    }

}

module.exports = new TipsController()