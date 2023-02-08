import { CC2Field, CC2Type, CC3Field, CC3Type, createCC2Object } from "../common/defineType";
import { UUID_3D_TO_2D } from "../common/diff";
import { BaseConvert } from "./BaseConvert";

export class Sprite extends BaseConvert {

    GetDefault2D() {
        return createCC2Object(CC2Type.Sprite);
    }

    HandlerDowngrade(key: string, element: any, dest: any, source: any): boolean {
        switch (key) {
            case CC2Field.Materials:
                let material = source[CC3Field.CustomMaterials];
                if (material === undefined) {
                    return true;
                }

                let sourceUUID = material[CC3Field.UUID];
                let uuid = UUID_3D_TO_2D.get(sourceUUID);
                dest[CC2Field.Materials] = [uuid];
                return true;
            case CC2Field.SpriteFrame:
                // FIXME SpriteFrame
                return true;
            default:
                return false;
        }
    }
}