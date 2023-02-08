import { MergeField } from "../common/util";

function defaultMeta(root: any) {
    return {
        ver: "1.0.0",
        uuid: root.uuid,
        importer: "json",
        subMetas: {}
    };
}


export class DefaultMetaConvert {
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

        this.convertedMeta = result;
        return this.convertedMeta;
    }
}