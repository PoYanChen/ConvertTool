import { CC2Field, CC2Type, CC3Field, createCC2Object } from "../common/defineType";
import { UUID_3D_TO_2D } from "../common/diff";
import { BaseConvert } from "./BaseConvert";

export class Label extends BaseConvert {

    GetDefault2D() {
        return createCC2Object(CC2Type.Label);
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
            //FIXME SpriteFrame
        }


        return false;
    }
}