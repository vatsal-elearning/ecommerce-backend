import { NextFunction, Request, Response } from "express"
import { Cart } from "@models"
import { responseHelper } from "@helpers"

const cartController = {
  getCartItems: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cartItems = await Cart.find().populate("productId")
      responseHelper(res, 200, cartItems, "Cart items fetched successfully.")
    } catch (err) {
      next(err)
    }
  },

  addToCart: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { productId } = req.body
      let cartItem = await Cart.findOne({ productId })

      if (cartItem) {
        cartItem.quantity += 1
      } else {
        cartItem = new Cart({ productId, quantity: 1 })
      }
      await cartItem.save()

      const updatedCartItem = await Cart.findById(cartItem._id).populate(
        "productId"
      )
      responseHelper(
        res,
        200,
        updatedCartItem,
        "Item added to cart successfully."
      )
    } catch (err) {
      next(err)
    }
  },

  updateCart: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { productId, quantity } = req.body
      const updatedCartItem = await Cart.updateOne({ productId }, { quantity })
      responseHelper(
        res,
        200,
        updatedCartItem,
        "Item updated to cart successfully."
      )
    } catch (err) {
      next(err)
    }
  },

  removeCart: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cartId = req.params.id
      const updatedCartItem = await Cart.deleteOne({ _id: cartId })
      responseHelper(
        res,
        200,
        updatedCartItem,
        "Item removed from cart successfully."
      )
    } catch (err) {
      next(err)
    }
  },
}

export default cartController
