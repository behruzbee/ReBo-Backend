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
                console.log(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { name, price, category } = req.body;
                const imageUrl = ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path) || '';
                const product = new product_1.ProductModel({ name, price, category, url: imageUrl });
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
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    static getByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = req.params.category;
                const products = yield product_1.ProductModel.find({ category });
                if (products.length === 0) {
                    res.status(404).send('No products found in this category');
                    return;
                }
                res.status(200).json(products);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    static searchByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const name = req.query.name;
                if (!name) {
                    res.status(400).send('Name parameter is required');
                    return;
                }
                const products = yield product_1.ProductModel.find({ name: { $regex: name, $options: 'i' } }, 'name price image');
                if (products.length === 0) {
                    res.status(404).send('No products found with this name');
                    return;
                }
                res.status(200).json(products);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    static getAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield product_1.ProductModel.distinct('category');
                res.status(200).json(categories);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
}
exports.ProductsController = ProductsController;
