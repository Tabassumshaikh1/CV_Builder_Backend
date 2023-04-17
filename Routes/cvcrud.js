const express = require('express')
const Router = express.Router()
const cvcrud = require('../Controller/cvcrud')
Router.post('/postcv',cvcrud.PostCv)
Router.post('/getdatabyuserid',cvcrud.GetUserdata)
Router.post('/getresumedata',cvcrud.GetResume)

module.exports = Router