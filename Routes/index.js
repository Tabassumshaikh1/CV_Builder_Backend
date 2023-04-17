const express = require("express");
const router = express.Router();
const auth = require('./auth')
const cvcrud = require('./cvcrud')
router.use('/Auth',auth)
router.use('/Cv',cvcrud)
module.exports = router;
