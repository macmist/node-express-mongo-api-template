const sampleDAO = require('../DAOs/sampleDAO');

const SampleController = {
    get: (req, res) => {
        sampleDAO.find().then(samples => {
            return res.status(200).json(samples)
        }).catch(error => {
            return res.status(500).json(error)
        })
    },

    getOne: (req, res) => {
        sampleDAO.findOne(req.params.id).then(sample  => {
            return res.status(200).json(sample)
        }).catch(error  => {
            console.log(error)
            return res.status(500).json(error)
        })
    },
    create: (req, res) => {
        sampleDAO.create(req.body).then(sample  => {
            return res.status(200).json(sample)
        }).catch(error  => {
            console.log(error)
            return res.status(500).json(error)
        })
    },
}


module.exports = SampleController;
