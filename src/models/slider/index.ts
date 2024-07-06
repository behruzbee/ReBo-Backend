import { model, Schema } from 'mongoose'

const SliderSchema = new Schema({
  productId: { type: String, required: true },
  imageUrl: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  lastEditedAt: { type: Date }
})

SliderSchema.pre('save', function (next) {
  const date = new Date()
  this.lastEditedAt = date
  this.lastEditedAt = date
  next()
})

SliderSchema.pre('findOneAndUpdate', function (next) {
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
export const SliderModel = model('Slider', SliderSchema)
