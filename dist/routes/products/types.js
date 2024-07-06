"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryPoints = void 0;
var EntryPoints;
(function (EntryPoints) {
    EntryPoints["CREATE"] = "/product";
    EntryPoints["GET_ALL"] = "/products";
    EntryPoints["GET_BY_ID"] = "/product/:id";
    EntryPoints["EDIT_BY_ID"] = "/product/:id";
    EntryPoints["DELETE"] = "/product/:id";
})(EntryPoints || (exports.EntryPoints = EntryPoints = {}));
