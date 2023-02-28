const express = require("express");
const Yutuq = require("../models/Yutuq");
const router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const yutuq = await Yutuq.find();
  // await Promise.all(Yutuq.map(async (m) => (await m.populate('categoryId'))))
  // const category = await Category.find()
  // console.log(category);
  console.log(yutuq);
  // res.render("partials/section", {
  //   layout: "main",
  //   // title: "Yutuqlar",
  //   yutuq,
  // });
  res.render("index", { title: "14-Maktab", yutuq });
});

module.exports = router;
