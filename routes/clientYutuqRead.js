const express = require("express");
const router = express.Router();
const Yutuq = require("../models/Yutuq");

router.get("/:id", async (req, res) => {
  const yutuq = await Yutuq.findById(req.params.id);
  res.render("yutuqlarKorish", {
    layout: "main",
    yutuqTitle: yutuq.yutuqTitle,
    yutuqText: yutuq.yutuqText,
    img: yutuq.img,
    title: "Maqolalarni ko'rish",
    yutuq,
  });
});

module.exports = router;
