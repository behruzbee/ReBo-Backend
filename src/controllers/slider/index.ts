import { Request, Response } from 'express'
import type { ISlider } from '../../models/slider/types'
import { SliderModel } from '../../models/slider'

export class SliderController {
  static async create(
    req: Request<any, any, ISlider>,
    res: Response
  ): Promise<void> {
    try {
      const sliderData = req.body
      const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''

      const slider = new SliderModel({
        ...sliderData,
        imageUrl
      })

      res.status(200).json(slider)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  }

  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id
      await SliderModel.findOneAndDelete({ _id: id })

      res.status(201).json('Success Deleted!')
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  }
}
