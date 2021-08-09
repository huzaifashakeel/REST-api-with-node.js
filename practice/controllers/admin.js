var router = require('express').Router()

var {getadminServices} = require('../services/admin')
router.get('/', getadminServices)
module.exports = router