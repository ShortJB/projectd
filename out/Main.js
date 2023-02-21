"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Test_1 = require("./main/Test");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.init = function () {
        var t = new Test_1.default();
        t.init();
    };
    return Main;
}());
var main = new Main();
main.init();
//# sourceMappingURL=Main.js.map