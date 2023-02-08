import { ISpriteMetaMap } from "../MetaConvert/SpriteFrameMapping";
import { AnimationConvert } from "./Animation";
import { PrefabConvert } from "./PrefabConvert";

export enum FileType {
    Unknown,
    Prefab,
    Animation,
    Texture,
    Particle,
    Fnt,
}

const convert = [
    [FileType.Unknown, "Unknown"],
    [FileType.Prefab, "\.prefab"],
    [FileType.Animation, "\.anim"],
    [FileType.Texture, "\.png|\.jpg"],
    [FileType.Particle, "\.plist"],
    [FileType.Fnt, "\.fnt"],
] as [FileType, string][];

function getType(path: string): FileType {

    for (const iterator of convert) {
        let regex = iterator[1];
        if (path.match(regex)) {
            return iterator[0];
        }
    }

    return FileType.Unknown;
}

export interface IFileConvert {
    Convert(): any;
}

export function GetFileConvert(path: string, node: any, sprite: ISpriteMetaMap): IFileConvert | undefined {
    let type = getType(path);
    switch (type) {
        case FileType.Unknown:
            return undefined;
        case FileType.Prefab:
            return new PrefabConvert(node, sprite);
        case FileType.Animation:
            return new AnimationConvert(node);
    }
}