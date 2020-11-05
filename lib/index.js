"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = __importDefault(require("angular"));
var directive_1 = require("./directive");
var module = angular_1.default.module('tippy', []);
module.directive('tippy', function () { return directive_1.tippyDirective; });
exports.default = module.name;
