var config;
(function (config) {
    class Equip {
        get configVO() {
            return Equip._configVO;
        }
        static getConfig(id, lv) {
            if (!Equip._equip) {
                Equip._equip = new Equip();
                //读取配置表
                Equip._config = {
                    0: [1, 2, "333333333333333"],
                    1: [1, 2, "333333333333333"],
                    2: [1, 2, "333333333333333"],
                    3: [1, 2, "333333333333333"],
                    4: [1, 2, "333333333333333"],
                    5: [1, 2, "333333333333333"],
                };
            }
            Equip._configVO = Equip._config[id];
            return Equip._equip;
        }
        get level() {
            return Equip._config[0 /* level */];
        }
    }
    config.Equip = Equip;
})(config || (config = {}));
/// <reference path="../config/Equip.ts" />
var game;
/// <reference path="../config/Equip.ts" />
(function (game) {
    var Equip = config.Equip;
    class Test {
        constructor() {
        }
        /**
         * init
         */
        init() {
            let config = Equip.getConfig(1, 2);
            console.log("---------------- show level");
            console.log(config.level);
        }
    }
    game.Test = Test;
})(game || (game = {}));
/// <reference path="main/Test.ts" />
class Main {
    constructor() {
        this.init();
    }
    init() {
        let t = new game.Test();
        t.init();
    }
}
new Main();
//# sourceMappingURL=main.js.map