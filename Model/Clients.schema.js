const { default: mongoose, mongo } = require("mongoose");
const { type } = require("os");

const ClientsSchema = mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    },
})

module.exports = mongoose.model("clients", ClientsSchema)