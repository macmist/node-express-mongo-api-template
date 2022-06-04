const express = require('express')
const router  =  express.Router()

const SampleRouter = require('./routes/sampleRouter')
SampleRouter(router)

module.exports = router;
