

/**
 * cc Namespace.
 * @namespace
 */
var cc = cc || {};

/**
 * Global Custom Tag
 * @constant
 * @type Number
 */
cc.CUSTOM_TAG = 99999;


/**
 * cc.NamespaceA Namespace.
 * @namespace
 */
cc.NamespaceA = cc.NamespaceA || {};


/** 
 * SomeUtil -- A static util function.
 * @param {int} param1 - param1
 * @param {int} param2 - param2
 * @param {int} param3 - param3
 * @return {int}
 */
cc.NamespaceA.SomeUtil = function (param1, param2, param3) {
    return param1 + param2 + param3;
};


/**
 * cc.NamespaceB Namespace.
 * @namespace
 */
cc.NamespaceB = cc.NamespaceB || {};

/**
 * @class
 * @classdesc cc.NamespaceB.SomeManager
 */
cc.NamespaceB.SomeManager = function() {
    /** 
     * init method
     * @function
     * @param {string} tag - some tag
     * @see cc.NamespaceB.SomeManager#funcB
     */
    this.init = function(tag) {
    };
    /** 
     * funcA method
     * @function
     */
    this.funcA = function() {};
    /** 
     * funcB method
     * @function
     */
    this.funcB = function() {};
    /** 
     * callBackFunc method
     * @function
     * @param {cc.NamespaceB.SomeManager~customCallback} callbackFunc - A callback function.
     */
    this.funcWithCallback = function(callbackFunc) {
        callbackFunc();
    }
    /**
     * This callback for funcWithCallback method.
     * @callback cc.NamespaceB.SomeManager~customCallback
     * @param {object} event - Event object.
     */
};

var _sharedSomeManager = null;
/** 
 * cc.NamespaceB.SomeManager singleton.
 * @return {cc.NamespaceB.SomeManager}
 * @example
 * // example
 * cc.NamespaceB.SomeManager.getInstance().funcA();
 */
cc.NamespaceB.SomeManager.getInstance = function() {
    if (_sharedSomeManager == null) {
        _sharedSomeManager = new cc.NamespaceB.SomeManager();
        _sharedSomeManager.init();
    }
    return _sharedSomeManager;
};


/**
 * @class
 * @extends cc.Node
 * @property {Number}   a   - property a of cc.CustomNode
 * @property {Number}   b   - property b of cc.CustomNode
 * @property {Number}   c   - property c of cc.CustomNode
 * @classdesc cc.CustomNode
 */
cc.CustomNode = cc.Node.extend(/** @lends cc.CustomNode# */{
    /**
     * cocos constructor
     * @function
     */
    ctor:function() {
        cc.Node.prototype.ctor.call(this);
    },
    /**
     * cc.CustomNode instance Method A
     * @function
     */
    funcA:function() {},
    /**
     * cc.CustomNode instance Method B
     * @function
     */
    funcB:function() {}
});

/** 
 * cc.CustomNode Class Static Method
 * @return {cc.CustomNode}
 * @example
 * // example
 * var node = cc.CustomNode.create();
 */
cc.CustomNode.create = function() {};





var MainMenuLayer = cc.Layer.extend({
    ctor:function () {
        this._super();

        this.winSize = cc.director.getWinSize();
        var demoTitle = new cc.LabelTTF("Cocos2d-JS jsdoc", "Verdana", 32);
        demoTitle.setPosition(this.winSize.width * 0.5, this.winSize.height * 0.95);
        this.addChild(demoTitle);

        return true;
    }
});

var MainMenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainMenuLayer();
        this.addChild(layer);
    }
});
