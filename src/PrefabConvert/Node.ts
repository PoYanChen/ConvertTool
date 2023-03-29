import { CC2Field, CC2Type, CC3Field, CC3Type, createCC2Object } from "../common/defineType";
import { MergeToEuler } from "../common/math";
import { BaseConvert } from "./BaseConvert";

export class Node extends BaseConvert {

    GetDefault2D() {
        return createCC2Object(CC2Type.Node);
    }

    HandlerDowngrade(key: string, element: any, dest: any, source: any): boolean {
        switch (key) {
            case CC2Field.Children:
            case CC2Field.Components:
                {
                    dest[key] = [];
                    break;
                }
            case CC2Field.Parent:
                {
                    dest[key] = null;
                    break;
                }
            case CC2Field.ContentSize:
                {
                    let trans = this.sourcePrefab.FindComponents(source, CC3Type.UITransform);
                    if (trans === undefined) {
                        break;
                    }
                    let size = trans[CC3Field.ContentSize];
                    element.width = size.width;
                    element.height = size.height;
                    break;
                }
            case CC2Field.AnchorPoint:
                {
                    let trans = this.sourcePrefab.FindComponents(source, CC3Type.UITransform);
                    if (trans === undefined) {
                        break;
                    }
                    let size = trans[CC3Field.AnchorPoint];
                    element.x = size.x;
                    element.y = size.y;
                    break;
                }
            case CC2Field.Transform:
                {
                    let transform = element.array;
                    let pos = source[CC3Field.LocalPosition];
                    transform[0] = pos.x;
                    transform[1] = pos.y;
                    transform[2] = pos.z;

                    let quat = source[CC3Field.LocalRotation];
                    transform[3] = quat.x;
                    transform[4] = quat.y;
                    transform[5] = quat.z;
                    transform[6] = quat.w;

                    let scale = source[CC3Field.LocalScale];
                    transform[7] = scale.x;
                    transform[8] = scale.y;
                    transform[9] = scale.z;
                    break;
                }
            case CC2Field.EulerAngles:
                {
                    let quat = source[CC3Field.LocalRotation];
                    let sourceEuler = source[CC3Field.EulerAngles];
                    let euler = MergeToEuler(quat, sourceEuler, true);
                    element.x = euler.x;
                    element.y = euler.y;
                    element.z = euler.z;

                    break;
                }
            case CC2Field.Color:
                {
                    let opacity = this.sourcePrefab.FindComponents(source, CC3Type.Opacity);
                    if (opacity === undefined) {
                        break;
                    }
                    element.a = opacity[CC3Field.Opacity];
                    break;
                }
            case CC2Field.PrefabInfo:
                {
                    break;
                }
            default:
                return false;
        }
        return true;
    }
}