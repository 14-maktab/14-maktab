const { Router } = require("express");
const router = Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const auth = require('../middleware/auth')

router.get("/login", (req, res, next) => {
  res.render("auth/login", {
    title: "Login",
  });
});

router.get("/logout", (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/14auth/login");
  });
});

router.post("/login", async (req, res) => {
  //   try {
  const { login, password } = req.body;

  const candidate = await Admin.findOne({ login });
  console.log(candidate);

  if (candidate) {
    const areSame = await bcrypt.compare(password, candidate.password);

    if (areSame) {
      req.session.isAuth = true;
      req.session.admin = candidate;
      res.redirect("/14admin");
    } else {
      res.redirect("/14auth/login");
    }
  } else {
    res.redirect("/14auth/login");
  }
  //   } catch (error) {
  //     console.log(error);
  //   }
});


router.get("/regisstratsiya", (req, res, next) => {
  res.render("auth/register", {
    title: "Register",
  });
});

router.post("/regisstratsiya", async (req, res) => {
  const { name, login, password } = req.body;
  console.log(req.body, name);

  const hasPassword = await bcrypt.hash(password, 10);
  const admin = new Admin({
    name,
    login,
    password: hasPassword,
  });

  console.log(admin);
  await admin.save();
  res.redirect("/14auth/login");
});

module.exports = router;
