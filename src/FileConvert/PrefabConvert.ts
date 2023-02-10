import { CC2Field, CC2Type, createCC2Object } from "../common/defineType";
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
        return this.destPrefab.PackagePrefab();
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
            newNode = convert.Downgrade(source, this.destPrefab);
            // console.log(newNode);
            tree.NewRawInfo = newNode;
        }

        for (const iterator of tree.Children) {
            let node = this.walk(iterator);
            if (tree.RawInfo.__type__ === CC2Type.Prefab) {
                continue;
            }

            node._parent = { __id__: newNode.__metaId };
            newNode._children = newNode._children || [];
            newNode._children.push({ __id__: node.__metaId });
        }

        let newComp = [];
        for (const source of tree.Component) {
            // console.log("Walk", source.__type__, tree.RawInfo._name);
            args.node = source;
            let convert = ConvertFactory(args);
            if (convert !== undefined) {
                let result = convert.Downgrade(source, this.destPrefab);
                result[CC2Field.Node] = {
                    __id__: newNode.__metaId,
                };
                // console.log(result);
                newComp.push(result);
            }
        }

        if (newNode.__type__ === CC2Type.Node) {
            let compIds = newComp.map(o => { return { __id__: o.__metaId }; });
            newNode[CC2Field.Components] = compIds;

            let prefab = this.destPrefab.GetPrefabInfo();
            this.destPrefab.PushItem(prefab);

            newNode[CC2Field.PrefabInfo] = { [CC2Field.ID]: prefab.__metaId };
        }

        // console.log("target ids", compIds);

        // let ct = newComp.map((o) => o.__type__);
        // console.log("target type", ct);

        return newNode;
    }
}