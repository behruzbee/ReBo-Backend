import { model, Schema } from 'mongoose'

const ProductSchema = new Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  color: { type: [String], required: true },
  desc: { type: String, required: true },
  url: { type: String, required: true },
  remainder: { type: Number, required: true },
  category: { type: String, required: true },
  price: {type: String, required: true},
})

export const ProductModel = model('Product', ProductSchema)
