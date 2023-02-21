"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Equip = /** @class */ (function () {
    function Equip() {
    }
    Object.defineProperty(Equip.prototype, "configVO", {
        get: function () {
            return Equip._configVO;
        },
        enumerable: false,
        configurable: true
    });
    Equip.getConfig = function (id, lv) {
        if (!Equip._equip) {
            Equip._equip = new Equip();
            //读取配置表
            Equip._config = {
                1: [1, 2, "333333333333333"],
                2: [1, 2, "333333333333333"],
                3: [1, 2, "333333333333333"],
                4: [1, 2, "333333333333333"],
                5: [1, 2, "333333333333333"],
            };
        }
        Equip._configVO = Equip._config[id];
        return Equip._equip;
    };
    Object.defineProperty(Equip.prototype, "level", {
        get: function () {
            return Equip._config[0 /* level */];
        },
        enumerable: false,
        configurable: true
    });
    return Equip;
}());
exports.default = Equip;
//# sourceMappingURL=Equip.js.map