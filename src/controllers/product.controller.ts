import { NextFunction, Request, Response } from "express"
import { Product } from "@models"
import { responseHelper } from "@helpers"

const productController = {
  getProducts: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await Product.find()
      responseHelper(res, 200, products, "Product list fetched successfully.")
    } catch (err) {
      next(err)
    }
  },
}

export default productController
