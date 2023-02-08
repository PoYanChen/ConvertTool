import { MergeField } from "../common/util";

function defaultMeta(node: any) {
    return {
        ver: "1.0.0",
        importer: "prefab",
        imported: true,
        uuid: node.uuid,
        files: [".json"],
        subMetas: {},
    };
}


export class PrefabMetaConvert {
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