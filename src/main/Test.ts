/// <reference path="../config/Equip.ts" />
namespace game {

    import Equip = game.Equip;

    export class Test {
        constructor() {

        }

        /**
         * init
         */
        public init() {
            let config = Equip.getConfig(1, 2);
            console.log("---------------- show level")
            console.log(config.level);
            let config2 = Equip.getConfig(2, 2);

            console.log(config2.level);
            console.log(config2.desc);
        }
    }
}