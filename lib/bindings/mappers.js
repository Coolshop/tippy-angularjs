"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
exports.default = {
    'boolean': {
        beforeTest: function (value, attr) {
            return attr === '' ? true : value;
        }
    },
    'string,string[]': {
        beforeSet: function (value) {
            var asArray = String(value).split(' ');
            return asArray.length > 1 ? asArray : asArray[0];
        }
    },
    'number': {
        beforeSet: function (value) {
            return Number(value);
        }
    },
    'number,number[]': {
        beforeSet: function (value) {
            var asArray = String(value).split(' ').map(function (num) { return Number(num); });
            return asArray.length > 1 ? asArray : asArray[0];
        }
    },
    'number,string': {
        beforeSet: function (value) {
            var parsedValue = Number(value);
            return helpers_1.isNumber(parsedValue) ? parsedValue : value;
        }
    },
};
