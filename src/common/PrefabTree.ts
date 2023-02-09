import { RawPrefab } from "./RawPrefab";

export class PrefabTree {
    public RawInfo: any;
    public Children: Array<PrefabTree>;
    public Component: Array<any>;
    public Parent: any;

    public NewRawInfo: any;

    constructor(info: any) {
        this.RawInfo = info;
        this.Children = [];
        this.Component = [];
    }

    public static Create(raw: RawPrefab): PrefabTree {
        let root = new PrefabTree(raw.Source[0]);
        let result = root;

        let firstNodeIndex = raw.Source[0].data.__id__;
        let firstNode = raw.Source[firstNodeIndex];
        let firstTree = new PrefabTree(firstNode);
        root.Children.push(firstTree);
        this.fillChildren(raw, firstTree);

        return result;
    }

    private static fillChildren(raw: RawPrefab, tree: PrefabTree) {
        let children = raw.GetChildren(tree.RawInfo);
        for (const iterator of children) {
            let subPrefab = new PrefabTree(iterator);
            tree.Children.push(subPrefab);
            this.fillChildren(raw, subPrefab);
        }

        let com = raw.GetComponents(tree.RawInfo);
        tree.Component = com;
    }
}
