declare namespace game {
    class ConfigMgr {
        static getCfgs(configName: string): any;
    }
}
declare namespace game {
    class Equip {
        static _equip: Equip;
        static _config: any;
        static getConfig(id?: number, lv?: number): Equip;
        get level(): number;
        get id(): number;
        get desc(): string;
    }
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
