
const express = require('express')
const router = express.Router()

const { getAllFac,getFacs,createFac,createFacImage } = require('../controllers/facilities')

router.get('/',getAllFac)
router.get('/:id',getFacs)

router.post('/',createFac)
router.post('/:id',createFacImage)

module.exports = router