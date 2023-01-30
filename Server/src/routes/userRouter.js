const Users = require("../models/users");
const { Router, response } = require("express");
const app = Router();
const upload = require("../../middleware/upload")


app.post("/profile/:id", upload, async (req, res, next) => {
    try {
      const data = await Users.findByIdAndUpdate(
        { _id: req.params.id },
        { avatar: req.file.originalname }
      );
      if (data) {
        res.json({
          msg: "avatar upload success!!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

module.exports = app;
