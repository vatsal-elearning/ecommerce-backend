import { Document } from "mongoose"

export default interface ICart extends Document {
  productId: object
  quantity: number
}
