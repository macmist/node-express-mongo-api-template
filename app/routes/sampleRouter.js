const controller = require('../controllers/sampleController');

const SampleRouter = (router) => {
    router.route('/samples').get(controller.get);
    router.route('/sample/:id').get(controller.getOne)
    router.route('/sample').post(controller.create)
}

module.exports = SampleRouter
