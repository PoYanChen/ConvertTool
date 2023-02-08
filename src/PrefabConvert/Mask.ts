import { CC2Field, CC2Type, CC3Field, CC3Type, createCC2Object } from "../common/defineType";
import { UUID_3D_TO_2D } from "../common/diff";
import { BaseConvert } from "./BaseConvert";

export class Mask extends BaseConvert {

    GetDefault2D() {
        return createCC2Object(CC2Type.Mask);
    }

    HandlerDowngrade(key: string, element: any, dest: any, source: any): boolean {
        switch (key) {
            case CC2Field.AlphaThreshold:
                {
                    let alpha = source[CC3Field.AlphaThreshold];
                    if (alpha === undefined) {
                        break;
                    }

                    dest[CC2Field.AlphaThreshold] = alpha;
                    break;
                }
            case CC2Field.Inverted:
                {
                    let inverted = source[CC3Field.Inverted];
                    if (inverted === undefined) {
                        break;
                    }

                    dest[CC2Field.Inverted] = inverted;
                    break;
                }
            default:
                return false;
        }
        return true;
    }
}