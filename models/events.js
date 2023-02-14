const mongoose = require("mongoose");
const eventSchema = mongoose.Schema({
  name: { type: String, required: true },
  sdate: { type: String, required: true },
  edate: { type: String, required: true },
  quotes: { type: String, required: true },
  priority: { type: String, required: true },
  status: { type: String, required: true },
  username:{type:String,required:true}
});

module.exports = mongoose.model("Events", eventSchema);
