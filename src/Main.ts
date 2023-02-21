/// <reference path="main/Test.ts" />
class Main {
    constructor() {
        this.init();
    }

    init(){
        let t = new game.Test();
        t.init();
    }
}

new Main();