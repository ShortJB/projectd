namespace config {
    export class Equip {
        static _equip: Equip;
        static _config: any;
        static _configVO: any[];

        get configVO() {
            return Equip._configVO;
        }

        static getConfig(id?:number, lv?:number): Equip {
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
                }

            }
            Equip._configVO = Equip._config[id];
            return Equip._equip;
        }

        get level(): number {
            return Equip._config[EquipEnum.level];
        }
    }


}

const enum EquipEnum {
    level,
    id,
    desc,
}