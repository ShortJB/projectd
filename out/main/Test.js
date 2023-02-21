"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Equip_1 = require("../config/Equip");
var Test = /** @class */ (function () {
    function Test() {
    }
    /**
     * init
     */
    Test.prototype.init = function () {
        var config = Equip_1.default.getConfig(1, 2);
        console.log("---------------- show level");
        console.log(config.level);
    };
    return Test;
}());
exports.default = Test;
//# sourceMappingURL=Test.js.map