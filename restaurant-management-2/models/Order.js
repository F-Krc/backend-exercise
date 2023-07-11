import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' },
  foodItems: {
    type: [
      {
        name: String,
        price: Number,
      },
    ],
    required: true,
  },
  orderTime: {
    type: Date,
    default: Date.now(),
  },
});

orderSchema.virtual('totalPrice').get(function () {
  return this.foodItems.reduce((total, item) => total + item.price, 0);
});

orderSchema.set("toJSON", {virtuals: true})
const OrderModel = mongoose.model('Order', orderSchema);
export default OrderModel;
