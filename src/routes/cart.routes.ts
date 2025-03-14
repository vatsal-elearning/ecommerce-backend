import { Router } from "express"
import { cartController } from "@controllers"

const router = Router()

router.get("/", cartController.getCartItems)
router.post("/", cartController.addToCart)
router.put("/", cartController.updateCart)
router.delete("/:id", cartController.removeCart)

export default router
