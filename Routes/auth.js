const express = require("express");
const Router = express.Router();
const authentication = require("../Controller/auth");

Router.post("/login", authentication.Login);
Router.post("/register", authentication.Register);
Router.post("/getdatabyid", authentication.Getuserdata);

module.exports = Router;
