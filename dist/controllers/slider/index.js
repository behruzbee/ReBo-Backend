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
exports.SliderController = void 0;
const slider_1 = require("../../models/slider");
class SliderController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sliders = yield slider_1.SliderModel.find();
                res.status(200).json(sliders);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sliderData = req.body;
                const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
                const slider = new slider_1.SliderModel(Object.assign(Object.assign({}, sliderData), { imageUrl }));
                res.status(200).json(slider);
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
                yield slider_1.SliderModel.findOneAndDelete({ _id: id });
                res.status(201).json('Success Deleted!');
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
}
exports.SliderController = SliderController;
