import { CC3DAnimation } from "../common/CC3DAnimation";
import { CC2DAnimation } from "../common/CC2DAnimation";

export class AnimationConvert {
    private anim3D: CC3DAnimation;

    constructor(node: any) {
        let source = node as any[]
        this.anim3D = new CC3DAnimation(source);
    }

    public Convert() {
        let anim2D = new CC2DAnimation(this.anim3D);
        let result = anim2D.ParserAnimation();
        // let js = JSON.stringify(result, undefined, "");
        // console.log(js);

        return result;
    }
}

// let file = "/mnt/c/Users/chengrongsun/.CocosCreator/extensions/creator-transfer/demo/v3/New AnimationClip.anim";
// let anim = new Animation(file);

// anim.WalkTrace();
// prefab.TestWalk();
// prefab.WalkNode(null);

