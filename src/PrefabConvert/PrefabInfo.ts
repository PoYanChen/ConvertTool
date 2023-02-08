import { CC2Type, CC3Type, createCC2Object } from "../common/defineType";
import { BaseConvert } from "./BaseConvert";

export class PrefabInfo extends BaseConvert {

    GetDefault2D() {
        return createCC2Object(CC2Type.PrefabInfo);
    }

    HandlerDowngrade(key: string, element: any, dest: any, source: any): boolean {
        return false;
    }
}