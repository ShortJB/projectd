declare namespace config {
    class Equip {
        static _equip: Equip;
        static _config: any;
        static _configVO: any[];
        get configVO(): any[];
        static getConfig(id?: number, lv?: number): Equip;
        get level(): number;
    }
}
declare const enum EquipEnum {
    level = 0,
    id = 1,
    desc = 2
}
declare namespace game {
    class Test {
        constructor();
        /**
         * init
         */
        init(): void;
    }
}
declare class Main {
    constructor();
    init(): void;
}
