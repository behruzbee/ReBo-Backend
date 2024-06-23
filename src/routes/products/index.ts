import { Router } from 'express'
import multer from 'multer'

import { EntryPoints } from './types'
import { ProductsController } from '../../controllers/products'

// Настройка хранилища для multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

const router = Router()

router.get(EntryPoints.GET_All, ProductsController.getAll)
router.get(EntryPoints.GET_By_Id, ProductsController.getById)
router.get(EntryPoints.GET_By_Category, ProductsController.getByCategory)
router.get(EntryPoints.GET_All_Categories, ProductsController.getAllCategories)
router.post(EntryPoints.CREATE, upload.single('image'), ProductsController.create);

export { router as productsRouter }
