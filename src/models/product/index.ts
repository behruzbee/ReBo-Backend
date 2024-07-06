import { model, Schema } from 'mongoose'

const ProductSchema = new Schema({
  name: { type: String, required: true },
  color: { type: [String], required: true },
  desc: { type: String, required: true },
  imageUrl: { type: String },
  remainder: { type: Number, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  lastEditedAt: { type: Date }
})

ProductSchema.pre('save', function (next) {
  const date = new Date()
  this.lastEditedAt = date
  this.lastEditedAt = date
  next()
})

ProductSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate() as {
    lastEditedAt?: Date
    $set?: { lastEditedAt?: Date }
  }
  if (update) {
    if (!update.$set) {
      update.$set = {}
    }
    update.$set.lastEditedAt = new Date()
  }
  next()
})
export const ProductModel = model('Product', ProductSchema)
