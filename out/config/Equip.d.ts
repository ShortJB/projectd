export default class Equip {
    static _equip: Equip;
    static _config: any;
    static _configVO: any[];
    get configVO(): any[];
    static getConfig(id?: number, lv?: number): Equip;
    get level(): number;
}
