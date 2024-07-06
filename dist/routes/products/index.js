"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const types_1 = require("./types");
const products_1 = require("../../controllers/products");
const multer_1 = require("../../middlewares/multer");
const router = (0, express_1.Router)();
exports.productsRouter = router;
router.post(types_1.EntryPoints.CREATE, multer_1.singleUpload, products_1.ProductsController.create);
router.get(types_1.EntryPoints.GET_ALL, products_1.ProductsController.getAll);
router.get(types_1.EntryPoints.GET_BY_ID, products_1.ProductsController.getById);
router.patch(types_1.EntryPoints.EDIT_BY_ID, products_1.ProductsController.editById);
router.delete(types_1.EntryPoints.DELETE, products_1.ProductsController.delete);
