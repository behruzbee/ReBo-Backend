import { Router } from 'express'

import { EntryPoints } from './types'
import { SliderController } from './../../controllers/slider';
import { singleUpload } from '../../middlewares/multer'

const router = Router()

router.get(EntryPoints.GET_ALL, SliderController.getAll)
router.post(EntryPoints.CREATE, singleUpload, SliderController.create)
router.delete(EntryPoints.DELETE, SliderController.delete)


export { router as sliderRouter }