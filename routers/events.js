const express = require("express");
const { async } = require("rxjs");
const router = express.Router();
const Event = require("../models/events");
router.get("/", async (req, res) => {
  try {
    const event = await Event.find();
    res.json(event);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const event = new Event({
    name: req.body.name,
    sdate: req.body.sdate,
    edate: req.body.edate,
    quotes: req.body.quotes,
    priority: req.body.priority,
    status: req.body.status,
    username: req.body.username,
  });
  try {
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put("/:Id", async (req, res) => {
    try {
        console.log(req.body);
        const updatePost = await Event.updateOne(
            { _id: req.params.Id },
            {
              $set: {
                name: req.body.name,
                sdate: req.body.sdate,
                edate: req.body.edate,
                quotes:req.body.quotes,
                priority: req.body.priority,
                status: req.body.status,
              },
            }
          );
          res.json(updatePost);
    } catch (err) {
        res.json({message:err});
    }
});

router.delete('/:deleteId',async (req,res)=>{
  try {
    const deleteEvent= await Event.remove({_id:req.params.deleteId});
    res.json(deleteEvent);
  } catch (err) {
    res.json({message:err});
  }
})
module.exports = router;
