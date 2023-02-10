import { MergeField } from "../common/util";
import { ISpriteMetaMap } from "./SpriteFrameMapping";

function defaultSubMeta(root: any) {
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

function defaultMeta(root: any) {
    // 轉成 json 直接匹配字串
    let json = JSON.stringify(root);
    let width = Number.parseInt(new RegExp("\"rawWidth\":([0-9]+)").exec(json)?.[1] ?? "0");
    let height = Number.parseInt(new RegExp("\"rawHeight\":([0-9]+)").exec(json)?.[1] ?? "0");
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
        height: height,
    } as any;
}


export class SpriteMetaConvert {

    private convertedMeta: any;
    constructor(
        private rawMeta: any,
        private convert: ISpriteMetaMap,
    ) {

    }

    public ConvertMeta() {

        if (this.convertedMeta !== undefined) {
            return this.convertedMeta;
        }

        let result = defaultMeta(this.rawMeta);
        MergeField(this.rawMeta, result);

        this.convertSubMeta(result);
        this.convertedMeta = result;
        return this.convertedMeta;
    }

    private convertSubMeta(result: any) {
        result.subMetas = {};

        let spriteSubMeta;
        for (const key in this.rawMeta.subMetas) {
            const element = this.rawMeta.subMetas[key];
            if (element.importer === "sprite-frame") {
                spriteSubMeta = element;
            }
        }

        if (spriteSubMeta === undefined) {
            return;
        }

        let name = spriteSubMeta.displayName;
        let subMeta = defaultSubMeta(this.rawMeta);
        result.subMetas[name] = subMeta;

        let oldUUID = spriteSubMeta.uuid;
        let newUUID = this.convert.GenNewUUID(oldUUID);
        subMeta.uuid = newUUID;

        MergeField(spriteSubMeta.userData, subMeta);
    }
}

// let meta = "E:\\Creator\\TestV36\\assets\\ArtTemp\\Img\\FX_Fire_01.png.meta";
// let obj = readJsonSync(meta);

// let temp = new SpriteMetaConvert(obj);
// let res = temp.ConvertMeta();
// console.log(JSON.stringify(res));