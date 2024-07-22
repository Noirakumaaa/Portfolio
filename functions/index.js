
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const function = require('firebase-functions')

export.randomNumber = function.https.onRequest((request, response) =>{
    const num = Math.round(Math.round()*100)
    response.send(Number.toString())
})