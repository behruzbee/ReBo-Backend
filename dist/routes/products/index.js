"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const types_1 = require("./types");
const products_1 = require("../../controllers/products");
// Настройка хранилища для multer
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
const router = (0, express_1.Router)();
exports.productsRouter = router;
router.get(types_1.EntryPoints.GET_All, products_1.ProductsController.getAll);
router.get(types_1.EntryPoints.GET_By_Id, products_1.ProductsController.getById);
router.get(types_1.EntryPoints.GET_By_Category, products_1.ProductsController.getByCategory);
router.get(types_1.EntryPoints.GET_All_Categories, products_1.ProductsController.getAllCategories);
router.post(types_1.EntryPoints.CREATE, upload.single('image'), products_1.ProductsController.create);
