var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define("common/defineType", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.createCC2Object = exports.CC3Field = exports.CC2Field = exports.CC3Type = exports.CC2Type = void 0;
    var CC2Type;
    (function (CC2Type) {
        CC2Type["Prefab"] = "cc.Prefab";
        CC2Type["Node"] = "cc.Node";
        CC2Type["Color"] = "cc.Color";
        CC2Type["Size"] = "cc.Size";
        CC2Type["Vec2"] = "cc.Vec2";
        CC2Type["Vec3"] = "cc.Vec3";
        CC2Type["PrefabInfo"] = "cc.PrefabInfo";
        CC2Type["Button"] = "cc.Button";
        CC2Type["Sprite"] = "cc.Sprite";
        CC2Type["Animation"] = "cc.Animation";
        CC2Type["AnimationClip"] = "cc.AnimationClip";
        CC2Type["Mask"] = "cc.Mask";
        CC2Type["Label"] = "cc.Label";
        CC2Type["ParticleSystem"] = "cc.ParticleSystem";
    })(CC2Type = exports.CC2Type || (exports.CC2Type = {}));
    var CC3Type;
    (function (CC3Type) {
        CC3Type["Prefab"] = "cc.Prefab";
        CC3Type["Node"] = "cc.Node";
        CC3Type["Color"] = "cc.Color";
        CC3Type["Size"] = "cc.Size";
        CC3Type["Vec2"] = "cc.Vec2";
        CC3Type["Vec3"] = "cc.Vec3";
        CC3Type["PrefabInfo"] = "cc.PrefabInfo";
        CC3Type["Button"] = "cc.Button";
        CC3Type["Sprite"] = "cc.Sprite";
        CC3Type["Animation"] = "cc.Animation";
        CC3Type["AnimationClip"] = "cc.AnimationClip";
        CC3Type["Mask"] = "cc.Mask";
        CC3Type["Label"] = "cc.Label";
        CC3Type["ParticleSystem"] = "cc.ParticleSystem2D";
        CC3Type["UITransform"] = "cc.UITransform";
        CC3Type["Opacity"] = "cc.UIOpacity";
    })(CC3Type = exports.CC3Type || (exports.CC3Type = {}));
    var CC2Field;
    (function (CC2Field) {
        CC2Field["UUID"] = "__uuid__";
        CC2Field["ID"] = "__id__";
        CC2Field["Type"] = "__type__";
        CC2Field["Node"] = "node";
        //#region Node
        CC2Field["Children"] = "_children";
        CC2Field["Components"] = "_components";
        CC2Field["PrefabInfo"] = "_prefab";
        CC2Field["CompPrefabInfo"] = "__prefab";
        CC2Field["Parent"] = "_parent";
        CC2Field["ContentSize"] = "_contentSize";
        CC2Field["AnchorPoint"] = "_anchorPoint";
        CC2Field["Color"] = "_color";
        CC2Field["Transform"] = "_trs";
        CC2Field["EulerAngles"] = "_eulerAngles";
        //#endregion
        //#region Sprite
        CC2Field["Materials"] = "_materials";
        CC2Field["SourceBlend"] = "_srcBlendFactor";
        CC2Field["DestinationBlend"] = "_dstBlendFactor";
        CC2Field["SpriteFrame"] = "_spriteFrame";
        //#endregion
        //#region Mask
        CC2Field["AlphaThreshold"] = "_N$alphaThreshold";
        CC2Field["Inverted"] = "_N$inverted";
        //#endregion
        //#region Animation
        CC2Field["Clips"] = "_clips";
        CC2Field["DefaultClips"] = "_defaultClip";
        //#endregion
        //#region Label
        CC2Field["String"] = "_string";
        CC2Field["File"] = "_N$file";
        //#endregion
    })(CC2Field = exports.CC2Field || (exports.CC2Field = {}));
    var CC3Field;
    (function (CC3Field) {
        CC3Field["UUID"] = "__uuid__";
        CC3Field["ID"] = "__id__";
        CC3Field["Type"] = "__type__";
        CC3Field["Node"] = "node";
        CC3Field["Children"] = "_children";
        CC3Field["Components"] = "_components";
        CC3Field["PrefabInfo"] = "_prefab";
        CC3Field["CompPrefabInfo"] = "__prefab";
        CC3Field["Parent"] = "_parent";
        CC3Field["ContentSize"] = "_contentSize";
        CC3Field["AnchorPoint"] = "_anchorPoint";
        CC3Field["LocalPosition"] = "_lpos";
        CC3Field["LocalRotation"] = "_lrot";
        CC3Field["LocalScale"] = "_lscale";
        CC3Field["EulerAngles"] = "_euler";
        //#region Sprite
        CC3Field["CustomMaterials"] = "_customMaterial";
        CC3Field["SourceBlend"] = "_srcBlendFactor";
        CC3Field["DestinationBlend"] = "_dstBlendFactor";
        CC3Field["SpriteFrame"] = "_spriteFrame";
        //#endregion
        //#region Opacity
        CC3Field["Opacity"] = "_opacity";
        //#endregion
        //#region Mask
        CC3Field["AlphaThreshold"] = "_alphaThreshold";
        CC3Field["Inverted"] = "_inverted";
        //#endregion
        //#region ParticleSystem2D
        CC3Field["Materials"] = "_materials";
        //#endregion
        //#region Label
        CC3Field["String"] = "_string";
        CC3Field["Font"] = "_font";
        //#endregion
    })(CC3Field = exports.CC3Field || (exports.CC3Field = {}));
    function createCC2Object(type) {
        var obj = {}; //__id__泛該物件位於陣列中位置
        switch (type) {
            case CC2Type.Prefab:
                obj = {
                    __type__: "cc.Prefab",
                    _name: "",
                    _objFlags: 0,
                    _native: "",
                    data: {
                        __id__: 1
                    },
                    optimizationPolicy: 0,
                    asyncLoadAssets: false,
                    readonly: false
                };
                break;
            case CC2Type.Node:
                obj = {
                    __type__: "cc.Node",
                    _name: "Node",
                    _objFlags: 0,
                    _parent: null,
                    _children: [],
                    _active: true,
                    _components: [],
                    _prefab: {
                        __id__: 2
                    },
                    _opacity: 255,
                    _color: {
                        __type__: "cc.Color",
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 255
                    },
                    _contentSize: {
                        __type__: "cc.Size",
                        width: 0,
                        height: 0
                    },
                    _anchorPoint: {
                        __type__: "cc.Vec2",
                        x: 0.5,
                        y: 0.5
                    },
                    _trs: {
                        __type__: "TypedArray",
                        ctor: "Float64Array",
                        array: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
                    },
                    _eulerAngles: {
                        __type__: "cc.Vec3",
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    _skewX: 0,
                    _skewY: 0,
                    _is3DNode: false,
                    _groupIndex: 0,
                    groupIndex: 0,
                    _id: ""
                };
                break;
            case CC2Type.Color:
                obj = {
                    __type__: "cc.Color",
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 255
                };
                break;
            case CC2Type.Size:
                obj = {
                    __type__: "cc.Size",
                    width: 0,
                    height: 0
                };
                break;
            case CC2Type.Vec2:
                obj = {
                    __type__: "cc.Vec2",
                    x: 0,
                    y: 0
                };
                break;
            case CC2Type.Vec3:
                obj = {
                    __type__: "cc.Vec3",
                    x: 0,
                    y: 0,
                    z: 0
                };
                break;
            case CC2Type.PrefabInfo:
                obj = {
                    __type__: "cc.PrefabInfo",
                    root: {
                        __id__: 1
                    },
                    asset: {
                        __id__: 0
                    },
                    fileId: "",
                    sync: false
                };
                break;
            case CC2Type.Button: //組件
                obj = {
                    __type__: "cc.Button",
                    _name: "",
                    _objFlags: 0,
                    node: {
                        __id__: 1
                    },
                    _enabled: true,
                    _normalMaterial: null,
                    _grayMaterial: null,
                    duration: 0.1,
                    zoomScale: 1.2,
                    clickEvents: [],
                    _N$interactable: true,
                    _N$enableAutoGrayEffect: false,
                    _N$transition: 2,
                    transition: 2,
                    _N$normalColor: {
                        __type__: "cc.Color",
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 255
                    },
                    _N$pressedColor: {
                        __type__: "cc.Color",
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 255
                    },
                    pressedColor: {
                        __type__: "cc.Color",
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 255
                    },
                    _N$hoverColor: {
                        __type__: "cc.Color",
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 255
                    },
                    hoverColor: {
                        __type__: "cc.Color",
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 255
                    },
                    _N$disabledColor: {
                        __type__: "cc.Color",
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 255
                    },
                    _N$normalSprite: {},
                    _N$pressedSprite: {},
                    pressedSprite: {},
                    _N$hoverSprite: {},
                    hoverSprite: {},
                    _N$disabledSprite: {},
                    _N$target: null,
                    _id: ""
                };
                break;
            case CC2Type.Sprite:
                obj = {
                    __type__: "cc.Sprite",
                    _name: "",
                    _objFlags: 0,
                    node: {
                        __id__: 1
                    },
                    _enabled: true,
                    _materials: [],
                    _srcBlendFactor: 770,
                    _dstBlendFactor: 771,
                    _spriteFrame: null,
                    _type: 0,
                    _sizeMode: 0,
                    _fillType: 0,
                    _fillCenter: {
                        __type__: "cc.Vec2",
                        x: 0,
                        y: 0
                    },
                    _fillStart: 0,
                    _fillRange: 0,
                    _isTrimmedMode: false,
                    _atlas: null,
                    _id: ""
                };
                break;
            case CC2Type.Animation:
                obj = {
                    __type__: "cc.Animation",
                    _name: "",
                    _objFlags: 0,
                    node: {
                        __id__: 1
                    },
                    _enabled: true,
                    _defaultClip: null,
                    _clips: [],
                    playOnLoad: false,
                    _id: ""
                };
                break;
            case CC2Type.AnimationClip:
                obj = {
                    __type__: "cc.AnimationClip",
                    _name: "",
                    _objFlags: 0,
                    _native: "",
                    _duration: 0,
                    sample: 60,
                    speed: 1,
                    wrapMode: 2,
                    curveData: {
                        paths: {}
                    },
                    events: []
                };
                break;
            case CC2Type.Mask:
                obj = {
                    __type__: "cc.Mask",
                    _name: "",
                    _objFlags: 0,
                    node: {
                        __id__: 1
                    },
                    _enabled: true,
                    _materials: [],
                    _spriteFrame: null,
                    _type: 0,
                    _segments: 64,
                    _N$alphaThreshold: 0.1,
                    _N$inverted: false,
                    _id: ""
                };
                break;
            case CC2Type.Label:
                obj = {
                    __type__: "cc.Label",
                    _name: "",
                    _objFlags: 0,
                    node: {
                        __id__: 1
                    },
                    _enabled: true,
                    _materials: [],
                    _srcBlendFactor: 770,
                    _dstBlendFactor: 771,
                    _string: "",
                    _N$string: "",
                    _fontSize: 14,
                    _lineHeight: 40,
                    _enableWrapText: true,
                    _N$file: null,
                    _isSystemFontUsed: true,
                    _spacingX: 0,
                    _batchAsBitmap: false,
                    _styleFlags: 0,
                    _underlineHeight: 0,
                    _N$horizontalAlign: 0,
                    _N$verticalAlign: 0,
                    _N$fontFamily: "Arial",
                    _N$overflow: 0,
                    _N$cacheMode: 0,
                    _id: ""
                };
                break;
            case CC2Type.ParticleSystem:
                obj = {
                    __type__: "cc.ParticleSystem",
                    _name: "",
                    _objFlags: 0,
                    node: {
                        __id__: 2
                    },
                    _enabled: true,
                    _materials: [],
                    _srcBlendFactor: 770,
                    _dstBlendFactor: 771,
                    _custom: false,
                    _file: null,
                    _spriteFrame: null,
                    _texture: null,
                    _stopped: true,
                    playOnLoad: true,
                    autoRemoveOnFinish: false,
                    totalParticles: 150,
                    duration: -1,
                    emissionRate: 10,
                    life: 1,
                    lifeVar: 0,
                    _startColor: {
                        __type__: "cc.Color",
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 255
                    },
                    _startColorVar: {
                        __type__: "cc.Color",
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0
                    },
                    _endColor: {
                        __type__: "cc.Color",
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 0
                    },
                    _endColorVar: {
                        __type__: "cc.Color",
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0
                    },
                    angle: 90,
                    angleVar: 20,
                    startSize: 50,
                    startSizeVar: 0,
                    endSize: 0,
                    endSizeVar: 0,
                    startSpin: 0,
                    startSpinVar: 0,
                    endSpin: 0,
                    endSpinVar: 0,
                    sourcePos: {
                        __type__: "cc.Vec2",
                        x: 0,
                        y: 0
                    },
                    posVar: {
                        __type__: "cc.Vec2",
                        x: 0,
                        y: 0
                    },
                    _positionType: 0,
                    positionType: 0,
                    emitterMode: 0,
                    gravity: {
                        __type__: "cc.Vec2",
                        x: 0,
                        y: 0
                    },
                    speed: 180,
                    speedVar: 50,
                    tangentialAccel: 80,
                    tangentialAccelVar: 0,
                    radialAccel: 0,
                    radialAccelVar: 0,
                    rotationIsDir: false,
                    startRadius: 0,
                    startRadiusVar: 0,
                    endRadius: 0,
                    endRadiusVar: 0,
                    rotatePerS: 0,
                    rotatePerSVar: 0,
                    _N$preview: true,
                    _id: ""
                };
                break;
        }
        return obj;
    }
    exports.createCC2Object = createCC2Object;
});
define("common/CC3DAnimation", ["require", "exports", "common/defineType"], function (require, exports, defineType_1) {
    "use strict";
    exports.__esModule = true;
    exports.CC3DAnimation = exports.TrackType = exports.AnimationPathType = void 0;
    var AnimationPathType;
    (function (AnimationPathType) {
        AnimationPathType["Node"] = "cc.animation.HierarchyPath";
        AnimationPathType["Component"] = "cc.animation.ComponentPath";
    })(AnimationPathType = exports.AnimationPathType || (exports.AnimationPathType = {}));
    var Field;
    (function (Field) {
        Field["Binding"] = "_binding";
        Field["Channel"] = "_channel";
        Field["ChannelList"] = "_channels";
        Field["Path"] = "path";
        Field["PathList"] = "_paths";
        Field["Curve"] = "_curve";
    })(Field || (Field = {}));
    var TrackType;
    (function (TrackType) {
        TrackType["RealTrack"] = "cc.animation.RealTrack";
        TrackType["ColorTrack"] = "cc.animation.ColorTrack";
        TrackType["VectorTrack"] = "cc.animation.VectorTrack";
        TrackType["SizeTrack"] = "cc.animation.SizeTrack";
        TrackType["QuatTrack"] = "cc.animation.QuatTrack";
        TrackType["ObjectTrack"] = "cc.animation.ObjectTrack";
    })(TrackType = exports.TrackType || (exports.TrackType = {}));
    var CC3DAnimation = /** @class */ (function () {
        function CC3DAnimation(items) {
            var e_1, _a;
            var index = 0;
            this.Element = new Map();
            try {
                for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var iterator = items_1_1.value;
                    this.Element.set(index, iterator);
                    iterator.__metaId = index;
                    index++;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1["return"])) _a.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        CC3DAnimation.prototype.GetAnimationClip = function () {
            return this.Element.get(0);
        };
        CC3DAnimation.prototype.ParserTrack = function (id) {
            var item = this.Element.get(id);
            if (item === undefined) {
                return undefined;
            }
            var type = item[defineType_1.CC3Field.Type];
            switch (type) {
                case TrackType.RealTrack:
                case TrackType.ObjectTrack:
                    return this.parserRealTrack(item);
                case TrackType.ColorTrack:
                case TrackType.VectorTrack:
                case TrackType.SizeTrack:
                    return this.parserMultiChannelTrack(item);
                default:
                    return undefined;
            }
        };
        CC3DAnimation.prototype.defaultTrack = function (track) {
            var result = {
                TrackType: track[defineType_1.CC3Field.Type],
                Path: new Map(),
                PathField: "",
                Channel: []
            };
            return result;
        };
        CC3DAnimation.prototype.parserRealTrack = function (item) {
            var result = this.defaultTrack(item);
            var bindingTrack = item[Field.Binding];
            this.bindPath(bindingTrack, result);
            var channelTrack = item[Field.Channel];
            this.bindChannel(channelTrack, result);
            return result;
        };
        CC3DAnimation.prototype.parserMultiChannelTrack = function (item) {
            var result = this.defaultTrack(item);
            var bindingTrack = item[Field.Binding];
            this.bindPath(bindingTrack, result);
            var channelTrack = item[Field.ChannelList];
            this.bindChannelList(channelTrack, result);
            return result;
        };
        CC3DAnimation.prototype.bindPath = function (trackItem, result) {
            var e_2, _a;
            var pathId = trackItem[Field.Path];
            // console.log("PathId",pathId)
            var trackPath = this.Element.get(pathId.__id__);
            try {
                // console.log("trackPath",trackPath)
                for (var _b = __values(trackPath[Field.PathList]), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var iterator = _c.value;
                    // console.log("Path Info", iterator);
                    if (iterator[defineType_1.CC3Field.ID] === undefined) {
                        result.PathField = iterator;
                    }
                    else {
                        var pathId_1 = iterator.__id__;
                        var pathInfo = this.Element.get(pathId_1);
                        // console.log("AnimationPath", pathInfo);
                        result.Path.set(pathInfo.__type__, pathInfo);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        CC3DAnimation.prototype.bindChannel = function (channelTrace, result) {
            // console.log("channelTrace", channelTrace);
            var channel = this.Element.get(channelTrace.__id__);
            // console.log("channel", channel);
            var curve = this.Element.get(channel[Field.Curve].__id__);
            result.Channel.push(curve);
        };
        CC3DAnimation.prototype.bindChannelList = function (channelTrace, result) {
            var e_3, _a;
            try {
                for (var channelTrace_1 = __values(channelTrace), channelTrace_1_1 = channelTrace_1.next(); !channelTrace_1_1.done; channelTrace_1_1 = channelTrace_1.next()) {
                    var iterator = channelTrace_1_1.value;
                    this.bindChannel(iterator, result);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (channelTrace_1_1 && !channelTrace_1_1.done && (_a = channelTrace_1["return"])) _a.call(channelTrace_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        return CC3DAnimation;
    }());
    exports.CC3DAnimation = CC3DAnimation;
});
define("common/CC2DAnimation", ["require", "exports", "common/CC3DAnimation", "common/defineType"], function (require, exports, CC3DAnimation_1, defineType_2) {
    "use strict";
    exports.__esModule = true;
    exports.CC2DAnimation = void 0;
    function zipValue(type, sources) {
        var _a, e_4, _b;
        var length = sources.map(function (o) { return o.values.length; });
        var allEqual = length.every(function (v) { return v === length[0]; });
        if (!allEqual) {
            console.log("zip source not same size");
            return [];
        }
        var result = [];
        for (var index = 0; index < length[0]; index++) {
            result.push((_a = {}, _a[defineType_2.CC2Field.Type] = type, _a));
        }
        try {
            for (var sources_1 = __values(sources), sources_1_1 = sources_1.next(); !sources_1_1.done; sources_1_1 = sources_1.next()) {
                var iterator = sources_1_1.value;
                for (var index = 0; index < iterator.values.length; index++) {
                    var element = iterator.values[index];
                    result[index][iterator.field] = element;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (sources_1_1 && !sources_1_1.done && (_b = sources_1["return"])) _b.call(sources_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return result;
    }
    var CC2DAnimation = /** @class */ (function () {
        function CC2DAnimation(anim) {
            this.animation = (0, defineType_2.createCC2Object)(defineType_2.CC2Type.AnimationClip);
            this.sourceAnimation = anim;
        }
        CC2DAnimation.prototype.ParserAnimation = function () {
            this.pastDefault();
            this.convertTrack();
            return this.animation;
        };
        CC2DAnimation.prototype.pastDefault = function () {
            var clip = this.sourceAnimation.GetAnimationClip();
            for (var key in this.animation) {
                var source = clip[key];
                if (source !== undefined) {
                    this.animation[key] = source;
                }
            }
        };
        CC2DAnimation.prototype.convertTrack = function () {
            var e_5, _a;
            var clip = this.sourceAnimation.GetAnimationClip();
            var paths = this.animation.curveData.paths;
            try {
                for (var _b = __values(clip._tracks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var iterator = _c.value;
                    var id = iterator.__id__;
                    var track = this.sourceAnimation.ParserTrack(id);
                    if (track === undefined) {
                        continue;
                    }
                    this.convertPath(track, paths);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            // console.log(this.animation);
        };
        CC2DAnimation.prototype.convertPath = function (clip, root) {
            var _a, _b;
            var nodePath = (_a = clip.Path.get(CC3DAnimation_1.AnimationPathType.Node)) === null || _a === void 0 ? void 0 : _a.path;
            var componentPath = (_b = clip.Path.get(CC3DAnimation_1.AnimationPathType.Component)) === null || _b === void 0 ? void 0 : _b.component;
            // console.log("convert path", nodePath, componentPath);
            if (nodePath === undefined) {
                console.log("not find node path");
                return;
            }
            var info = root[nodePath];
            if (info === undefined) {
                info = {};
                root[nodePath] = info;
            }
            var field = this.getComponentsFieldPath(componentPath, clip.PathField);
            var node = info[field];
            if (node === undefined) {
                node = {};
                info[field] = node;
            }
            switch (clip.TrackType) {
                case CC3DAnimation_1.TrackType.RealTrack:
                    this.fillRealTrack(clip, node);
                    break;
                case CC3DAnimation_1.TrackType.VectorTrack:
                    this.fillVectorTrack(clip, node);
                    break;
                case CC3DAnimation_1.TrackType.SizeTrack:
                    this.fillContentSizeTrack(clip, node);
                    break;
                case CC3DAnimation_1.TrackType.ColorTrack:
                    this.fillColorTrack(clip, node);
                    break;
                case CC3DAnimation_1.TrackType.ObjectTrack:
                    this.fillObjectTrack(clip, node);
                    break;
            }
        };
        CC2DAnimation.prototype.getComponentsFieldPath = function (type, property) {
            var typeMap = [
                type,
                property
            ];
            switch (typeMap) {
                case [defineType_2.CC3Type.Sprite, "color"]:
                    return "comps";
                default:
                    return "props";
            }
        };
        CC2DAnimation.prototype.fillRealTrack = function (track, node) {
            var e_6, _a;
            var field = track.PathField;
            var result = [];
            try {
                for (var _b = __values(track.Channel), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var ch = _c.value;
                    result = this.bindRealCurve(ch);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
            node[field] = result;
        };
        CC2DAnimation.prototype.fillVectorTrack = function (track, node) {
            var field = track.PathField;
            switch (field) {
                case "anchorPoint":
                    this.fillAnchorTrack(track, node);
                    break;
                case "eulerAngles":
                    this.fillRotateTrack(track, node);
                    break;
            }
        };
        CC2DAnimation.prototype.fillAnchorTrack = function (track, node) {
            var channel = track.Channel;
            if (channel.length < 2) {
                console.log("channel length not enough");
                return;
            }
            node.anchorX = this.bindRealCurve(channel[0]);
            node.anchorY = this.bindRealCurve(channel[1]);
        };
        CC2DAnimation.prototype.fillRotateTrack = function (track, node) {
            var z = this.bindRealCurve(track.Channel[2]);
            node.angle = z;
        };
        CC2DAnimation.prototype.fillContentSizeTrack = function (track, node) {
            var channel = track.Channel;
            if (channel.length < 2) {
                console.log("channel length not enough");
                return;
            }
            // console.log("anchor channels", channel);
            node.width = this.bindRealCurve(channel[0]);
            node.height = this.bindRealCurve(channel[1]);
        };
        CC2DAnimation.prototype.fillColorTrack = function (track, node) {
            var channel = track.Channel;
            var r = this.bindRealCurve(channel[0]);
            var g = this.bindRealCurve(channel[1]);
            var b = this.bindRealCurve(channel[2]);
            var a = this.bindRealCurve(channel[3]);
            var pickValue = function (val) { return val.value; };
            var zips = zipValue(defineType_2.CC2Type.Color, [
                {
                    field: "r",
                    values: r.map(pickValue)
                },
                {
                    field: "g",
                    values: g.map(pickValue)
                },
                {
                    field: "b",
                    values: b.map(pickValue)
                },
                {
                    field: "a",
                    values: a.map(pickValue)
                },
            ]);
            var times = r.map(function (o) { return o.frame; });
            var result = [];
            for (var index = 0; index < times.length; index++) {
                var time = times[index];
                var value = zips[index];
                result.push({
                    frame: time,
                    value: value
                });
            }
            return result;
        };
        CC2DAnimation.prototype.fillObjectTrack = function (track, node) {
            var field = track.PathField;
            var channel = track.Channel[0];
            var result = this.bindObjectCurve(channel);
            node[field] = result;
        };
        CC2DAnimation.prototype.bindRealCurve = function (curve) {
            var result = [];
            for (var index = 0; index < curve._times.length; index++) {
                var time = curve._times[index];
                var value = curve._values[index].value;
                result.push({
                    frame: time,
                    value: value
                });
            }
            return result;
        };
        CC2DAnimation.prototype.bindObjectCurve = function (curve) {
            var result = [];
            for (var index = 0; index < curve._times.length; index++) {
                var time = curve._times[index];
                var value = curve._values[index];
                result.push({
                    frame: time,
                    value: value
                });
            }
            return result;
        };
        return CC2DAnimation;
    }());
    exports.CC2DAnimation = CC2DAnimation;
});
define("FileConvert/Animation", ["require", "exports", "common/CC3DAnimation", "common/CC2DAnimation"], function (require, exports, CC3DAnimation_2, CC2DAnimation_1) {
    "use strict";
    exports.__esModule = true;
    exports.AnimationConvert = void 0;
    var AnimationConvert = /** @class */ (function () {
        function AnimationConvert(node) {
            var source = node;
            this.anim3D = new CC3DAnimation_2.CC3DAnimation(source);
        }
        AnimationConvert.prototype.Convert = function () {
            var anim2D = new CC2DAnimation_1.CC2DAnimation(this.anim3D);
            var result = anim2D.ParserAnimation();
            // let js = JSON.stringify(result, undefined, "");
            // console.log(js);
            return result;
        };
        return AnimationConvert;
    }());
    exports.AnimationConvert = AnimationConvert;
});
// let file = "/mnt/c/Users/chengrongsun/.CocosCreator/extensions/creator-transfer/demo/v3/New AnimationClip.anim";
// let anim = new Animation(file);
// anim.WalkTrace();
// prefab.TestWalk();
// prefab.WalkNode(null);
define("MetaConvert/SpriteFrameMapping", ["require", "exports", "crypto"], function (require, exports, crypto_1) {
    "use strict";
    exports.__esModule = true;
    exports.SpriteFrameMapping = void 0;
    var SpriteFrameMapping = /** @class */ (function () {
        function SpriteFrameMapping() {
            this.SourceToTarget = new Map();
            this.TargetToSource = new Map();
        }
        SpriteFrameMapping.prototype.GenNewUUID = function (source) {
            var result = this.SourceToTarget.get(source);
            if (result !== undefined) {
                return result;
            }
            result = (0, crypto_1.randomUUID)();
            this.SourceToTarget.set(source, result);
            this.TargetToSource.set(result, source);
            console.log("set uuid ".concat(source, " to ").concat(result));
            return result;
        };
        SpriteFrameMapping.prototype.GetOldUUID = function (uuid) {
            var newUUid = this.TargetToSource.get(uuid);
            if (newUUid === undefined) {
                console.error("not find Old uuid", uuid);
                return "";
            }
            return newUUid;
        };
        return SpriteFrameMapping;
    }());
    exports.SpriteFrameMapping = SpriteFrameMapping;
});
define("common/RawPrefab", ["require", "exports", "crypto"], function (require, exports, crypto_2) {
    "use strict";
    exports.__esModule = true;
    exports.RawPrefab = void 0;
    var RawPrefab = /** @class */ (function () {
        function RawPrefab() {
            this.Source = {};
            this.tempQueue = [];
            this.prefabId = "";
        }
        RawPrefab.Create = function (items) {
            var e_7, _a;
            var index = 0;
            var result = new RawPrefab();
            try {
                for (var items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                    var iterator = items_2_1.value;
                    var key = index;
                    result.Source[key] = iterator;
                    iterator.__metaId = key;
                    index++;
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (items_2_1 && !items_2_1.done && (_a = items_2["return"])) _a.call(items_2);
                }
                finally { if (e_7) throw e_7.error; }
            }
            result.prefabId = (0, crypto_2.randomUUID)();
            return result;
        };
        // push and return Next Index
        RawPrefab.prototype.PushItem = function (item) {
            var key = Object.keys(this.Source).length;
            this.Source[key] = item;
            item.__metaId = key;
            console.log("Do PushItem", item.__type__, key);
            return key;
        };
        RawPrefab.prototype.PushQueue = function (item) {
            this.tempQueue.push(item);
        };
        RawPrefab.prototype.EnumerableNode = function (callback) {
            var prefab = this.Source[0];
            var firstNodeIndex = prefab.data.__id__;
            var firstNode = this.Source[firstNodeIndex];
            this.enumerableNode(firstNode, callback);
        };
        RawPrefab.prototype.enumerableNode = function (node, callback) {
            var e_8, _a;
            var next = callback(node);
            if (!next) {
                return false;
            }
            var children = this.GetChildren(node);
            try {
                for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                    var iterator = children_1_1.value;
                    next = this.enumerableNode(iterator, callback);
                    if (!next) {
                        return false;
                    }
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (children_1_1 && !children_1_1.done && (_a = children_1["return"])) _a.call(children_1);
                }
                finally { if (e_8) throw e_8.error; }
            }
            return true;
        };
        RawPrefab.prototype.GetChildren = function (item) {
            var e_9, _a;
            var result = [];
            var children = item._children;
            if (children) {
                try {
                    for (var children_2 = __values(children), children_2_1 = children_2.next(); !children_2_1.done; children_2_1 = children_2.next()) {
                        var iterator = children_2_1.value;
                        var index = iterator.__id__;
                        result.push(this.Source[index]);
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (children_2_1 && !children_2_1.done && (_a = children_2["return"])) _a.call(children_2);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
            }
            return result;
        };
        RawPrefab.prototype.GetComponents = function (item) {
            var e_10, _a;
            var result = [];
            var components = item._components;
            if (components) {
                try {
                    for (var components_1 = __values(components), components_1_1 = components_1.next(); !components_1_1.done; components_1_1 = components_1.next()) {
                        var iterator = components_1_1.value;
                        var index = iterator.__id__;
                        var com = this.Source[index];
                        result.push(com);
                    }
                }
                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                finally {
                    try {
                        if (components_1_1 && !components_1_1.done && (_a = components_1["return"])) _a.call(components_1);
                    }
                    finally { if (e_10) throw e_10.error; }
                }
            }
            return result;
        };
        RawPrefab.prototype.FindComponents = function (node, type) {
            var e_11, _a;
            var comp = this.GetComponents(node);
            try {
                for (var comp_1 = __values(comp), comp_1_1 = comp_1.next(); !comp_1_1.done; comp_1_1 = comp_1.next()) {
                    var iterator = comp_1_1.value;
                    if (iterator.__type__ === type) {
                        return iterator;
                    }
                }
            }
            catch (e_11_1) { e_11 = { error: e_11_1 }; }
            finally {
                try {
                    if (comp_1_1 && !comp_1_1.done && (_a = comp_1["return"])) _a.call(comp_1);
                }
                finally { if (e_11) throw e_11.error; }
            }
            return undefined;
        };
        RawPrefab.prototype.GetPrefab = function (item) {
            var prefab = item.__prefab;
            if (prefab) {
                var index = prefab.__id__;
                return this.Source[index];
            }
            return undefined;
        };
        RawPrefab.prototype.WalkInfo = function (callback) {
            var keys = Object.keys(this);
            for (var key in keys) {
                if (Object.prototype.hasOwnProperty.call(this, key)) {
                    var element = this.Source[key];
                    var next = callback(element);
                    if (!next) {
                        return;
                    }
                }
            }
        };
        RawPrefab.prototype.PackagePrefab = function () {
            var result = [];
            for (var key in this.Source) {
                var element = this.Source[key];
                delete element.__metaId;
                result.push(element);
            }
            return result;
        };
        RawPrefab.prototype.GetPrefabInfo = function () {
            return {
                __type__: "cc.PrefabInfo",
                root: {
                    __id__: 1
                },
                asset: {
                    __id__: this.prefabId
                },
                fileId: "",
                sync: false,
                __metaId: 0
            };
        };
        return RawPrefab;
    }());
    exports.RawPrefab = RawPrefab;
});
define("common/PrefabTree", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.PrefabTree = void 0;
    var PrefabTree = /** @class */ (function () {
        function PrefabTree(info) {
            this.RawInfo = info;
            this.Children = [];
            this.Component = [];
        }
        PrefabTree.Create = function (raw) {
            var root = new PrefabTree(raw.Source[0]);
            var result = root;
            var firstNodeIndex = raw.Source[0].data.__id__;
            var firstNode = raw.Source[firstNodeIndex];
            var firstTree = new PrefabTree(firstNode);
            root.Children.push(firstTree);
            this.fillChildren(raw, firstTree);
            return result;
        };
        PrefabTree.fillChildren = function (raw, tree) {
            var e_12, _a;
            var children = raw.GetChildren(tree.RawInfo);
            try {
                for (var children_3 = __values(children), children_3_1 = children_3.next(); !children_3_1.done; children_3_1 = children_3.next()) {
                    var iterator = children_3_1.value;
                    var subPrefab = new PrefabTree(iterator);
                    tree.Children.push(subPrefab);
                    this.fillChildren(raw, subPrefab);
                }
            }
            catch (e_12_1) { e_12 = { error: e_12_1 }; }
            finally {
                try {
                    if (children_3_1 && !children_3_1.done && (_a = children_3["return"])) _a.call(children_3);
                }
                finally { if (e_12) throw e_12.error; }
            }
            var com = raw.GetComponents(tree.RawInfo);
            tree.Component = com;
        };
        return PrefabTree;
    }());
    exports.PrefabTree = PrefabTree;
});
define("PrefabConvert/BaseConvert", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.BaseConvert = void 0;
    var BaseConvert = /** @class */ (function () {
        function BaseConvert(arg) {
            this.spriteFrameConvert = arg.convert;
            this.sourcePrefab = arg.source;
            this.destPrefab = arg.dest;
        }
        BaseConvert.prototype.Downgrade = function (source, list) {
            var result = this.GetDefault2D();
            list.PushItem(result);
            for (var key in result) {
                if (key.startsWith("__")) {
                    continue;
                }
                var element = result[key];
                var converted = this.HandlerDowngrade(key, element, result, source);
                if (converted) {
                    continue;
                }
                var sourceValue = source[key];
                if (sourceValue !== undefined) {
                    result[key] = sourceValue;
                }
            }
            return result;
        };
        return BaseConvert;
    }());
    exports.BaseConvert = BaseConvert;
});
define("PrefabConvert/Animation", ["require", "exports", "common/defineType", "PrefabConvert/BaseConvert"], function (require, exports, defineType_3, BaseConvert_1) {
    "use strict";
    exports.__esModule = true;
    exports.Animation = void 0;
    var Animation = /** @class */ (function (_super) {
        __extends(Animation, _super);
        function Animation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Animation.prototype.GetDefault2D = function () {
            return (0, defineType_3.createCC2Object)(defineType_3.CC2Type.Animation);
        };
        Animation.prototype.HandlerDowngrade = function (key, element, dest, source) {
            switch (key) {
                case defineType_3.CC2Field.Node:
                    break;
                default:
                    break;
            }
            return false;
        };
        return Animation;
    }(BaseConvert_1.BaseConvert));
    exports.Animation = Animation;
});
define("common/diff", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.initDiff = exports.UUID_SKIP_EFFECT = exports.UUID_UI_2D_TO_3D = exports.UUID_3D_TO_2D = exports.UUID_2D_TO_3D = void 0;
    exports.UUID_2D_TO_3D = new Map();
    exports.UUID_3D_TO_2D = new Map();
    exports.UUID_UI_2D_TO_3D = new Map();
    exports.UUID_SKIP_EFFECT = new Map();
    function initDiff() {
        // builtin-standard.effect -> builtin-phong.effect
        exports.UUID_2D_TO_3D.set('abc2cb62-7852-4525-a90d-d474487b88f2', '1baf0fc9-befa-459c-8bdd-af1a450a0319');
        // builtin-2d-graphics -> builtin-graphics
        exports.UUID_2D_TO_3D.set('30682f87-9f0d-4f17-8a44-72863791461b', '1c02ae6f-4492-4915-b8f8-7492a3b1e4cd');
        // builtin-2d-spine -> builtin-spine
        exports.UUID_2D_TO_3D.set('0e93aeaa-0b53-4e40-b8e0-6268b4e07bd7', '7383da24-dfde-48e8-82a7-a6e8a56f285c');
        // builtin-2d-sprite -> builtin-sprite
        exports.UUID_2D_TO_3D.set('2874f8dd-416c-4440-81b7-555975426e93', '60f7195c-ec2a-45eb-ba94-8955f60e81d0');
        // builtin-3d-particle -> builtin-particle
        exports.UUID_2D_TO_3D.set('829a282c-b049-4019-bd38-5ace8d8a6417', 'd1346436-ac96-4271-b863-1f4fdead95b0');
        // builtin-3d-trail -> builtin-particle-trail
        exports.UUID_2D_TO_3D.set('2a7c0036-e0b3-4fe1-8998-89a54b8a2bec', '17debcc3-0a6b-4b8a-b00b-dc58b885581e');
        // builtin-clear-stencil
        exports.UUID_2D_TO_3D.set('cf7e0bb8-a81c-44a9-ad79-d28d43991032', '810e96e4-e456-4468-9b59-f4e8f39732c0');
        // builtin-unlit
        exports.UUID_2D_TO_3D.set('6d91e591-4ce0-465c-809f-610ec95019c6', 'a3cd009f-0ab0-420d-9278-b9fdab939bbc');
        // builtin-toon
        exports.UUID_2D_TO_3D.set('e2f00085-c597-422d-9759-52c360279106', 'a7612b54-35e3-4238-a1a9-4a7b54635839');
        // builtin-2d-sprite -> ui-sprite-material
        exports.UUID_2D_TO_3D.set('eca5d2f2-8ef6-41c2-bbe6-f9c79d09c432', 'fda095cb-831d-4601-ad94-846013963de8');
        // builtin-2d-label -> ui-sprite-material
        exports.UUID_2D_TO_3D.set('e02d87d4-e599-4d16-8001-e14891ac6506', 'fda095cb-831d-4601-ad94-846013963de8');
        // builtin-2d-gray-sprite -> ui-sprite-material
        exports.UUID_2D_TO_3D.set('3a7bb79f-32fd-422e-ada2-96f518fed422', 'fda095cb-831d-4601-ad94-846013963de8');
        // primitives
        exports.UUID_2D_TO_3D.set('954fec8b-cd16-4bb9-a3b7-7719660e7558', '1263d74c-8167-4928-91a6-4e2672411f47');
        // box.mesh
        exports.UUID_2D_TO_3D.set('046f172c-1574-488b-bbb8-6415a9adb96d', '1263d74c-8167-4928-91a6-4e2672411f47@a804a');
        // capsule.mesh
        exports.UUID_2D_TO_3D.set('83f5eff8-3385-4f95-9b76-8da0aa1d96cd', '1263d74c-8167-4928-91a6-4e2672411f47@801ec');
        // cone.mesh
        exports.UUID_2D_TO_3D.set('7a17de6e-227a-46b1-8009-e7157d4d3acf', '1263d74c-8167-4928-91a6-4e2672411f47@38fd2');
        // cylinder.mesh
        exports.UUID_2D_TO_3D.set('b430cea3-6ab3-4106-b073-26c698918edd', '1263d74c-8167-4928-91a6-4e2672411f47@8abdc');
        // DefaultMaterial
        exports.UUID_2D_TO_3D.set('a5849239-3ad3-41d1-8ab4-ae9fea11f97f', '1263d74c-8167-4928-91a6-4e2672411f47@ea6e2');
        // plane.mesh
        exports.UUID_2D_TO_3D.set('a1ef2fc9-9c57-418a-8f69-6bed9a7a0e7f', '1263d74c-8167-4928-91a6-4e2672411f47@2e76e');
        // primitives.prefab
        exports.UUID_2D_TO_3D.set('ab2fdde9-10c2-44e4-bfe1-fcfcc1a86aa9', '1263d74c-8167-4928-91a6-4e2672411f47@aae0f');
        // quad.mesh
        exports.UUID_2D_TO_3D.set('e93d3fa9-8c21-4375-8a21-14ba84066c77', '1263d74c-8167-4928-91a6-4e2672411f47@fc873');
        // sphere.mesh
        exports.UUID_2D_TO_3D.set('3bbdb0f6-c5f6-45de-9f33-8b5cbafb4d6d', '1263d74c-8167-4928-91a6-4e2672411f47@17020');
        // torus.mesh
        exports.UUID_2D_TO_3D.set('14c74869-bdb4-4f57-86d8-a7875de2be30', '1263d74c-8167-4928-91a6-4e2672411f47@40ece');
        exports.UUID_2D_TO_3D.forEach(function (k, v) {
            exports.UUID_3D_TO_2D.set(v, k);
        });
        exports.UUID_3D_TO_2D.set('fda095cb-831d-4601-ad94-846013963de8', 'eca5d2f2-8ef6-41c2-bbe6-f9c79d09c432');
        // box -> cube
        exports.UUID_2D_TO_3D.set('a87cc147-01b2-43f8-8e42-a7ca90b0c757', '30da77a1-f02d-4ede-aa56-403452ee7fde');
        // capsule
        exports.UUID_2D_TO_3D.set('fe1417b6-fe6b-46a4-ae7c-9fd331f33a2a', '73ce1f7f-d1f4-4942-ad93-66ca3b3041ab');
        // cone
        exports.UUID_2D_TO_3D.set('b5fc2cf2-7942-483d-be1f-bbeadc4714ad', '6350d660-e888-4acf-a552-f3b719ae9110');
        // Cylinder
        exports.UUID_2D_TO_3D.set('1c5e4038-953a-44c2-b620-0bbfc6170477', 'ab3e16f9-671e-48a7-90b7-d0884d9cbb85');
        // Plane
        exports.UUID_2D_TO_3D.set('3f376125-a699-40ca-ad05-04d662eaa1f2', '40563723-f8fc-4216-99ea-a81636435c10');
        // Quad
        exports.UUID_2D_TO_3D.set('6c9ef10d-b479-420b-bfe6-39cdda6a8ae0', '34a07346-9f62-4a84-90ae-cb83f7a426c1');
        // Sphere
        exports.UUID_2D_TO_3D.set('2d9a4b85-b0ab-4c46-84c5-18f393ab2058', '655c9519-1a37-472b-bae6-29fefac0b550');
        // Torus
        exports.UUID_2D_TO_3D.set('de510076-056b-484f-b94c-83bef217d0e1', 'd47f5d5e-c931-4ff4-987b-cc818a728b82');
        //
        exports.UUID_SKIP_EFFECT.set('abc2cb62-7852-4525-a90d-d474487b88f2', 'builtin-phong.effect');
        // 内置 UI 替换
        // default-particle.png
        exports.UUID_UI_2D_TO_3D.set('600301aa-3357-4a10-b086-84f011fa32ba', 'b5b27ab1-e740-4398-b407-848fc2b2c897');
        // default_btn_disabled.png
        exports.UUID_UI_2D_TO_3D.set('71561142-4c83-4933-afca-cb7a17f67053', '951249e0-9f16-456d-8b85-a6ca954da16b');
        // default_btn_normal.png
        exports.UUID_UI_2D_TO_3D.set('e851e89b-faa2-4484-bea6-5c01dd9f06e2', '20835ba4-6145-4fbc-a58a-051ce700aa3e');
        // default_btn_pressed.png
        exports.UUID_UI_2D_TO_3D.set('b43ff3c2-02bb-4874-81f7-f2dea6970f18', '544e49d6-3f05-4fa8-9a9e-091f98fc2ce8');
        // default_editbox_bg.png
        exports.UUID_UI_2D_TO_3D.set('edd215b9-2796-4a05-aaf5-81f96c9281ce', 'bd1bcaba-bd7d-4a71-b143-997c882383e4');
        // default_panel.png
        exports.UUID_UI_2D_TO_3D.set('d81ec8ad-247c-4e62-aa3c-d35c4193c7af', 'b730527c-3233-41c2-aaf7-7cdab58f9749');
        // default_progressbar.png
        exports.UUID_UI_2D_TO_3D.set('cfef78f1-c8df-49b7-8ed0-4c953ace2621', '24a704da-2867-446d-8d1a-5e920c75e09d');
        // default_progressbar_bg.png
        exports.UUID_UI_2D_TO_3D.set('99170b0b-d210-46f1-b213-7d9e3f23098a', '9fd900dd-221b-4f89-8f2c-fba34243c835');
        // default_radio_button_off.png
        exports.UUID_UI_2D_TO_3D.set('567dcd80-8bf4-4535-8a5a-313f1caf078a', 'f12a23c4-b924-4322-a260-3d982428f1e8');
        // default_radio_button_on.png
        exports.UUID_UI_2D_TO_3D.set('9d60001f-b5f4-4726-a629-2659e3ded0b8', '45828f25-b50d-4c52-a591-e19491a62b8c');
        // default_scrollbar.png
        exports.UUID_UI_2D_TO_3D.set('0291c134-b3da-4098-b7b5-e397edbe947f', '0da256a2-21f6-481b-90b6-d3643a09179b');
        // default_scrollbar_bg.png
        exports.UUID_UI_2D_TO_3D.set('4bab67cb-18e6-4099-b840-355f0473f890', '28765e2f-040a-4c65-8e8c-f9d0bb79d863');
        // default_scrollbar_vertical.png
        exports.UUID_UI_2D_TO_3D.set('d6d3ca85-4681-47c1-b5dd-d036a9d39ea2', 'afc47931-f066-46b0-90be-9fe61f213428');
        // default_scrollbar_vertical_bg.png
        exports.UUID_UI_2D_TO_3D.set('617323dd-11f4-4dd3-8eec-0caf6b3b45b9', 'ffb88a8f-af62-48f4-8f1d-3cb606443a43');
        // default_sprite.png
        exports.UUID_UI_2D_TO_3D.set('6e056173-d285-473c-b206-40a7fff5386e', '57520716-48c8-4a19-8acf-41c9f8777fb0');
        // default_sprite_splash.png
        exports.UUID_UI_2D_TO_3D.set('0275e94c-56a7-410f-bd1a-fc7483f7d14a', '7d8f9b89-4fd1-4c9f-a3ab-38ec7cded7ca');
        // default_toggle_checkmark.png
        exports.UUID_UI_2D_TO_3D.set('73a0903d-d80e-4e3c-aa67-f999543c08f5', '158e7e52-3220-4cd7-9694-713e0e6e8278');
        // default_toggle_disabled.png
        exports.UUID_UI_2D_TO_3D.set('c25b9d50-c8fc-4d27-beeb-6e7c1f2e5c0f', 'ca7e121b-293c-4763-829a-b7a5fa81f0d2');
        // default_toggle_normal.png
        exports.UUID_UI_2D_TO_3D.set('d29077ba-1627-4a72-9579-7b56a235340c', '11bdc4b0-64a8-4eb7-a2a7-9fb9e233e977');
        // default_toggle_pressed.png
        exports.UUID_UI_2D_TO_3D.set('b181c1e4-0a72-4a91-bfb0-ae6f36ca60bd', 'a04e994f-ee49-47b6-9d08-2f59e3773fcc');
        // atom
        exports.UUID_UI_2D_TO_3D.set('b8223619-7e38-47c4-841f-9160c232495a', '86f25d5c-9de5-454f-a5f9-ee16603e6701');
        exports.UUID_UI_2D_TO_3D.set('b2687ac4-099e-403c-a192-ff477686f4f5', '86f25d5c-9de5-454f-a5f9-ee16603e6701');
        // atom.png texture
        exports.UUID_UI_2D_TO_3D.set('8a96b965-2dc0-4e03-aa90-3b79cb93b5b4', '24c419ea-63a8-4ea1-a9d0-7fc469489bbc@6c48a');
        exports.UUID_UI_2D_TO_3D.set('d0a82d39-bede-46c4-b698-c81ff0dedfff', '24c419ea-63a8-4ea1-a9d0-7fc469489bbc@6c48a');
        // atom.png sprite-frame
        exports.UUID_UI_2D_TO_3D.set('bb42ed8e-0867-4584-ad63-b6f84f83bba8', '24c419ea-63a8-4ea1-a9d0-7fc469489bbc@f9941');
        exports.UUID_UI_2D_TO_3D.set('472df5d3-35e7-4184-9e6c-7f41bee65ee3', '24c419ea-63a8-4ea1-a9d0-7fc469489bbc@f9941');
        // 3d 粒子
        exports.UUID_UI_2D_TO_3D.set('432fa09c-cf03-4cff-a186-982604408a07', 'ea7478b0-408d-4052-b703-f0d2355e095f');
        // video
        exports.UUID_UI_2D_TO_3D.set('2be36297-9abb-4fee-8049-9ed5e271da8a', '2be36297-9abb-4fee-8049-9ed5e271da8a');
    }
    exports.initDiff = initDiff;
    initDiff();
});
define("PrefabConvert/Label", ["require", "exports", "common/defineType", "common/diff", "PrefabConvert/BaseConvert"], function (require, exports, defineType_4, diff_1, BaseConvert_2) {
    "use strict";
    exports.__esModule = true;
    exports.Label = void 0;
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        function Label() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Label.prototype.GetDefault2D = function () {
            return (0, defineType_4.createCC2Object)(defineType_4.CC2Type.Label);
        };
        Label.prototype.HandlerDowngrade = function (key, element, dest, source) {
            var _a, _b;
            switch (key) {
                case defineType_4.CC2Field.Materials:
                    var material = source[defineType_4.CC3Field.CustomMaterials];
                    if (material === undefined) {
                        return true;
                    }
                    var sourceUUID = material[defineType_4.CC3Field.UUID];
                    var uuid = diff_1.UUID_3D_TO_2D.get(sourceUUID);
                    dest[defineType_4.CC2Field.Materials] = [
                        (_a = {},
                            _a[defineType_4.CC2Field.UUID] = uuid,
                            _a)
                    ];
                    return true;
                case defineType_4.CC2Field.String:
                    var str = source._string;
                    dest[defineType_4.CC2Field.String] = str;
                    dest._N$string = str;
                    return true;
                case defineType_4.CC2Field.File:
                    var sourceSprite = source[defineType_4.CC3Field.Font];
                    var newId = sourceSprite.__uuid__;
                    dest[defineType_4.CC2Field.File] = (_b = {},
                        _b[defineType_4.CC2Field.UUID] = newId,
                        _b);
                    return true;
                case defineType_4.CC2Field.SourceBlend:
                case defineType_4.CC2Field.DestinationBlend:
                    return true;
            }
            return false;
        };
        return Label;
    }(BaseConvert_2.BaseConvert));
    exports.Label = Label;
});
define("PrefabConvert/Mask", ["require", "exports", "common/defineType", "PrefabConvert/BaseConvert"], function (require, exports, defineType_5, BaseConvert_3) {
    "use strict";
    exports.__esModule = true;
    exports.Mask = void 0;
    var Mask = /** @class */ (function (_super) {
        __extends(Mask, _super);
        function Mask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Mask.prototype.GetDefault2D = function () {
            return (0, defineType_5.createCC2Object)(defineType_5.CC2Type.Mask);
        };
        Mask.prototype.HandlerDowngrade = function (key, element, dest, source) {
            switch (key) {
                case defineType_5.CC2Field.AlphaThreshold:
                    {
                        var alpha = source[defineType_5.CC3Field.AlphaThreshold];
                        if (alpha === undefined) {
                            break;
                        }
                        dest[defineType_5.CC2Field.AlphaThreshold] = alpha;
                        break;
                    }
                case defineType_5.CC2Field.Inverted:
                    {
                        var inverted = source[defineType_5.CC3Field.Inverted];
                        if (inverted === undefined) {
                            break;
                        }
                        dest[defineType_5.CC2Field.Inverted] = inverted;
                        break;
                    }
                default:
                    return false;
            }
            return true;
        };
        return Mask;
    }(BaseConvert_3.BaseConvert));
    exports.Mask = Mask;
});
define("PrefabConvert/Node", ["require", "exports", "common/defineType", "PrefabConvert/BaseConvert"], function (require, exports, defineType_6, BaseConvert_4) {
    "use strict";
    exports.__esModule = true;
    exports.Node = void 0;
    var Node = /** @class */ (function (_super) {
        __extends(Node, _super);
        function Node() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Node.prototype.GetDefault2D = function () {
            return (0, defineType_6.createCC2Object)(defineType_6.CC2Type.Node);
        };
        Node.prototype.HandlerDowngrade = function (key, element, dest, source) {
            switch (key) {
                case defineType_6.CC2Field.Children:
                case defineType_6.CC2Field.Components:
                    {
                        dest[key] = [];
                        break;
                    }
                case defineType_6.CC2Field.Parent:
                    {
                        dest[key] = null;
                        break;
                    }
                case defineType_6.CC2Field.ContentSize:
                    {
                        var trans = this.sourcePrefab.FindComponents(source, defineType_6.CC3Type.UITransform);
                        if (trans === undefined) {
                            break;
                        }
                        var size = trans[defineType_6.CC3Field.ContentSize];
                        element.width = size.width;
                        element.height = size.height;
                        break;
                    }
                case defineType_6.CC2Field.AnchorPoint:
                    {
                        var trans = this.sourcePrefab.FindComponents(source, defineType_6.CC3Type.UITransform);
                        if (trans === undefined) {
                            break;
                        }
                        var size = trans[defineType_6.CC3Field.AnchorPoint];
                        element.x = size.x;
                        element.y = size.y;
                        break;
                    }
                case defineType_6.CC2Field.Transform:
                    {
                        var transform = element.array;
                        var pos = source[defineType_6.CC3Field.LocalPosition];
                        transform[0] = pos.x;
                        transform[1] = pos.y;
                        transform[2] = pos.z;
                        var quat = source[defineType_6.CC3Field.LocalRotation];
                        transform[3] = quat.x;
                        transform[4] = quat.y;
                        transform[5] = quat.z;
                        transform[6] = quat.w;
                        var scale = source[defineType_6.CC3Field.LocalScale];
                        transform[7] = scale.x;
                        transform[8] = scale.y;
                        transform[9] = scale.z;
                        break;
                    }
                case defineType_6.CC2Field.EulerAngles:
                    {
                        var euler = source[defineType_6.CC3Field.EulerAngles];
                        element.x = euler.x;
                        element.y = euler.y;
                        element.z = euler.z;
                        break;
                    }
                case defineType_6.CC2Field.Color:
                    {
                        var opacity = this.sourcePrefab.FindComponents(source, defineType_6.CC3Type.Opacity);
                        if (opacity === undefined) {
                            break;
                        }
                        element.a = opacity[defineType_6.CC3Field.Opacity];
                        break;
                    }
                case defineType_6.CC2Field.PrefabInfo:
                    {
                        break;
                    }
                default:
                    return false;
            }
            return true;
        };
        return Node;
    }(BaseConvert_4.BaseConvert));
    exports.Node = Node;
});
define("PrefabConvert/ParticleSystem", ["require", "exports", "common/defineType", "common/diff", "PrefabConvert/BaseConvert"], function (require, exports, defineType_7, diff_2, BaseConvert_5) {
    "use strict";
    exports.__esModule = true;
    exports.ParticleSystem = void 0;
    var ParticleSystem = /** @class */ (function (_super) {
        __extends(ParticleSystem, _super);
        function ParticleSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ParticleSystem.prototype.GetDefault2D = function () {
            return (0, defineType_7.createCC2Object)(defineType_7.CC2Type.ParticleSystem);
        };
        ParticleSystem.prototype.HandlerDowngrade = function (key, element, dest, source) {
            switch (key) {
                case defineType_7.CC2Field.Materials:
                    var materials = source[defineType_7.CC3Field.Materials];
                    if (materials === undefined) {
                        return true;
                    }
                    var newIds = materials.map(function (idTable) {
                        var uuid = idTable[defineType_7.CC3Field.UUID];
                        return diff_2.UUID_3D_TO_2D.get(uuid);
                    });
                    dest[defineType_7.CC2Field.Materials] = newIds;
                    break;
                default:
                    return false;
            }
            return true;
        };
        return ParticleSystem;
    }(BaseConvert_5.BaseConvert));
    exports.ParticleSystem = ParticleSystem;
});
define("PrefabConvert/Prefab", ["require", "exports", "common/defineType", "PrefabConvert/BaseConvert"], function (require, exports, defineType_8, BaseConvert_6) {
    "use strict";
    exports.__esModule = true;
    exports.Prefab = void 0;
    var Prefab = /** @class */ (function (_super) {
        __extends(Prefab, _super);
        function Prefab() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Prefab.prototype.GetDefault2D = function () {
            return (0, defineType_8.createCC2Object)(defineType_8.CC2Type.Prefab);
        };
        Prefab.prototype.HandlerDowngrade = function (key, element, dest, source) {
            return false;
        };
        return Prefab;
    }(BaseConvert_6.BaseConvert));
    exports.Prefab = Prefab;
});
define("PrefabConvert/PrefabInfo", ["require", "exports", "common/defineType", "PrefabConvert/BaseConvert"], function (require, exports, defineType_9, BaseConvert_7) {
    "use strict";
    exports.__esModule = true;
    exports.PrefabInfo = void 0;
    var PrefabInfo = /** @class */ (function (_super) {
        __extends(PrefabInfo, _super);
        function PrefabInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PrefabInfo.prototype.GetDefault2D = function () {
            return (0, defineType_9.createCC2Object)(defineType_9.CC2Type.PrefabInfo);
        };
        PrefabInfo.prototype.HandlerDowngrade = function (key, element, dest, source) {
            return false;
        };
        return PrefabInfo;
    }(BaseConvert_7.BaseConvert));
    exports.PrefabInfo = PrefabInfo;
});
define("PrefabConvert/Sprite", ["require", "exports", "common/defineType", "common/diff", "PrefabConvert/BaseConvert"], function (require, exports, defineType_10, diff_3, BaseConvert_8) {
    "use strict";
    exports.__esModule = true;
    exports.Sprite = void 0;
    var Sprite = /** @class */ (function (_super) {
        __extends(Sprite, _super);
        function Sprite() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Sprite.prototype.GetDefault2D = function () {
            return (0, defineType_10.createCC2Object)(defineType_10.CC2Type.Sprite);
        };
        Sprite.prototype.HandlerDowngrade = function (key, element, dest, source) {
            var _a, _b;
            switch (key) {
                case defineType_10.CC2Field.Materials:
                    {
                        var material = source[defineType_10.CC3Field.CustomMaterials];
                        if (material === undefined) {
                            return true;
                        }
                        var sourceUUID = material[defineType_10.CC3Field.UUID];
                        var uuid = diff_3.UUID_3D_TO_2D.get(sourceUUID);
                        dest[defineType_10.CC2Field.Materials] = [
                            (_a = {},
                                _a[defineType_10.CC2Field.UUID] = uuid,
                                _a)
                        ];
                        return true;
                    }
                case defineType_10.CC2Field.SpriteFrame:
                    {
                        var sourceSprite = source[defineType_10.CC3Field.SpriteFrame];
                        var newId = this.spriteFrameConvert.GenNewUUID(sourceSprite.__uuid__);
                        dest[defineType_10.CC2Field.SpriteFrame] = (_b = {},
                            _b[defineType_10.CC2Field.UUID] = newId,
                            _b);
                        return true;
                    }
                case defineType_10.CC2Field.SourceBlend:
                case defineType_10.CC2Field.DestinationBlend:
                    return true;
                default:
                    return false;
            }
        };
        return Sprite;
    }(BaseConvert_8.BaseConvert));
    exports.Sprite = Sprite;
});
define("PrefabConvert/ConvertFactory", ["require", "exports", "common/defineType", "PrefabConvert/Animation", "PrefabConvert/Label", "PrefabConvert/Mask", "PrefabConvert/Node", "PrefabConvert/ParticleSystem", "PrefabConvert/Prefab", "PrefabConvert/PrefabInfo", "PrefabConvert/Sprite"], function (require, exports, defineType_11, Animation_1, Label_1, Mask_1, Node_1, ParticleSystem_1, Prefab_1, PrefabInfo_1, Sprite_1) {
    "use strict";
    exports.__esModule = true;
    exports.ConvertFactory = void 0;
    function ConvertFactory(args) {
        var node = args.node;
        switch (node.__type__) {
            case defineType_11.CC3Type.Node:
                return new Node_1.Node(args);
            case defineType_11.CC3Type.Prefab:
                return new Prefab_1.Prefab(args);
            case defineType_11.CC3Type.Sprite:
                return new Sprite_1.Sprite(args);
            case defineType_11.CC3Type.Mask:
                return new Mask_1.Mask(args);
            case defineType_11.CC3Type.PrefabInfo:
                return new PrefabInfo_1.PrefabInfo(args);
            case defineType_11.CC3Type.ParticleSystem:
                return new ParticleSystem_1.ParticleSystem(args);
            case defineType_11.CC3Type.Animation:
                return new Animation_1.Animation(args);
            case defineType_11.CC3Type.Label:
                return new Label_1.Label(args);
            default:
                return undefined;
        }
    }
    exports.ConvertFactory = ConvertFactory;
});
define("FileConvert/PrefabConvert", ["require", "exports", "common/defineType", "common/PrefabTree", "common/RawPrefab", "PrefabConvert/ConvertFactory"], function (require, exports, defineType_12, PrefabTree_1, RawPrefab_1, ConvertFactory_1) {
    "use strict";
    exports.__esModule = true;
    exports.PrefabConvert = void 0;
    var PrefabConvert = /** @class */ (function () {
        function PrefabConvert(node, sprite) {
            this.sprite = sprite;
            var source = node;
            this.sourcePrefab = RawPrefab_1.RawPrefab.Create(source);
            this.tree = PrefabTree_1.PrefabTree.Create(this.sourcePrefab);
            this.destPrefab = RawPrefab_1.RawPrefab.Create([]);
        }
        PrefabConvert.prototype.Convert = function () {
            this.walk(this.tree);
            return this.destPrefab.PackagePrefab();
        };
        PrefabConvert.prototype.walk = function (tree) {
            var e_13, _a, e_14, _b;
            var newNode;
            var source = tree.RawInfo;
            var args = {
                node: source,
                source: this.sourcePrefab,
                dest: this.destPrefab,
                convert: this.sprite
            };
            var convert = (0, ConvertFactory_1.ConvertFactory)(args);
            if (convert !== undefined) {
                newNode = convert.Downgrade(source, this.destPrefab);
                // console.log(newNode);
                tree.NewRawInfo = newNode;
            }
            try {
                for (var _c = __values(tree.Children), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var iterator = _d.value;
                    var node = this.walk(iterator);
                    if (tree.RawInfo.__type__ === defineType_12.CC2Type.Prefab) {
                        continue;
                    }
                    node._parent = { __id__: newNode.__metaId };
                    newNode._children = newNode._children || [];
                    newNode._children.push({ __id__: node.__metaId });
                }
            }
            catch (e_13_1) { e_13 = { error: e_13_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
                }
                finally { if (e_13) throw e_13.error; }
            }
            var newComp = [];
            try {
                for (var _e = __values(tree.Component), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var source_1 = _f.value;
                    // console.log("Walk", source.__type__, tree.RawInfo._name);
                    args.node = source_1;
                    var convert_1 = (0, ConvertFactory_1.ConvertFactory)(args);
                    if (convert_1 !== undefined) {
                        var result = convert_1.Downgrade(source_1, this.destPrefab);
                        result[defineType_12.CC2Field.Node] = {
                            __id__: newNode.__metaId
                        };
                        // console.log(result);
                        newComp.push(result);
                    }
                }
            }
            catch (e_14_1) { e_14 = { error: e_14_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                }
                finally { if (e_14) throw e_14.error; }
            }
            if (newNode.__type__ === defineType_12.CC2Type.Node) {
                var compIds = newComp.map(function (o) { return { __id__: o.__metaId }; });
                newNode[defineType_12.CC2Field.Components] = compIds;
                var prefab = this.destPrefab.GetPrefabInfo();
                this.destPrefab.PushItem(prefab);
                newNode[defineType_12.CC2Field.PrefabInfo] = prefab.__metaId;
            }
            // console.log("target ids", compIds);
            // let ct = newComp.map((o) => o.__type__);
            // console.log("target type", ct);
            return newNode;
        };
        return PrefabConvert;
    }());
    exports.PrefabConvert = PrefabConvert;
});
define("FileConvert/FileConvertFactory", ["require", "exports", "FileConvert/Animation", "FileConvert/PrefabConvert"], function (require, exports, Animation_2, PrefabConvert_1) {
    "use strict";
    exports.__esModule = true;
    exports.GetFileConvert = exports.FileType = void 0;
    var FileType;
    (function (FileType) {
        FileType[FileType["Unknown"] = 0] = "Unknown";
        FileType[FileType["Prefab"] = 1] = "Prefab";
        FileType[FileType["Animation"] = 2] = "Animation";
        FileType[FileType["Texture"] = 3] = "Texture";
        FileType[FileType["Particle"] = 4] = "Particle";
        FileType[FileType["Fnt"] = 5] = "Fnt";
    })(FileType = exports.FileType || (exports.FileType = {}));
    var convert = [
        [FileType.Unknown, "Unknown"],
        [FileType.Prefab, "\.prefab"],
        [FileType.Animation, "\.anim"],
        [FileType.Texture, "\.png|\.jpg"],
        [FileType.Particle, "\.plist"],
        [FileType.Fnt, "\.fnt"],
    ];
    function getType(path) {
        var e_15, _a;
        try {
            for (var convert_2 = __values(convert), convert_2_1 = convert_2.next(); !convert_2_1.done; convert_2_1 = convert_2.next()) {
                var iterator = convert_2_1.value;
                var regex = iterator[1];
                if (path.match(regex)) {
                    return iterator[0];
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (convert_2_1 && !convert_2_1.done && (_a = convert_2["return"])) _a.call(convert_2);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return FileType.Unknown;
    }
    function GetFileConvert(path, node, sprite) {
        var type = getType(path);
        switch (type) {
            case FileType.Unknown:
                return undefined;
            case FileType.Prefab:
                return new PrefabConvert_1.PrefabConvert(node, sprite);
            case FileType.Animation:
                return new Animation_2.AnimationConvert(node);
        }
    }
    exports.GetFileConvert = GetFileConvert;
});
define("common/util", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.MergeField = void 0;
    var ignoreMergeField = new Set([
        "ver",
        "importer"
    ]);
    function MergeField(source, target) {
        for (var key in target) {
            if (ignoreMergeField.has(key)) {
                continue;
            }
            var element = source[key];
            if (element === undefined) {
                continue;
            }
            target[key] = element;
        }
    }
    exports.MergeField = MergeField;
});
define("MetaConvert/DefaultMetaConvert", ["require", "exports", "common/util"], function (require, exports, util_1) {
    "use strict";
    exports.__esModule = true;
    exports.DefaultMetaConvert = void 0;
    function defaultMeta(root) {
        return {
            ver: "1.0.0",
            uuid: root.uuid,
            importer: "json",
            subMetas: {}
        };
    }
    var DefaultMetaConvert = /** @class */ (function () {
        function DefaultMetaConvert(rawSpriteMeta) {
            this.rawMeta = rawSpriteMeta;
        }
        DefaultMetaConvert.prototype.ConvertMeta = function () {
            if (this.convertedMeta !== undefined) {
                return this.convertedMeta;
            }
            var result = defaultMeta(this.rawMeta);
            (0, util_1.MergeField)(this.rawMeta, result);
            this.convertedMeta = result;
            return this.convertedMeta;
        };
        return DefaultMetaConvert;
    }());
    exports.DefaultMetaConvert = DefaultMetaConvert;
});
define("MetaConvert/FntMetaConvert", ["require", "exports", "common/util"], function (require, exports, util_2) {
    "use strict";
    exports.__esModule = true;
    exports.FntMetaConvert = void 0;
    function defaultMeta(root) {
        return {
            ver: "1.0.0",
            uuid: root.uuid,
            importer: "bitmap-font",
            textureUuid: "",
            fontSize: 0,
            subMetas: {}
        };
    }
    var FntMetaConvert = /** @class */ (function () {
        function FntMetaConvert(rawSpriteMeta) {
            this.rawMeta = rawSpriteMeta;
        }
        FntMetaConvert.prototype.ConvertMeta = function () {
            if (this.convertedMeta !== undefined) {
                return this.convertedMeta;
            }
            var result = defaultMeta(this.rawMeta);
            (0, util_2.MergeField)(this.rawMeta, result);
            result.fontSize = this.rawMeta.userData.fontSize;
            result.textureUuid = this.rawMeta.userData.textureUuid;
            this.convertedMeta = result;
            return this.convertedMeta;
        };
        return FntMetaConvert;
    }());
    exports.FntMetaConvert = FntMetaConvert;
});
define("MetaConvert/PrefabMetaConvert", ["require", "exports", "common/util"], function (require, exports, util_3) {
    "use strict";
    exports.__esModule = true;
    exports.PrefabMetaConvert = void 0;
    function defaultMeta(node) {
        return {
            ver: "1.0.0",
            importer: "prefab",
            imported: true,
            uuid: node.uuid,
            files: [".json"],
            subMetas: {}
        };
    }
    var PrefabMetaConvert = /** @class */ (function () {
        function PrefabMetaConvert(rawSpriteMeta) {
            this.rawMeta = rawSpriteMeta;
        }
        PrefabMetaConvert.prototype.ConvertMeta = function () {
            if (this.convertedMeta !== undefined) {
                return this.convertedMeta;
            }
            var result = defaultMeta(this.rawMeta);
            (0, util_3.MergeField)(this.rawMeta, result);
            this.convertedMeta = result;
            return this.convertedMeta;
        };
        return PrefabMetaConvert;
    }());
    exports.PrefabMetaConvert = PrefabMetaConvert;
});
define("MetaConvert/SpriteMetaConvert", ["require", "exports", "common/util"], function (require, exports, util_4) {
    "use strict";
    exports.__esModule = true;
    exports.SpriteMetaConvert = void 0;
    function defaultSubMeta(root) {
        return {
            ver: "1.0.0",
            uuid: "",
            importer: "sprite-frame",
            rawTextureUuid: root.uuid,
            trimType: "auto",
            trimThreshold: 0,
            rotated: false,
            offsetX: 0,
            offsetY: 0,
            trimX: 0,
            trimY: 0,
            width: 0,
            height: 0,
            rawWidth: 0,
            rawHeight: 0,
            borderTop: 0,
            borderBottom: 0,
            borderLeft: 0,
            borderRight: 0,
            subMetas: {}
        };
    }
    function defaultMeta(root) {
        var _a, _b, _c, _d;
        // 轉成 json 直接匹配字串
        var json = JSON.stringify(root);
        var width = Number.parseInt((_b = (_a = new RegExp("\"rawWidth\":([0-9]+)").exec(json)) === null || _a === void 0 ? void 0 : _a.at(1)) !== null && _b !== void 0 ? _b : "0");
        var height = Number.parseInt((_d = (_c = new RegExp("\"rawHeight\":([0-9]+)").exec(json)) === null || _c === void 0 ? void 0 : _c.at(1)) !== null && _d !== void 0 ? _d : "0");
        return {
            ver: "1.0.0",
            uuid: root.uuid,
            importer: "texture",
            type: "sprite",
            wrapMode: "clamp",
            filterMode: "bilinear",
            premultiplyAlpha: false,
            genMipmaps: false,
            packable: true,
            width: width,
            height: height
        };
    }
    var SpriteMetaConvert = /** @class */ (function () {
        function SpriteMetaConvert(rawMeta, convert) {
            this.rawMeta = rawMeta;
            this.convert = convert;
        }
        SpriteMetaConvert.prototype.ConvertMeta = function () {
            if (this.convertedMeta !== undefined) {
                return this.convertedMeta;
            }
            var result = defaultMeta(this.rawMeta);
            (0, util_4.MergeField)(this.rawMeta, result);
            this.convertSubMeta(result);
            this.convertedMeta = result;
            return this.convertedMeta;
        };
        SpriteMetaConvert.prototype.convertSubMeta = function (result) {
            result.subMetas = {};
            var spriteSubMeta;
            for (var key in this.rawMeta.subMetas) {
                var element = this.rawMeta.subMetas[key];
                if (element.importer === "sprite-frame") {
                    spriteSubMeta = element;
                }
            }
            if (spriteSubMeta === undefined) {
                return;
            }
            var name = spriteSubMeta.displayName;
            var subMeta = defaultSubMeta(this.rawMeta);
            result.subMetas[name] = subMeta;
            var oldUUID = spriteSubMeta.uuid;
            var newUUID = this.convert.GenNewUUID(oldUUID);
            subMeta.uuid = newUUID;
            (0, util_4.MergeField)(spriteSubMeta.userData, subMeta);
        };
        return SpriteMetaConvert;
    }());
    exports.SpriteMetaConvert = SpriteMetaConvert;
});
// let meta = "E:\\Creator\\TestV36\\assets\\ArtTemp\\Img\\FX_Fire_01.png.meta";
// let obj = readJsonSync(meta);
// let temp = new SpriteMetaConvert(obj);
// let res = temp.ConvertMeta();
// console.log(JSON.stringify(res));
define("MetaConvert/MetaConvertFactory", ["require", "exports", "MetaConvert/DefaultMetaConvert", "MetaConvert/FntMetaConvert", "MetaConvert/PrefabMetaConvert", "MetaConvert/SpriteMetaConvert"], function (require, exports, DefaultMetaConvert_1, FntMetaConvert_1, PrefabMetaConvert_1, SpriteMetaConvert_1) {
    "use strict";
    exports.__esModule = true;
    exports.GetMetaConvertFactory = void 0;
    function GetMetaConvertFactory(root, spriteConvert) {
        switch (root.importer) {
            case "image":
                return new SpriteMetaConvert_1.SpriteMetaConvert(root, spriteConvert);
            case "bitmap-font":
                return new FntMetaConvert_1.FntMetaConvert(root);
            case "prefab":
                return new PrefabMetaConvert_1.PrefabMetaConvert(root);
            default:
                return new DefaultMetaConvert_1.DefaultMetaConvert(root);
        }
    }
    exports.GetMetaConvertFactory = GetMetaConvertFactory;
});
define("common/math", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.QuatToEuler = exports.EulerToQuat = void 0;
    function EulerToQuat(euler) {
        var Rx = euler.x;
        var Ry = euler.y;
        var Rz = euler.z;
        var quat = {
            x: (Math.cos(Rx / 2) * Math.cos(Ry / 2) * Math.cos(Rz / 2) + Math.sin(Rx / 2) * Math.sin(Ry / 2) * Math.sin(Rz / 2)),
            y: (Math.sin(Rx / 2) * Math.cos(Ry / 2) * Math.cos(Rz / 2) - Math.cos(Rx / 2) * Math.sin(Ry / 2) * Math.sin(Rz / 2)),
            z: (Math.cos(Rx / 2) * Math.sin(Ry / 2) * Math.cos(Rz / 2) + Math.sin(Rx / 2) * Math.cos(Ry / 2) * Math.sin(Rz / 2)),
            w: (Math.cos(Rx / 2) * Math.cos(Ry / 2) * Math.sin(Rz / 2) - Math.sin(Rx / 2) * Math.sin(Ry / 2) * Math.cos(Rz / 2))
        };
        return (quat);
    }
    exports.EulerToQuat = EulerToQuat;
    function QuatToEuler(quat) {
        var q0 = quat.x;
        var q1 = quat.y;
        var q2 = quat.z;
        var q3 = quat.w;
        return {
            x: Math.atan2(2 * (q0 * q1 + q2 * q3), 1 - (2 * (q1 * q1 + q2 * q2))),
            y: Math.asin(2 * (q0 * q2 - q3 * q1)),
            z: Math.atan2(2 * (q0 * q3 + q1 * q2), 1 - (2 * (q2 * q2 + q3 * q3)))
        };
    }
    exports.QuatToEuler = QuatToEuler;
});
define("importer/define", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.ImportMode = void 0;
    var ImportMode;
    (function (ImportMode) {
        ImportMode[ImportMode["Import"] = 0] = "Import";
        ImportMode[ImportMode["Replace"] = 1] = "Replace";
        // Merge, // 僅進行屬性更新
    })(ImportMode = exports.ImportMode || (exports.ImportMode = {}));
});
define("importer/ResourceMapping", ["require", "exports", "crypto", "fs", "fs-extra", "glob", "path", "importer/define", "MetaConvert/MetaConvertFactory", "MetaConvert/SpriteFrameMapping", "FileConvert/FileConvertFactory"], function (require, exports, crypto_3, fs_1, fs_extra_1, glob_1, path_1, define_1, MetaConvertFactory_1, SpriteFrameMapping_1, FileConvertFactory_1) {
    "use strict";
    exports.__esModule = true;
    exports.ResourceMapping = exports.ResourceState = void 0;
    path_1 = __importDefault(path_1);
    var ResourceState = /** @class */ (function () {
        function ResourceState() {
            this.UUIDToMetaPath = new Map();
            this.UUIDToFilePath = new Map();
            this.PathToUUID = new Map();
            this.FileUUIDMap = new Map(); // UUID : Loaded Object
            this.MetaUUIDMap = new Map(); // UUID : Loaded Object
        }
        ResourceState.prototype.CloneState = function () {
            var result = new ResourceState();
            result.UUIDToMetaPath = new Map(this.UUIDToMetaPath);
            result.UUIDToFilePath = new Map(this.UUIDToFilePath);
            result.PathToUUID = new Map(this.PathToUUID);
            result.FileUUIDMap = new Map(this.FileUUIDMap);
            result.MetaUUIDMap = new Map(this.MetaUUIDMap);
            return result;
        };
        return ResourceState;
    }());
    exports.ResourceState = ResourceState;
    var ResourceMapping = /** @class */ (function (_super) {
        __extends(ResourceMapping, _super);
        function ResourceMapping() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rootPath = "";
            _this.SpriteFrameMapping = new SpriteFrameMapping_1.SpriteFrameMapping();
            return _this;
        }
        ResourceMapping.prototype.PreloadFile = function (root) {
            this.rootPath = root;
            this.loadFiles();
        };
        ResourceMapping.prototype.loadFiles = function () {
            var e_16, _a, e_17, _b;
            var _c;
            var files = glob_1.glob.sync("**/*", {
                cwd: this.rootPath
            });
            var regex = new RegExp("(.+)\.meta$");
            var metaFiles = files.filter(function (o) { return regex.test(o); });
            var normalFiles = files.filter(function (o) { return !regex.test(o); });
            try {
                for (var metaFiles_1 = __values(metaFiles), metaFiles_1_1 = metaFiles_1.next(); !metaFiles_1_1.done; metaFiles_1_1 = metaFiles_1.next()) {
                    var metaPath = metaFiles_1_1.value;
                    var absPath = path_1["default"].join(this.rootPath, metaPath);
                    var meta = (0, fs_extra_1.readJsonSync)(absPath);
                    var uuid = meta.uuid;
                    this.UUIDToMetaPath.set(uuid, metaPath);
                    this.MetaUUIDMap.set(uuid, meta);
                    var filePath = (_c = regex.exec(metaPath)) === null || _c === void 0 ? void 0 : _c.at(1);
                    if (filePath !== undefined) {
                        this.PathToUUID.set(filePath, uuid);
                    }
                }
            }
            catch (e_16_1) { e_16 = { error: e_16_1 }; }
            finally {
                try {
                    if (metaFiles_1_1 && !metaFiles_1_1.done && (_a = metaFiles_1["return"])) _a.call(metaFiles_1);
                }
                finally { if (e_16) throw e_16.error; }
            }
            try {
                for (var normalFiles_1 = __values(normalFiles), normalFiles_1_1 = normalFiles_1.next(); !normalFiles_1_1.done; normalFiles_1_1 = normalFiles_1.next()) {
                    var filePath = normalFiles_1_1.value;
                    var absPath = path_1["default"].join(this.rootPath, filePath);
                    if ((0, fs_1.lstatSync)(absPath).isDirectory()) {
                        continue;
                    }
                    var buffer = (0, fs_1.readFileSync)(absPath);
                    var data = void 0;
                    try {
                        var js = buffer.toString();
                        data = JSON.parse(js);
                    }
                    catch (e) {
                        data = buffer;
                    }
                    var uuid = this.PathToUUID.get(filePath);
                    if (uuid === undefined) {
                        uuid = (0, crypto_3.randomUUID)();
                    }
                    this.UUIDToFilePath.set(uuid, filePath);
                    this.FileUUIDMap.set(uuid, data);
                }
            }
            catch (e_17_1) { e_17 = { error: e_17_1 }; }
            finally {
                try {
                    if (normalFiles_1_1 && !normalFiles_1_1.done && (_b = normalFiles_1["return"])) _b.call(normalFiles_1);
                }
                finally { if (e_17) throw e_17.error; }
            }
        };
        /**
         * Meta 匯入應優先於檔案匯入，僅導入 Meta 映射
         * @param root 當前本地跟目錄
         * @param source 匯入資源資訊
         * @param mode 導入資源的方式
         */
        ResourceMapping.prototype.MergeMeta = function (source, mode) {
            var _this = this;
            var filter = function (uuid, meta) { return true; };
            switch (mode) {
                case define_1.ImportMode.Import:
                    filter = function (uuid, meta) {
                        var localFile = _this.MetaUUIDMap.get(uuid);
                        return localFile === undefined;
                    };
                    break;
                default:
                    break;
            }
            source.MetaUUIDMap.forEach(function (meta, uuid) {
                if (filter(meta, uuid)) {
                    _this.importMeta(uuid, meta, source);
                }
            });
        };
        ResourceMapping.prototype.importMeta = function (uuid, meta, source) {
            var convert = (0, MetaConvertFactory_1.GetMetaConvertFactory)(meta, this.SpriteFrameMapping);
            var newMeta = convert.ConvertMeta();
            this.MetaUUIDMap.set(uuid, newMeta);
            var metaPath = source.UUIDToMetaPath.get(uuid);
            this.UUIDToMetaPath.set(uuid, metaPath);
            var filePath = metaPath === null || metaPath === void 0 ? void 0 : metaPath.replace(".meta", "");
            this.PathToUUID.set(filePath, uuid);
        };
        ResourceMapping.prototype.deleteExistFiles = function (uuid) {
            var path = this.UUIDToFilePath.get(uuid);
            this.UUIDToFilePath["delete"](uuid);
            this.UUIDToMetaPath["delete"](uuid);
            this.FileUUIDMap["delete"](uuid);
            this.MetaUUIDMap["delete"](uuid);
            if (path !== undefined) {
                this.PathToUUID["delete"](path);
            }
        };
        /**
         * 本地資源匯入流程
         * @param source
         * @param mode
         */
        ResourceMapping.prototype.MergeFiles = function (source, mode) {
            switch (mode) {
                case define_1.ImportMode.Import:
                    this.mergeNotExistFiles(source);
                    break;
                case define_1.ImportMode.Replace:
                    this.mergeAllFiles(source);
                    break;
                default:
                    break;
            }
        };
        ResourceMapping.prototype.mergeNotExistFiles = function (source) {
            var e_18, _a;
            try {
                // 使用匯入檔案目錄遍歷、若本地沒有執行匯入
                for (var _b = __values(source.FileUUIDMap), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var iterator = _c.value;
                    var importUUID = iterator[0];
                    var localFile = this.FileUUIDMap.get(importUUID);
                    if (localFile !== undefined) {
                        return;
                    }
                    this.importFile(importUUID, source);
                }
            }
            catch (e_18_1) { e_18 = { error: e_18_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_18) throw e_18.error; }
            }
        };
        ResourceMapping.prototype.mergeAllFiles = function (source) {
            var e_19, _a;
            try {
                // 匯入所有檔案
                for (var _b = __values(source.FileUUIDMap), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var iterator = _c.value;
                    var importUUID = iterator[0];
                    this.importFile(importUUID, source);
                }
            }
            catch (e_19_1) { e_19 = { error: e_19_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_19) throw e_19.error; }
            }
        };
        ResourceMapping.prototype.importFile = function (importUUID, source) {
            var sourceFile = source.FileUUIDMap.get(importUUID);
            var sourcePath = source.UUIDToFilePath.get(importUUID);
            var convert = (0, FileConvertFactory_1.GetFileConvert)(sourcePath, sourceFile, this.SpriteFrameMapping);
            var result;
            if (convert === undefined) {
                result = sourceFile;
            }
            else {
                result = convert.Convert();
            }
            this.FileUUIDMap.set(importUUID, result);
            this.UUIDToFilePath.set(importUUID, sourcePath);
        };
        ResourceMapping.prototype.SaveFile = function (uuid, filePath) {
            // console.log("save file", uuid, filePath);
            // return;
            var savePath = path_1["default"].join(this.rootPath, filePath);
            var file = this.FileUUIDMap.get(uuid);
            // buffer 類型的檔案直接儲存
            if (Buffer.isBuffer(file)) {
                this.saveFile(savePath, file);
            }
            else {
                var fileData = JSON.stringify(file);
                this.saveFile(savePath, fileData);
            }
            var meta = this.MetaUUIDMap.get(uuid);
            var metaJson = JSON.stringify(meta);
            savePath = savePath + ".meta";
            this.saveFile(savePath, metaJson);
        };
        ResourceMapping.prototype.saveFile = function (savePath, data) {
            var dir = path_1["default"].dirname(savePath);
            (0, fs_1.mkdirSync)(dir, { recursive: true });
            (0, fs_1.writeFileSync)(savePath, data);
        };
        return ResourceMapping;
    }(ResourceState));
    exports.ResourceMapping = ResourceMapping;
});
define("importer/import", ["require", "exports", "decompress", "importer/ResourceMapping", "path", "importer/define"], function (require, exports, decompress_1, ResourceMapping_1, path_2, define_2) {
    "use strict";
    exports.__esModule = true;
    exports.StartConvert = void 0;
    decompress_1 = __importDefault(decompress_1);
    path_2 = __importDefault(path_2);
    // 導入方法主函數
    function StartConvert(args) {
        return __awaiter(this, void 0, void 0, function () {
            var sourcePath, error_1, resource, localResource, localState, _a, _b, iterator, uuid, sourceFile, path_3;
            var e_20, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (args.TempPath === undefined) {
                            args.TempPath = path_2["default"].join(args.LocalPath);
                        }
                        sourcePath = args.SourcePath;
                        if (!sourcePath.endsWith("zip")) return [3 /*break*/, 4];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, decompress_1["default"])(sourcePath, args.TempPath)];
                    case 2:
                        _d.sent();
                        sourcePath = args.TempPath;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _d.sent();
                        console.error("unzip fail");
                        console.error(error_1);
                        return [2 /*return*/];
                    case 4:
                        resource = new ResourceMapping_1.ResourceMapping();
                        resource.PreloadFile(sourcePath);
                        localResource = new ResourceMapping_1.ResourceMapping();
                        localResource.PreloadFile(args.LocalPath);
                        localState = localResource.CloneState();
                        localResource.MergeMeta(resource, args.ImportMode);
                        localResource.MergeFiles(resource, args.ImportMode);
                        try {
                            // console.log("SourceData", resource);
                            // console.log("LocalResult", localResource);
                            for (_a = __values(localResource.FileUUIDMap), _b = _a.next(); !_b.done; _b = _a.next()) {
                                iterator = _b.value;
                                uuid = iterator[0];
                                sourceFile = localState.FileUUIDMap.get(uuid);
                                switch (args.ImportMode) {
                                    case define_2.ImportMode.Import:
                                        if (sourceFile !== undefined) {
                                            continue;
                                        }
                                        break;
                                    default:
                                        break;
                                }
                                path_3 = localResource.UUIDToFilePath.get(uuid);
                                if (path_3 === undefined) {
                                    path_3 = resource.UUIDToFilePath.get(uuid);
                                }
                                if (path_3 === undefined) {
                                    console.error("not find file path uuid :", uuid);
                                    continue;
                                }
                                localResource.SaveFile(uuid, path_3);
                            }
                        }
                        catch (e_20_1) { e_20 = { error: e_20_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                            }
                            finally { if (e_20) throw e_20.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    exports.StartConvert = StartConvert;
});
