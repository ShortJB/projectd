namespace game {
    export class ConfigMgr {
        public static getCfgs(configName: string): any {
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
}
