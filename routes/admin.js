const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')

router.get("/", auth,function (req, res) {
  res.render("admin/index", {
    layout: "admin",
    title: "14-maktab Admin",
  });
});

module.exports = router;
