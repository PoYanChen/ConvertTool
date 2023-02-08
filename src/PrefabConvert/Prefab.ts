import { RawPrefab } from "../common/RawPrefab";
import { CC2Type, CC3Type, createCC2Object } from "../common/defineType";
import { BaseConvert } from "./BaseConvert";

export class Prefab extends BaseConvert {

    GetDefault2D() {
        return createCC2Object(CC2Type.Prefab);
    }

    HandlerDowngrade(key: string, element: any, dest: any, source: any): boolean {
        return false;
    }
}