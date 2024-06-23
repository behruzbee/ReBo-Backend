"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    color: { type: [String], required: true },
    desc: { type: String, required: true },
    url: { type: String, required: true },
    remainder: { type: Number, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
});
exports.ProductModel = (0, mongoose_1.model)('Product', ProductSchema);
