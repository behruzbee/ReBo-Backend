"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderModel = void 0;
const mongoose_1 = require("mongoose");
const SliderSchema = new mongoose_1.Schema({
    productId: { type: String, required: true },
    imageUrl: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    lastEditedAt: { type: Date }
});
SliderSchema.pre('save', function (next) {
    const date = new Date();
    this.lastEditedAt = date;
    this.lastEditedAt = date;
    next();
});
SliderSchema.pre('findOneAndUpdate', function (next) {
    const update = this.getUpdate();
    if (update) {
        if (!update.$set) {
            update.$set = {};
        }
        update.$set.lastEditedAt = new Date();
    }
    next();
});
exports.SliderModel = (0, mongoose_1.model)('Slider', SliderSchema);
