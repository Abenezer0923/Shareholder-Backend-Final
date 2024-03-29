var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var paymentOrderSchema = new Schema({
  bill_ref_number: String,
  paymentMethod: String,
  phoneNumber: String,
  acc_No:String,
  amount_birr: String,
  
  status: String,
  shareHolder: {
    type: Schema.Types.ObjectId,
    ref: "shareHolder",
  },
  payment: {
    type: Schema.Types.ObjectId,
    ref: "payment",
  },
  amount: Number,
  percentage: String,
  completed: Boolean,
  image: String 
});
paymentOrderSchema.set("timestamps", true);

module.exports = mongoose.model("paymentOrder", paymentOrderSchema);