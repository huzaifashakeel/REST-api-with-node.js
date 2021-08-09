var router = require('express').Router()

router.use('/admin', require('../../controllers/admin'))

module.exports = router