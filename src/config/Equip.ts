/// <reference path="./ConfigMgr.ts" />
namespace game {
    export class Equip {
        static _equip: Equip;
        static _config: any;

        static getConfig(id?: number, lv?: number): Equip {
            if (!Equip._equip) {
                Equip._equip = new Equip();

                Equip._config = ConfigMgr.getCfgs('T_Equip.bin');
            }
            // Equip._configVO = Equip._config[id];
            // return Equip._equip;

            let config = Equip._config[id];
            config.__proto__ = Equip.prototype;
            return config;
        }

        get level(): number {
            return this[0];
        }
        get id(): number {
            return this[1];
        }
        get desc(): string {
            return this[2];
        }
    }


}
