/// <reference path="../config/Equip.ts" />
namespace game {

    import Equip = config.Equip;

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
        }
    }
}