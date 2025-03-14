import { Router } from "express"
import { productController } from "@controllers"

const router = Router()

router.get("/list", productController.getProducts)

export default router
