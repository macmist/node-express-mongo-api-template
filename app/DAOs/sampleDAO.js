const Sample = require('../models/sample')
const {query} = require("express");

const SampleDAO = {
    findOne: query => {
        return Sample.findOne(query).exec();
    },
    find:  query => {
        return Sample.find(query).exec();
    },
    create:  (newSample)  => {
        return Sample.create(newSample)
    },
    insertMany: (samples) => {
        return Sample.insertMany(samples)
    },
}

module.exports = SampleDAO;
