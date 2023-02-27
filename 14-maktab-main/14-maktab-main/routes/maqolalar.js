const express = require("express");
const router = express.Router();
const Maqola = require("../models/Maqola");

router.get("/", async function (req, res, next) {
    const maqola = await Maqola.find().sort({ img: -1 });
    // await Promise.all(maqola.map(async (m) => (await m.populate('categoryId'))))
    // const category = await Category.find()
    // console.log(category);
    res.render("maqolalar",
        {
            layout: "main",
            title: "Maqolalar",
            maqola
        });

});

module.exports = router