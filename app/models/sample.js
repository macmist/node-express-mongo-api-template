const mongoose = require('mongoose')

const SampleSchema = mongoose.Schema({
    name: String
}, {timestamps: true})

const SampleModel = mongoose.model('Sample', SampleSchema)

module.exports = SampleModel
