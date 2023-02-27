const { Router } = require("express");
const router = Router();
const Category = require("../models/Category");
const mongoose = require("mongoose");

router.get(
  "/read/:id", async (req, res) => {
    const { categoryTitle } = await Category.findById(req.params.id);
    let products = await Category.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.params.id),
        },
      },
      {
        $lookup: {
          from: "maqolas",
          localField: "_id",
          foreignField: "categoryId",
          as: "maqolalar",
        },
      },
      {
        $unwind: {
          path: "$maqolalar",
        },
      },
      {
        $group: {
          _id: {
            _id: "$_id",
          },
          maqolalar: {
            $push: "$maqolalar",
          },
        },
      },
      {
        $project: {
          _id: "$id._id",
          categoryTitle: "$_id.categoryTitle",
          maqolalar: "$maqolalar",
        },
      },
    ]);

    products = products[0].maqolalar;
    res.render("admin/category", {
      header: categoryTitle,
      layout: "main",
      products,
    });
  }
);


module.exports = router;
