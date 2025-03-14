import { IProduct } from "@types"
import mongoose, { Schema } from "mongoose"

const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
})

const Product = mongoose.model<IProduct>("Product", productSchema)

export default Product
