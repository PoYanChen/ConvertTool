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
                dest[CC2Field.Materials] = [
                    {
                        [CC2Field.UUID]: uuid
                    }
                ];
                return true;
            case CC2Field.String:
                let str = source._string;
                dest[CC2Field.String] = str;
                dest._N$string = str;
                return true;
            case CC2Field.File:
                let sourceSprite = source[CC3Field.Font];
                let newId = sourceSprite.__uuid__;
                dest[CC2Field.File] = {
                    [CC2Field.UUID]: newId
                };
                return true;
            case CC2Field.SourceBlend:
            case CC2Field.DestinationBlend:
                return true;
            case CC2Field.HorizontalAlign:
                {
                    let value = source[CC3Field.HorizontalAlign]
                    dest[CC2Field.HorizontalAlign] = value
                    return true
                }
            case CC2Field.VerticalAlign:
                {
                    let value = source[CC3Field.VerticalAlign]
                    dest[CC2Field.VerticalAlign] = value
                    return true
                }
        }


        return false;
    }
}