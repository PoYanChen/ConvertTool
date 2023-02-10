export enum CC2Type {
    Prefab = "cc.Prefab",
    Node = "cc.Node",
    Color = "cc.Color",
    Size = "cc.Size",
    Vec2 = "cc.Vec2",
    Vec3 = "cc.Vec3",
    PrefabInfo = "cc.PrefabInfo",
    Button = "cc.Button",
    Sprite = "cc.Sprite",
    Animation = "cc.Animation",
    AnimationClip = "cc.AnimationClip",
    Mask = "cc.Mask",
    Label = "cc.Label",
    ParticleSystem = "cc.ParticleSystem",
}

export enum CC3Type {
    Prefab = "cc.Prefab",
    Node = "cc.Node",
    Color = "cc.Color",
    Size = "cc.Size",
    Vec2 = "cc.Vec2",
    Vec3 = "cc.Vec3",
    PrefabInfo = "cc.PrefabInfo",
    Button = "cc.Button",
    Sprite = "cc.Sprite",
    Animation = "cc.Animation",
    AnimationClip = "cc.AnimationClip",
    Mask = "cc.Mask",
    Label = "cc.Label",
    ParticleSystem = "cc.ParticleSystem2D",
    UITransform = "cc.UITransform",
    Opacity = "cc.UIOpacity"
}

export enum CC2Field {
    UUID = "__uuid__",
    ID = "__id__",
    Type = "__type__",
    Node = "node",

    //#region Node
    Children = "_children",
    Components = "_components",
    PrefabInfo = "_prefab",
    CompPrefabInfo = "__prefab",
    Parent = "_parent",
    ContentSize = "_contentSize",
    AnchorPoint = "_anchorPoint",
    Color = "_color",
    Transform = "_trs",
    EulerAngles = "_eulerAngles",
    //#endregion

    //#region Sprite
    Materials = "_materials",
    SourceBlend = "_srcBlendFactor",
    DestinationBlend = "_dstBlendFactor",
    SpriteFrame = "_spriteFrame",
    //#endregion

    //#region Mask
    AlphaThreshold = "_N$alphaThreshold",
    Inverted = "_N$inverted",
    //#endregion

    //#region Animation
    Clips = "_clips",
    DefaultClips = "_defaultClip",
    //#endregion

    //#region Label
    String = "_string",
    File = "_N$file",
    HorizontalAlign = "_N$horizontalAlign",
    VerticalAlign = "_N$verticalAlign",
    //#endregion
}

export enum CC3Field {
    UUID = "__uuid__",
    ID = "__id__",
    Type = "__type__",
    Node = "node",

    Children = "_children",
    Components = "_components",
    PrefabInfo = "_prefab",
    CompPrefabInfo = "__prefab",
    Parent = "_parent",
    ContentSize = "_contentSize",
    AnchorPoint = "_anchorPoint",
    LocalPosition = "_lpos",
    LocalRotation = "_lrot",
    LocalScale = "_lscale",
    EulerAngles = "_euler",

    //#region Sprite
    CustomMaterials = "_customMaterial",
    SourceBlend = "_srcBlendFactor",
    DestinationBlend = "_dstBlendFactor",
    SpriteFrame = "_spriteFrame",
    //#endregion

    //#region Opacity
    Opacity = "_opacity",
    //#endregion

    //#region Mask
    AlphaThreshold = "_alphaThreshold",
    Inverted = "_inverted",
    //#endregion

    //#region ParticleSystem2D
    Materials = "_materials",
    //#endregion

    //#region Label
    String = "_string",
    Font = "_font",
    HorizontalAlign = "_horizontalAlign",
    VerticalAlign = "_verticalAlign",
    //#endregion
}


