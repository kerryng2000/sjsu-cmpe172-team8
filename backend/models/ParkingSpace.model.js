const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ParkingSpaceSchema = new Schema({
  FirstName: { type: String, required: true },
  description: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const ParkingSpace = mongoose.model('ParkingSpace', ParkingSpaceSchema);

module.exports = ParkingSpace;