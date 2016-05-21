<a name="cc"></a>

## cc : <code>object</code>
cc Namespace.

**Kind**: global namespace  

* [cc](#cc) : <code>object</code>
    * [.CustomNode](#cc.CustomNode) ⇐ <code>cc.Node</code>
        * _instance_
            * [.ctor()](#cc.CustomNode+ctor)
            * [.funcA()](#cc.CustomNode+funcA)
            * [.funcB()](#cc.CustomNode+funcB)
        * _static_
            * [.create()](#cc.CustomNode.create) ⇒ <code>[CustomNode](#cc.CustomNode)</code>
    * [.NamespaceA](#cc.NamespaceA) : <code>object</code>
        * [.SomeUtil(param1, param2, param3)](#cc.NamespaceA.SomeUtil) ⇒ <code>int</code>
    * [.NamespaceB](#cc.NamespaceB) : <code>object</code>
        * [.SomeManager](#cc.NamespaceB.SomeManager)
            * _instance_
                * [.init(tag)](#cc.NamespaceB.SomeManager+init)
                * [.funcA()](#cc.NamespaceB.SomeManager+funcA)
                * [.funcB()](#cc.NamespaceB.SomeManager+funcB)
                * [.funcWithCallback(callbackFunc)](#cc.NamespaceB.SomeManager+funcWithCallback)
            * _static_
                * [.getInstance()](#cc.NamespaceB.SomeManager.getInstance) ⇒ <code>[SomeManager](#cc.NamespaceB.SomeManager)</code>
            * _inner_
                * [~customCallback](#cc.NamespaceB.SomeManager..customCallback) : <code>function</code>
    * [.CUSTOM_TAG](#cc.CUSTOM_TAG) : <code>Number</code>

<a name="cc.CustomNode"></a>

### cc.CustomNode ⇐ <code>cc.Node</code>
cc.CustomNode

**Kind**: static class of <code>[cc](#cc)</code>  
**Extends:** <code>cc.Node</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | property a of cc.CustomNode |
| b | <code>Number</code> | property b of cc.CustomNode |
| c | <code>Number</code> | property c of cc.CustomNode |


* [.CustomNode](#cc.CustomNode) ⇐ <code>cc.Node</code>
    * _instance_
        * [.ctor()](#cc.CustomNode+ctor)
        * [.funcA()](#cc.CustomNode+funcA)
        * [.funcB()](#cc.CustomNode+funcB)
    * _static_
        * [.create()](#cc.CustomNode.create) ⇒ <code>[CustomNode](#cc.CustomNode)</code>

<a name="cc.CustomNode+ctor"></a>

#### customNode.ctor()
cocos constructor

**Kind**: instance method of <code>[CustomNode](#cc.CustomNode)</code>  
<a name="cc.CustomNode+funcA"></a>

#### customNode.funcA()
cc.CustomNode instance Method A

**Kind**: instance method of <code>[CustomNode](#cc.CustomNode)</code>  
<a name="cc.CustomNode+funcB"></a>

#### customNode.funcB()
cc.CustomNode instance Method B

**Kind**: instance method of <code>[CustomNode](#cc.CustomNode)</code>  
<a name="cc.CustomNode.create"></a>

#### CustomNode.create() ⇒ <code>[CustomNode](#cc.CustomNode)</code>
cc.CustomNode Class Static Method

**Kind**: static method of <code>[CustomNode](#cc.CustomNode)</code>  
**Example**  
```js
// example
var node = cc.CustomNode.create();
```
<a name="cc.NamespaceA"></a>

### cc.NamespaceA : <code>object</code>
cc.NamespaceA Namespace.

**Kind**: static namespace of <code>[cc](#cc)</code>  
<a name="cc.NamespaceA.SomeUtil"></a>

#### NamespaceA.SomeUtil(param1, param2, param3) ⇒ <code>int</code>
SomeUtil -- A static util function.

**Kind**: static method of <code>[NamespaceA](#cc.NamespaceA)</code>  

| Param | Type | Description |
| --- | --- | --- |
| param1 | <code>int</code> | param1 |
| param2 | <code>int</code> | param2 |
| param3 | <code>int</code> | param3 |

<a name="cc.NamespaceB"></a>

### cc.NamespaceB : <code>object</code>
cc.NamespaceB Namespace.

**Kind**: static namespace of <code>[cc](#cc)</code>  

* [.NamespaceB](#cc.NamespaceB) : <code>object</code>
    * [.SomeManager](#cc.NamespaceB.SomeManager)
        * _instance_
            * [.init(tag)](#cc.NamespaceB.SomeManager+init)
            * [.funcA()](#cc.NamespaceB.SomeManager+funcA)
            * [.funcB()](#cc.NamespaceB.SomeManager+funcB)
            * [.funcWithCallback(callbackFunc)](#cc.NamespaceB.SomeManager+funcWithCallback)
        * _static_
            * [.getInstance()](#cc.NamespaceB.SomeManager.getInstance) ⇒ <code>[SomeManager](#cc.NamespaceB.SomeManager)</code>
        * _inner_
            * [~customCallback](#cc.NamespaceB.SomeManager..customCallback) : <code>function</code>

<a name="cc.NamespaceB.SomeManager"></a>

#### NamespaceB.SomeManager
cc.NamespaceB.SomeManager

**Kind**: static class of <code>[NamespaceB](#cc.NamespaceB)</code>  

* [.SomeManager](#cc.NamespaceB.SomeManager)
    * _instance_
        * [.init(tag)](#cc.NamespaceB.SomeManager+init)
        * [.funcA()](#cc.NamespaceB.SomeManager+funcA)
        * [.funcB()](#cc.NamespaceB.SomeManager+funcB)
        * [.funcWithCallback(callbackFunc)](#cc.NamespaceB.SomeManager+funcWithCallback)
    * _static_
        * [.getInstance()](#cc.NamespaceB.SomeManager.getInstance) ⇒ <code>[SomeManager](#cc.NamespaceB.SomeManager)</code>
    * _inner_
        * [~customCallback](#cc.NamespaceB.SomeManager..customCallback) : <code>function</code>

<a name="cc.NamespaceB.SomeManager+init"></a>

##### someManager.init(tag)
init method

**Kind**: instance method of <code>[SomeManager](#cc.NamespaceB.SomeManager)</code>  
**See**: cc.NamespaceB.SomeManager#funcB  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>string</code> | some tag |

<a name="cc.NamespaceB.SomeManager+funcA"></a>

##### someManager.funcA()
funcA method

**Kind**: instance method of <code>[SomeManager](#cc.NamespaceB.SomeManager)</code>  
<a name="cc.NamespaceB.SomeManager+funcB"></a>

##### someManager.funcB()
funcB method

**Kind**: instance method of <code>[SomeManager](#cc.NamespaceB.SomeManager)</code>  
<a name="cc.NamespaceB.SomeManager+funcWithCallback"></a>

##### someManager.funcWithCallback(callbackFunc)
callBackFunc method

**Kind**: instance method of <code>[SomeManager](#cc.NamespaceB.SomeManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackFunc | <code>[customCallback](#cc.NamespaceB.SomeManager..customCallback)</code> | A callback function. |

<a name="cc.NamespaceB.SomeManager.getInstance"></a>

##### SomeManager.getInstance() ⇒ <code>[SomeManager](#cc.NamespaceB.SomeManager)</code>
cc.NamespaceB.SomeManager singleton.

**Kind**: static method of <code>[SomeManager](#cc.NamespaceB.SomeManager)</code>  
**Example**  
```js
// example
cc.NamespaceB.SomeManager.getInstance().funcA();
```
<a name="cc.NamespaceB.SomeManager..customCallback"></a>

##### SomeManager~customCallback : <code>function</code>
This callback for funcWithCallback method.

**Kind**: inner typedef of <code>[SomeManager](#cc.NamespaceB.SomeManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>object</code> | Event object. |

<a name="cc.CUSTOM_TAG"></a>

### cc.CUSTOM_TAG : <code>Number</code>
Global Custom Tag

**Kind**: static constant of <code>[cc](#cc)</code>  
