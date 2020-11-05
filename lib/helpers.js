"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createScope = exports.getBindingSymbol = exports.getTypeOfBinding = exports.getBindingNames = exports.isNumber = void 0;
var names_1 = __importDefault(require("./bindings/names"));
var types_1 = __importDefault(require("./bindings/types"));
var lodash_flatmap_1 = __importDefault(require("lodash.flatmap"));
var lodash_values_1 = __importDefault(require("lodash.values"));
var lodash_keys_1 = __importDefault(require("lodash.keys"));
exports.isNumber = function (num) {
    return typeof num === 'number' && !isNaN(num);
};
exports.getBindingNames = function () {
    return lodash_flatmap_1.default(lodash_values_1.default(names_1.default));
};
exports.getTypeOfBinding = function (bindingName) {
    var index = lodash_values_1.default(names_1.default).findIndex(function (names) { return names.includes(bindingName); });
    return lodash_keys_1.default(names_1.default)[index];
};
exports.getBindingSymbol = function (bindingType) {
    return types_1.default[bindingType];
};
exports.createScope = function () { return exports.getBindingNames().reduce(function (scope, name) {
    var _a;
    var type = exports.getTypeOfBinding(name);
    var symbol = exports.getBindingSymbol(type);
    return __assign(__assign({}, scope), (_a = {}, _a[name] = symbol + "?" + name, _a));
}, {}); };
