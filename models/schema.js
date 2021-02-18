let Schema = mongoose.Schema;
const activitySchema = new mongoose.Schema({
category: {
  type: String,
  ref: 'Category',
},
activity_name: {
  type: String,
},
quantity: {
  type: Number,
},
metric: {
  type: String,
},
date: {
  type: Date,
  default: Date.now
},
});