
const data = require('../data/recommendations.json')
const statusCodes = require('http-status-codes')

const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
  res.status(statusCodes.OK).json({ data })
})

module.exports = router