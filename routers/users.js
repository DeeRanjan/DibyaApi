const express = require("express");
const users = require("../models/user");

const router = express.Router();
const user = require("../models/user");
router.get("/", async (req, res) => {
  try {
    const user = await users.find();
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const user = new users({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put("/:userId", async (req, res) => {
  try {
    const editPass = await users.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password,
        },
      }
    );
    res.json(editPass);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
