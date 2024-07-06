import { Request, Response } from 'express'
import type { IProduct } from '../../models/product/types'
import { ProductModel } from '../../models/product'

export class ProductsController {
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const products = await ProductModel.find()
      res.status(200).json(products)
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server Error')
    }
  }

  static async create(
    req: Request<any, any, IProduct>,
    res: Response
  ): Promise<void> {
    try {
      const productData = req.body
      const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''

      const product = new ProductModel({
        ...productData,
        imageUrl
      })

      await product.save()
      res.status(201).json(product)
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server Error')
    }
  }

  static async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id
      const product = await ProductModel.findById(id)

      if (!product) {
        res.status(404).send('Product not found')
        return
      }

      res.status(200).json(product)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  }

  static async editById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id
      const updatedData = req.body

      const product = await ProductModel.findByIdAndUpdate({_id: id}, updatedData)

      res.status(200).json(product)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  }

  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id
      const product = await ProductModel.findOneAndDelete({ _id: id })

      res.status(200).json(product)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  }
}
