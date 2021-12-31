const sequelize = require('../db')
const { DataTypes } = require('sequelize')
    // const { _attributes } = require('./db')



const Client = sequelize.define('client', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    name: {type: DataTypes.STRING},
    tips_amount: { type: DataTypes.FLOAT, allowNull: false },

})

const Tips = sequelize.define('tips', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    name: {type: DataTypes.STRING},
    client_id: { type: DataTypes.INTEGER },
    tips_amount: { type: DataTypes.FLOAT },
    date_of_action: { type: DataTypes.STRING },

})


const Cards = sequelize.define('cards', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    name: { type: DataTypes.STRING },
    card_number: { type: DataTypes.INTEGER, allowNull: false },
    validity_period: { type: DataTypes.INTEGER, allowNull: false },
    cvc: { type: DataTypes.INTEGER, allowNull: false },

})




const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    login: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },

    name: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
    patronymic: { type: DataTypes.STRING },

    img: { type: DataTypes.STRING },

    tips_id: { type: DataTypes.INTEGER },
    future_tips: { type: DataTypes.INTEGER },
    history_of_actions: { type: DataTypes.ARRAY(DataTypes.DECIMAL) }, //Возможен баг

    phone_number: { type: DataTypes.INTEGER },
    cards_id: { type: DataTypes.INTEGER }

})


User.hasMany(Cards)
Cards.belongsTo(User)

User.hasMany(Tips)
Tips.belongsTo(User)

Tips.hasOne(Client)
Client.belongsTo(Tips)


module.exports = {
    User,
    Cards,
    Tips,
    Client
}