import { CC2Field, CC2Type, CC3Type, createCC2Object } from "../common/defineType";
import { BaseConvert } from "./BaseConvert";

export class Animation extends BaseConvert {

    GetDefault2D() {
        return createCC2Object(CC2Type.Animation);
    }

    HandlerDowngrade(key: string, element: any, dest: any, source: any): boolean {
        switch (key) {
            case CC2Field.Node:
                
                break;
        
            default:
                break;
        }
        return false;
    }
}