import { DefaultMetaConvert } from "./DefaultMetaConvert";
import { FntMetaConvert } from "./FntMetaConvert";
import { PrefabMetaConvert } from "./PrefabMetaConvert";
import { ISpriteMetaMap } from "./SpriteFrameMapping";
import { SpriteMetaConvert } from "./SpriteMetaConvert";

export interface IMetaConvert {
    ConvertMeta(): any;
}

export function GetMetaConvertFactory(root: any, spriteConvert: ISpriteMetaMap): IMetaConvert {
    switch (root.importer) {
        case "image":
            return new SpriteMetaConvert(root, spriteConvert);
        case "bitmap-font":
            return new FntMetaConvert(root);
        case "prefab":
            return new PrefabMetaConvert(root);
        default:
            return new DefaultMetaConvert(root);
    }
}