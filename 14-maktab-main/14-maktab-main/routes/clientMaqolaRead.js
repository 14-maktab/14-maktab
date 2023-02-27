const express = require("express");
const router = express.Router();
const Maqola = require("../models/Maqola");

router.get('/:id', async (req, res) => {
    const maqola = await Maqola.findById(req.params.id);
    console.log(maqola);
    res.render("maqolaKorish", {
        layout: "main",
        maqolaTitle: maqola.maqolaTitle,
        maqolaText: maqola.maqolaText,
        img: maqola.img,
        title: "Maqolalarni ko'rish",
        maqola
    });
})


module.exports = router