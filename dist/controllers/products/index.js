"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const product_1 = require("../../models/product");
class ProductsController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield product_1.ProductModel.find();
                res.status(200).json(products);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productData = req.body;
                const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
                const product = new product_1.ProductModel(Object.assign(Object.assign({}, productData), { imageUrl }));
                yield product.save();
                res.status(201).json(product);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const product = yield product_1.ProductModel.findById(id);
                if (!product) {
                    res.status(404).send('Product not found');
                    return;
                }
                res.status(200).json(product);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    static editById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const updatedData = req.body;
                const product = yield product_1.ProductModel.findByIdAndUpdate({ _id: id }, updatedData);
                res.status(200).json(product);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const product = yield product_1.ProductModel.findOneAndDelete({ _id: id });
                res.status(200).json(product);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
}
exports.ProductsController = ProductsController;
