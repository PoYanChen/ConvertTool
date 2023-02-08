import { CC2Field } from "../common/defineType";
import { PrefabTree } from "../common/PrefabTree";
import { RawPrefab } from "../common/RawPrefab";
import { ISpriteMetaMap } from "../MetaConvert/SpriteFrameMapping";
import { IConvertArg } from "../PrefabConvert/BaseConvert";
import { ConvertFactory } from "../PrefabConvert/ConvertFactory";

export class PrefabConvert {
    private sourcePrefab: RawPrefab;
    private destPrefab: RawPrefab;
    private tree: PrefabTree;
    private sprite: ISpriteMetaMap;

    constructor(node: any, sprite: ISpriteMetaMap) {
        this.sprite = sprite;
        let source = node as any[];
        this.sourcePrefab = RawPrefab.Create(source);
        this.tree = PrefabTree.Create(this.sourcePrefab);

        this.destPrefab = RawPrefab.Create([]);
    }

    public Convert(): any {
        this.walk(this.tree);
        return this.destPrefab.PackagePrefab()
    }

    public walk(tree: PrefabTree) {
        let newNode;
        let source = tree.RawInfo;
        let args: IConvertArg = {
            node: source,
            source: this.sourcePrefab,
            dest: this.destPrefab,
            convert: this.sprite,
        };
        let convert = ConvertFactory(args);
        if (convert !== undefined) {
            newNode = convert.Downgrade(source);
            // console.log(newNode);
            tree.NewRawInfo = newNode;
            this.destPrefab.PushItem(newNode);
        }

        let newComp = [];
        for (const source of tree.Component) {
            args.node = source;
            let convert = ConvertFactory(args);
            if (convert !== undefined) {
                let result = convert.Downgrade(source);
                result[CC2Field.Node] = {
                    [CC2Field.ID]: newNode.__metaId,
                };
                // console.log(result);
                tree.NewComponent.push(result);
                this.destPrefab.PushItem(result);

                newComp.push(result);
            }
        }

        let compIds = newComp.map(o => o.__metaId);
        newNode[CC2Field.Components] = compIds;
        // console.log("target ids", compIds);

        // let ct = newComp.map((o) => o.__type__);
        // console.log("target type", ct);

        for (const iterator of tree.Children) {
            this.walk(iterator);
        }
    }
}