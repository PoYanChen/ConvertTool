import { ISpriteMetaMap } from "../MetaConvert/SpriteFrameMapping";
import { RawPrefab } from "../common/RawPrefab";

export interface IConvertArg {
    node: any,
    source: RawPrefab,
    dest: RawPrefab,
    convert: ISpriteMetaMap;
}

export abstract class BaseConvert {
    /**
     * 覆寫預設物件
     */
    abstract GetDefault2D(): any;

    /**
     * 物件結構
     * [
     *      node: {
     *          key: element,
     *      }
     * ]
     */

    /**
     * 複寫轉換「屬性」的方法
     * @param key 屬性的 Key
     * @param element 屬性的值
     * @param dest 新的節點物件
     * @param source 原始的節點物件
     * @returns true - 略過此屬性複製
     */
    abstract HandlerDowngrade(key: string, element: any, dest: any, source: any): boolean;

    protected spriteFrameConvert: ISpriteMetaMap;
    protected sourcePrefab: RawPrefab;
    protected destPrefab: RawPrefab;

    constructor(arg: IConvertArg) {
        this.spriteFrameConvert = arg.convert;
        this.sourcePrefab = arg.source;
        this.destPrefab = arg.dest;
    }

    Downgrade(source: any, list: RawPrefab) {
        let result = this.GetDefault2D();
        list.PushItem(result);
        for (const key in result) {

            if (key.startsWith("__")) {
                continue;
            }

            const element = result[key];
            let converted = this.HandlerDowngrade(key, element, result, source);
            if (converted) {
                continue;
            }

            let sourceValue = source[key];
            if (sourceValue !== undefined) {
                result[key] = sourceValue;
            }
        }
        return result;
    }
}