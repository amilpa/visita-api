const express = require('express')
const router = express.Router()
const { createUserClient,createUserHost,getUser } = require('../controllers/user')


router.get('/:id', getUser)
router.post('/client', createUserClient )
router.post('/host', createUserHost )

module.exports = router