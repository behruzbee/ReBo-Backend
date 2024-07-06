import { Router } from 'express'

import { EntryPoints } from './types'
import { ProductsController } from '../../controllers/products'
import { singleUpload } from '../../middlewares/multer'

const router = Router()

router.post(EntryPoints.CREATE, singleUpload, ProductsController.create)
router.get(EntryPoints.GET_ALL, ProductsController.getAll)
router.get(EntryPoints.GET_BY_ID, ProductsController.getById)
router.patch(EntryPoints.EDIT_BY_ID, ProductsController.editById)
router.delete(EntryPoints.DELETE, ProductsController.delete)

export { router as productsRouter }
