const { Router } = require("express");
const router = Router();
const Yutuq = require("../models/Yutuq");
const fileUpload = require("../middleware/fileUpload");
const toDelete = require("../middleware/toDelete");

router.get(
  "/add",
  /* auth, */ async (req, res) => {
    const yutuq = await Yutuq.find();

    res.render("admin/yutuqYaratish", {
      header: "Yutuq yaratish",
      title: "Yutuq",
      layout: "admin",
      yutuq,
    });
  }
);

router.get(
  "/read",
  /* auth, */ async (req, res) => {
    const yutuq = await Yutuq.find();
    res.render("admin/yutuqlarniKorish", {
      title: "Yutuqlarni ko'rish",
      layout: "admin",
      header: "Yutuqlarni ko'rish",
      yutuq,
    });
  }
);

router.post("/add", /* auth, */ fileUpload.single("img"), async (req, res) => {
  const { yutuqTitle, yutuqText } = req.body;
  const img = req.file.filename;
  console.log(img);

  const yutuq = new Yutuq({
    yutuqTitle,
    yutuqText,
    img,
  });

  await yutuq.save();
  res.redirect("/14admin/yutuq/read");
});

router.get("/edit/:id", async (req, res) => {
  const yutuq = await Yutuq.findById(req.params.id);

  res.render("admin/yutuqYangilash", {
    layout: "admin",
    header: "Yutuqni o'zgartirish",
    title: "Yutuqni o'zgartirish",
    yutuq,
  });
});

router.post(
  "/edit/:id",
  /* auth, */ fileUpload.single("img"),
  async (req, res) => {
    const { img } = await Yutuq.findById(req.params.id);
    const yutuq = req.body;

    console.log(img);

    if (req.file) {
      toDelete(img);
      yutuq.img = req.file.filename;
    }
    await Yutuq.findByIdAndUpdate(req.params.id, yutuq);
    res.redirect("/14admin/yutuq/read");
  }
);

router.get(
  "/delete/:id",
  /* auth, */ async (req, res) => {
    const { img } = await Yutuq.findById(req.params.id);
    await Yutuq.findByIdAndDelete(req.params.id, req.body);
    toDelete(img);
    res.redirect("/14admin/yutuq/read");
  }
);

module.exports = router;
