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
exports.tippyDirective = void 0;
var helpers_1 = require("./helpers");
var mappers_1 = __importDefault(require("./bindings/mappers"));
var tippy_js_1 = __importDefault(require("tippy.js"));
var scope = __assign(__assign({}, helpers_1.createScope()), { onCreate: '&?onCreate', class: '@?class' });
var link = function (scope, element, attrs, _, transclude) { return transclude(function (contents) {
    var parent = document.createElement('div');
    Array.from(contents || []).forEach(function (child) {
        parent.appendChild(child);
    });
    var instance = tippy_js_1.default(element[0].parentElement, {
        content: parent
    });
    // lifecycle
    scope.$on('$destroy', function () { return instance.destroy(); });
    // apply custom watchers
    scope.$watch('onCreate', function (callback) {
        if (typeof callback === 'function') {
            callback({ $instance: instance });
        }
    });
    scope.$watch('class', function (value) {
        parent.className = value || '';
    });
    // apply tippy option watchers
    var bindingNames = helpers_1.getBindingNames();
    bindingNames.forEach(function (name) {
        var isFirstRun = true;
        scope.$watch(name, function (value) {
            var _a;
            var type = helpers_1.getTypeOfBinding(name);
            var noop = function (x) { return x; };
            var _b = mappers_1.default[type] || {}, _c = _b.beforeTest, beforeTest = _c === void 0 ? noop : _c, _d = _b.beforeSet, beforeSet = _d === void 0 ? noop : _d;
            var testValue = beforeTest(value, attrs[name]);
            if (!(isFirstRun && testValue === undefined)) {
                instance.setProps((_a = {}, _a[name] = beforeSet(testValue), _a));
            }
            isFirstRun = false;
        });
    });
    // end link
}); };
exports.tippyDirective = {
    restrict: 'E',
    transclude: true,
    scope: scope,
    link: link
};
