const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// One per user
const salesperformanceModel = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	name: { type: String }, // check if name exists!!!
	goalWeekly: { type: Number },
	goalMonthly: { type: Number },
	goalYearly: { type: Number },
	performances: [{ date: Date }]
});

module.exports = mongoose.model('Salesperformance', salesperformanceModel);
