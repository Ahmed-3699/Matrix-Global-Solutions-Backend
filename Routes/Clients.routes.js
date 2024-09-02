const express = require("express")
const { SendForm, ClientsInformation } = require("../Controllers/Clients.controllers")


const route = express.Router()
route.post("/contact-form", SendForm)
route.get("/clients-information", ClientsInformation)



module.exports = route