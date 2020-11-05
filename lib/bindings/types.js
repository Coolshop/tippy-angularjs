"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // ONE-WAY BINDING
    'boolean': '<',
    'object': '<',
    // TEXT BINDING
    'string': '@',
    'number': '@',
    'string,string[]': '@',
    'number,number[]': '@',
    'number,string': '@',
    // EXPRESSION BINDING
    'Function': '&',
};
