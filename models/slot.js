const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slotSchema = new Schema({
  slot_time: String,
  slot_date: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
});


const Slot = mongoose.model("Slot",slotSchema)

module.exports = Slot;