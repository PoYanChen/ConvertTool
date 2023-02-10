import { CC2Field, CC2Type, CC3Field, CC3Type, createCC2Object } from "../common/defineType";
import { UUID_3D_TO_2D } from "../common/diff";
import { BaseConvert } from "./BaseConvert";

export class ParticleSystem extends BaseConvert {

    GetDefault2D() {
        return createCC2Object(CC2Type.ParticleSystem);
    }

    HandlerDowngrade(key: string, element: any, dest: any, source: any): boolean {
        switch (key) {
            case CC2Field.Materials:
                let materials = source[CC3Field.Materials];
                if (materials === undefined) {
                    return true;
                }

                let newIds = materials.map((idTable: any) => {
                    let uuid = idTable[CC3Field.UUID];
                    return UUID_3D_TO_2D.get(uuid);
                });

                dest[CC2Field.Materials] = {
                    [CC2Field.UUID]: newIds
                };
                break;
            default:
                return false;
        }
        return true;
    }
}