import { CC3Type } from "../common/defineType";
import { Animation } from "./Animation";
import { BaseConvert, IConvertArg } from "./BaseConvert";
import { Label } from "./Label";
import { Mask } from "./Mask";
import { Node } from "./Node";
import { ParticleSystem } from "./ParticleSystem";
import { Prefab } from "./Prefab";
import { PrefabInfo } from "./PrefabInfo";
import { Sprite } from "./Sprite";

export function ConvertFactory(args: IConvertArg): BaseConvert | undefined {
    let node = args.node;
    switch (node.__type__) {
        case CC3Type.Node:
            return new Node(args);
        case CC3Type.Prefab:
            return new Prefab(args);
        case CC3Type.Sprite:
            return new Sprite(args);
        case CC3Type.Mask:
            return new Mask(args);
        case CC3Type.PrefabInfo:
            return new PrefabInfo(args);
        case CC3Type.ParticleSystem:
            return new ParticleSystem(args);
        case CC3Type.Animation:
            return new Animation(args);
        case CC3Type.Label:
            return new Label(args);
        default:
            return undefined;
    }
}