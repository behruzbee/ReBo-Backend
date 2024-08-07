"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sliderRouter = void 0;
const express_1 = require("express");
const types_1 = require("./types");
const slider_1 = require("./../../controllers/slider");
const multer_1 = require("../../middlewares/multer");
const router = (0, express_1.Router)();
exports.sliderRouter = router;
router.get(types_1.EntryPoints.GET_ALL, slider_1.SliderController.getAll);
router.post(types_1.EntryPoints.CREATE, multer_1.singleUpload, slider_1.SliderController.create);
router.delete(types_1.EntryPoints.DELETE, slider_1.SliderController.delete);
