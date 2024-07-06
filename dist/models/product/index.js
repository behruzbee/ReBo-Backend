"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    color: { type: [String], required: true },
    desc: { type: String, required: true },
    imageUrl: { type: String },
    remainder: { type: Number, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    lastEditedAt: { type: Date }
});
ProductSchema.pre('save', function (next) {
    const date = new Date();
    this.lastEditedAt = date;
    this.lastEditedAt = date;
    next();
});
ProductSchema.pre('findOneAndUpdate', function (next) {
    const update = this.getUpdate();
    if (update) {
        if (!update.$set) {
            update.$set = {};
        }
        update.$set.lastEditedAt = new Date();
    }
    next();
});
exports.ProductModel = (0, mongoose_1.model)('Product', ProductSchema);
