const statusCodes = require('http-status-codes')

const handleError = (err,req,res,next) => {
  res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ message : err.message })
}

module.exports = handleError 