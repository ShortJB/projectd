var game;
(function (game) {
    class ConfigMgr {
        static getCfgs(configName) {
            // return game.ConfMgr.getJson(configName);
            return {
                0: [1, "a", "test desc 2"],
                1: [2, "b", "test desc 2"],
                2: [3, "c", "test desc 3"],
                3: [4, "d", "test desc 4"],
                4: [5, "e", "test desc 5"],
                5: [6, "f", "test desc 6"],
            };
        }
    }
    game.ConfigMgr = ConfigMgr;
})(game || (game = {}));
/// <reference path="./ConfigMgr.ts" />
var game;
/// <reference path="./ConfigMgr.ts" />
(function (game) {
    // export class Equip1 extends Array {
    //     get level(): number {
    //         return this[0];
    //     }
    //     get id(): number {
    //         return this[1];
    //     }
    //     get desc(): string {
    //         return this[2];
    //     }
    // }
    class Equip {
        // static _configVO: any[];
        // get configVO() {
        //     return Equip._configVO;
        // }
        static getConfig(id, lv) {
            if (!Equip._equip) {
                Equip._equip = new Equip();
                //读取配置表
                // Equip._config = {
                //     0: [1, 2, "333333333333333"],
                //     1: [2, 2, "3"],
                //     2: [2, 2, "4"],
                //     3: [3, 2, "5"],
                //     4: [4, 2, "6"],
                //     5: [1, 2, "6"],
                // };
                Equip._config = game.ConfigMgr.getCfgs('T_Equip.bin');
            }
            // Equip._configVO = Equip._config[id];
            // return Equip._equip;
            let config = Equip._config[id];
            config.__proto__ = Equip.prototype;
            return config;
        }
        get level() {
            return this[0];
        }
        get id() {
            return this[1];
        }
        get desc() {
            return this[2];
        }
    }
    game.Equip = Equip;
})(game || (game = {}));
/// <reference path="../config/Equip.ts" />
var game;
/// <reference path="../config/Equip.ts" />
(function (game) {
    var Equip = game.Equip;
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
            let config2 = Equip.getConfig(2, 2);
            console.log(config2.level);
            console.log(config2.desc);
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