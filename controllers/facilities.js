
const statusCodes = require('http-status-codes')
const path = require('path')
const cloudinary = require('../cloud/cloudinary')

const { BadRequest } = require('../errors/bad-request') 
const facilities = require('../models/facilities')

const getAllFac = async (req,res) => {
  const fac = await facilities.find({})
  res.status(statusCodes.OK).json(fac)
  // return res.send('Hello world')
} 

const getFacs = async (req,res) => {
  const facilities = await facilities.find({ id : req.params.id })
  res.status(statusCodes.OK).json({ facilities : facilities , nBHits : facilities.length})
}

const createFac = async (req,res) => {
  if(!req.body)
  {
    throw new BadRequest('Bad request detected')
  }
  const newfacilities = await facilities.create(req.body)
  // newfacilities.imageURL = `${process.env.API_URL}/images/posts/${req.body.id}.jpg`
  // await newfacilities.save()
  res.status(statusCodes.OK).json(newfacilities)
}

const createFacImage = async (req,res) => {

  await cloudinary.uploader.upload(req.files.image.tempFilePath, {public_id: req.params.id , folder : "Facilities" })

  const newFacilites =  await facilities.findByIdAndUpdate({ _id: req.params.id },{ imageURL : cloudinary.url(`Facilities/${req.params.id}` , { secure : true})},{ new : true})

  res.status(statusCodes.OK).json(newFacilites)
}

module.exports = { getAllFac, createFac , createFacImage , getFacs }
