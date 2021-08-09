var router = require('express').Router()
var {getcustomorservice, postcustomorService, putCustomorService,deleteCustomorService} = require('../services/index')
router.get('/', getcustomorservice)
router.post('/',postcustomorService)
router.put('/:id',putCustomorService)
router.delete('/:id', deleteCustomorService)
module.exports = router