import { MergeField } from "../common/util";

function defaultMeta(root: any) {
    return {
        ver: "1.0.0",
        uuid: root.uuid,
        importer: "bitmap-font",
        textureUuid: "",
        fontSize: 0,
        subMetas: {}
    };
}

export class FntMetaConvert {
    private rawMeta: any;
    private convertedMeta: any;
    constructor(rawSpriteMeta: any) {
        this.rawMeta = rawSpriteMeta;
    }

    public ConvertMeta() {

        if (this.convertedMeta !== undefined) {
            return this.convertedMeta;
        }

        let result = defaultMeta(this.rawMeta);
        MergeField(this.rawMeta, result);

        result.fontSize = this.rawMeta.userData.fontSize
        result.textureUuid = this.rawMeta.userData.textureUuid

        this.convertedMeta = result;
        return this.convertedMeta;
    }
}