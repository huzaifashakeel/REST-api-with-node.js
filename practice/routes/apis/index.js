var router = require('express').Router()
router.use('/customor', require('../../controllers/customor.js'))
router.use('/admin',require('../../controllers/admin'))
module.exports = router