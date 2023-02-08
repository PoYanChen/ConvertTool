import { CC2Type, CC3Type } from "./defineType";

export class RawPrefab {
    public Source: { [index: number]: any; } = {};
    private tempQueue = [] as any[];

    public static Create(items: any[]): RawPrefab {
        let index = 0;
        let result = new RawPrefab();
        for (const iterator of items) {
            let key = index;
            result.Source[key] = iterator;
            iterator.__metaId = key;
            index++;
        }

        return result;
    }

    // push and return Next Index
    public PushItem(item: any): number {
        let key = Object.keys(this.Source).length;
        this.Source[key] = item;
        item.__metaId = key;
        // console.log("Do PushItem", item.__type__);
        return key;
    }

    public PushQueue(item: any) {
        this.tempQueue.push(item);
    }

    public EnumerableNode(callback: (item: any) => boolean) {
        let prefab = this.Source[0];
        let firstNodeIndex = prefab.data.__id__;
        let firstNode = this.Source[firstNodeIndex];

        this.enumerableNode(firstNode, callback);
    }

    private enumerableNode(node: any, callback: (item: any) => boolean): boolean {
        let next = callback(node);
        if (!next) {
            return false;
        }

        let children = this.GetChildren(node);
        for (const iterator of children) {
            next = this.enumerableNode(iterator, callback);
            if (!next) {
                return false;
            }
        }

        return true;
    }

    public GetChildren(item: any): any[] {
        let result = [] as any[];

        let children = item._children;
        if (children) {
            for (const iterator of children) {
                let index = iterator.__id__;
                result.push(this.Source[index]);
            }
        }

        return result;
    }

    public GetComponents(item: any): any[] {
        let result = [] as any[];

        let components = item._components;
        if (components) {
            for (const iterator of components) {
                let index = iterator.__id__;
                let com = this.Source[index];
                result.push(com);
            }
        }

        return result;
    }

    public FindComponents(node: any, type: CC2Type | CC3Type): any {
        let comp = this.GetComponents(node);
        for (const iterator of comp) {
            if (iterator.__type__ === type) {
                return iterator;
            }
        }
        return undefined;
    }

    public GetPrefab(item: any): any {
        let prefab = item.__prefab;
        if (prefab) {
            let index = prefab.__id__;
            return this.Source[index];
        }

        return undefined;
    }

    public WalkInfo(callback: (node: any) => boolean) {
        let keys = Object.keys(this);
        for (const key in keys) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                const element = this.Source[key];
                let next = callback(element);
                if (!next) {
                    return;
                }
            }
        }
    }

    public PackagePrefab() {
        let result = [] as any[];

        for (const key in this.Source) {
            const element = this.Source[key];
            delete element.__metaId;
            result.push(element);
        }

        return result;
    }
}