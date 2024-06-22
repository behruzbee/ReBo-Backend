"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryPoints = void 0;
var EntryPoints;
(function (EntryPoints) {
    EntryPoints["GET_All"] = "/products";
    EntryPoints["GET_By_Id"] = "/products/:id";
    EntryPoints["CREATE"] = "/products";
    EntryPoints["GET_By_Category"] = "/products/category/:category";
})(EntryPoints || (exports.EntryPoints = EntryPoints = {}));
