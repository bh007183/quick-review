const {Schema, model} = require("mongoose")

const petSchema = new Schema({
    species: String
})

const Pet = model("Pet", petSchema)
module.exports = Pet