export function createCC2Object(type: CC2Type): any {
    var obj = {}; //__id__泛該物件位於陣列中位置
    switch (type) {
        case CC2Type.Prefab:
            obj = {
                __type__: "cc.Prefab",
                _name: "",
                _objFlags: 0,
                _native: "",
                data: {
                    __id__: 1, //Prefab資料開始的 array index（※待查證）
                },
                optimizationPolicy: 0,
                asyncLoadAssets: false,
                readonly: false,
            };
            break;
        case CC2Type.Node:
            obj = {
                __type__: "cc.Node",
                _name: "Node",
                _objFlags: 0,
                _parent: null, //父節點 array index {__id__:}
                _children: [], //子節點 array index {__id__:}
                _active: true,
                _components: [], //掛在這個節點下的組件 array index {__id__:}
                _prefab: {
                    __id__: 2, //PrefabInfo所在 array index（※重要資訊，宣告後必須修改，否則會產生重大錯誤）
                },
                _opacity: 255,
                _color: {
                    __type__: "cc.Color",
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 255,
                },
                _contentSize: {
                    __type__: "cc.Size",
                    width: 0,
                    height: 0,
                },
                _anchorPoint: {
                    __type__: "cc.Vec2",
                    x: 0.5,
                    y: 0.5,
                },
                _trs: {
                    __type__: "TypedArray",
                    ctor: "Float64Array",
                    array: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                },
                _eulerAngles: {
                    __type__: "cc.Vec3",
                    x: 0,
                    y: 0,
                    z: 0,
                },
                _skewX: 0,
                _skewY: 0,
                _is3DNode: false,
                _groupIndex: 0,
                groupIndex: 0,
                _id: "",
            };
            break;
        case CC2Type.Color:
            obj = {
                __type__: "cc.Color",
                r: 255,
                g: 255,
                b: 255,
                a: 255,
            };
            break;
        case CC2Type.Size:
            obj = {
                __type__: "cc.Size",
                width: 0,
                height: 0,
            };
            break;
        case CC2Type.Vec2:
            obj = {
                __type__: "cc.Vec2",
                x: 0,
                y: 0,
            };
            break;
        case CC2Type.Vec3:
            obj = {
                __type__: "cc.Vec3",
                x: 0,
                y: 0,
                z: 0,
            };
            break;
        case CC2Type.PrefabInfo:
            obj = {
                __type__: "cc.PrefabInfo",
                root: {
                    __id__: 1,
                },
                asset: {
                    __id__: 0,
                },
                fileId: "", //暫時沒用處，可以不用修改
                sync: false,
            };
            break;
        case CC2Type.Button: //組件
            obj = {
                __type__: "cc.Button",
                _name: "",
                _objFlags: 0,
                node: {
                    __id__: 1, //所在節點的 array index（※重要資訊，宣告後必須修改，否則會產生重大錯誤）
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
                    a: 255,
                },
                _N$pressedColor: {
                    __type__: "cc.Color",
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 255,
                },
                pressedColor: {
                    __type__: "cc.Color",
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 255,
                },
                _N$hoverColor: {
                    __type__: "cc.Color",
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 255,
                },
                hoverColor: {
                    __type__: "cc.Color",
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 255,
                },
                _N$disabledColor: {
                    __type__: "cc.Color",
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 255,
                },
                _N$normalSprite: {},
                _N$pressedSprite: {},
                pressedSprite: {},
                _N$hoverSprite: {},
                hoverSprite: {},
                _N$disabledSprite: {},
                _N$target: null,
                _id: "",
            };
            break;
        case CC2Type.Sprite:
            obj = {
                __type__: "cc.Sprite",
                _name: "",
                _objFlags: 0,
                node: {
                    __id__: 1, //所屬節點編號（※重要資訊，宣告後必須修改，否則會產生重大錯誤）
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
                    y: 0,
                },
                _fillStart: 0,
                _fillRange: 0,
                _isTrimmedMode: false,
                _atlas: null,
                _id: "",
            };
            break;
        case CC2Type.Animation:
            obj = {
                __type__: "cc.Animation",
                _name: "",
                _objFlags: 0,
                node: {
                    __id__: 1, //（※重要資訊，宣告後必須修改，否則會產生重大錯誤）
                },
                _enabled: true,
                _defaultClip: null,
                _clips: [],
                playOnLoad: false,
                _id: "",
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
                events: [],
            };
            break;
        case CC2Type.Mask:
            obj = {
                __type__: "cc.Mask",
                _name: "",
                _objFlags: 0,
                node: {
                    __id__: 1, //※重要資訊，宣告後必須修改，否則會產生重大錯誤
                },
                _enabled: true,
                _materials: [],
                _spriteFrame: null,
                _type: 0,
                _segments: 64,
                _N$alphaThreshold: 0.1,
                _N$inverted: false,
                _id: "",
            };
            break;
        case CC2Type.Label:
            obj = {
                __type__: "cc.Label",
                _name: "",
                _objFlags: 0,
                node: {
                    __id__: 1, //（※重要資訊，宣告後必須修改，否則會產生重大錯誤）
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
                _id: "",
            };
            break;
        case CC2Type.ParticleSystem:
            obj = {
                __type__: "cc.ParticleSystem",
                _name: "",
                _objFlags: 0,
                node: {
                    __id__: 2,
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
                    a: 255,
                },
                _startColorVar: {
                    __type__: "cc.Color",
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                },
                _endColor: {
                    __type__: "cc.Color",
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 0,
                },
                _endColorVar: {
                    __type__: "cc.Color",
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
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
                    y: 0,
                },
                posVar: {
                    __type__: "cc.Vec2",
                    x: 0,
                    y: 0,
                },
                _positionType: 0,
                positionType: 0,
                emitterMode: 0,
                gravity: {
                    __type__: "cc.Vec2",
                    x: 0,
                    y: 0,
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
                _id: "",
            };
            break;
    }
    return obj;
}
