import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true, unique: true },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

const TableModel = new mongoose.model("Table", tableSchema)

export default TableModel