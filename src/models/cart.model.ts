import { ICart } from "@types"
import mongoose, { Schema } from "mongoose"

const cartSchema: Schema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true, default: 1 },
})

const Cart = mongoose.model<ICart>("Cart", cartSchema)

export default Cart
