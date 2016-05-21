//
cc.game.onStart = function(){
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new MainMenuScene());
    }, this);
};
cc.game.run();