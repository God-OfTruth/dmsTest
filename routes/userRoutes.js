const express = require("express");
const rolesAndPrivilages = require("../models/rolesAndPrivilages");
const User = require('../models/User')
const router = express.Router();

router.get("/:email", (req, res) => {
  const email = req.params.email;
  console.log(email);
  res.status(200).json({
    message: `User with Email - ${email}`,
    data: User,
  });
});

router.get("/rolesAndPrivileges/:email", (req, res) => {
  const email = req.params.email;
  console.log("Roles and privilages", email);
  res.status(200).json({
    message: `User with Email - ${email}`,
    data: rolesAndPrivilages
  });
});

module.exports = router;
