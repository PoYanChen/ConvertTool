import { v4 } from "uuid";

export interface ISpriteMetaMap {
    // 若為已指定的 ID 不重新生成
    GenNewUUID(source: string): string;
    // 使用新的 ID 搜尋原始 ID
    GetOldUUID(target: string): any;
}

export class SpriteFrameMapping implements ISpriteMetaMap {

    public SourceToTarget = new Map<string, string>();
    public TargetToSource = new Map<string, string>();

    public GenNewUUID(source: string) {

        let result = this.SourceToTarget.get(source);
        if (result !== undefined) {
            return result;
        }

        result = v4();

        this.SourceToTarget.set(source, result);
        this.TargetToSource.set(result, source);

        console.log(`set uuid ${source} to ${result}`);

        return result;
    }

    GetOldUUID(uuid: string) {

        let newUUid = this.TargetToSource.get(uuid);

        if (newUUid === undefined) {
            console.error("not find Old uuid", uuid);
            return "";
        }

        return newUUid;
    }
}