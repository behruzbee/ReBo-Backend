import { Request, Response } from 'express'
import { IProduct } from '../../models/product/types'
import { ProductModel } from '../../models/product'

export class ProductsController {
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const products = await ProductModel.find()
      res.status(200).json(products)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  }

  static async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, price, category } = req.body
      const imageUrl = req.file?.path || ''

      const product = new ProductModel({ name, price, category, url: imageUrl })
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
      console.error(error)
      res.status(500).send('Internal Server Error')
    }
  }

  static async getByCategory(req: Request, res: Response): Promise<void> {
    try {
      const category = req.params.category
      const products = await ProductModel.find({ category })

      if (products.length === 0) {
        res.status(404).send('No products found in this category')
        return
      }

      res.status(200).json(products)
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server Error')
    }
  }

  static async searchByName(req: Request, res: Response): Promise<void> {
    try {
      const name = req.query.name as string

      if (!name) {
        res.status(400).send('Name parameter is required')
        return
      }

      const products = await ProductModel.find(
        { name: { $regex: name, $options: 'i' } },
        'name price image'
      )

      if (products.length === 0) {
        res.status(404).send('No products found with this name')
        return
      }

      res.status(200).json(products)
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server Error')
    }
  }

  static async getAllCategories(req: Request, res: Response): Promise<void> {
    try {
      const categories = await ProductModel.distinct('category')
      res.status(200).json(categories)
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server Error')
    }
  }
}
