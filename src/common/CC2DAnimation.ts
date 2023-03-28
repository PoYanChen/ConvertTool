import { AnimationCurve, AnimationPathType, AnimationTrack, CC3DAnimation, TrackType } from "./CC3DAnimation";
import { CC2Field, CC2Type, CC3Field, CC3Type, createCC2Object } from "./defineType";

interface frameData {
    frame: number,
    value: any,
}

interface zipSource<T> {
    field: string,
    values: Array<T>;
}

interface fieldSelector {
    Index: number,
    Field: string,
}

let pathMapping: any = {
    ["eulerAngles"]: "angle",
};

function zipValue<T>(type: string, sources: zipSource<T>[]) {
    let length = sources.map(o => o.values.length);
    let allEqual = length.every(v => v === length[0]);

    if (!allEqual) {
        console.log("zip source not same size");
        return [] as any[];
    }


    let result = [] as any[];
    for (let index = 0; index < length[0]; index++) {
        result.push({ [CC2Field.Type]: type });
    }

    for (const iterator of sources) {
        for (let index = 0; index < iterator.values.length; index++) {
            const element = iterator.values[index];
            result[index][iterator.field] = element;
        }
    }

    return result;
}

export class CC2DAnimation {

    private animation: any;
    private sourceAnimation: CC3DAnimation;

    constructor(anim: CC3DAnimation) {
        this.animation = createCC2Object(CC2Type.AnimationClip);
        this.sourceAnimation = anim;
    }

    public ParserAnimation() {
        this.pastDefault();
        this.convertTrack();

        return this.animation;
    }

    private pastDefault() {
        let clip = this.sourceAnimation.GetAnimationClip();
        for (const key in this.animation) {
            let source = clip[key];
            if (source !== undefined) {
                this.animation[key] = source;
            }
        }
    }

    private convertTrack() {
        let clip = this.sourceAnimation.GetAnimationClip();
        let paths = this.animation.curveData.paths;
        for (const iterator of clip._tracks) {
            let id = iterator.__id__;
            let track = this.sourceAnimation.ParserTrack(id);
            if (track === undefined) {
                continue;
            }

            let isPaths = this.convertPath(track, paths);
            if (!isPaths) {
                this.convertProps(track, this.animation.curveData);
            }
        }

        // console.log(this.animation);
    }

    private convertPath(clip: AnimationTrack, root: any) {
        let nodePath = clip.Path.get(AnimationPathType.Node)?.path as string;
        let componentPath = clip.Path.get(AnimationPathType.Component)?.component as string;

        // console.log("convert path", nodePath, componentPath);

        if (nodePath === undefined) {
            console.log("not find node path");
            return false;
        }

        let info = root[nodePath];
        if (info === undefined) {
            info = {};
            root[nodePath] = info;
        }

        let field = this.getComponentsFieldPath(componentPath, clip.PathField);
        let node = info[field];
        if (node === undefined) {
            node = {};
            info[field] = node;
        }

        this.convertClip(clip, node);
        return true;
    }

    private convertProps(clip: AnimationTrack, root: any) {
        let node = root["props"];
        if (node === undefined) {
            node = {};
            root["props"] = node;
        }

        let temp: any = {};
        this.convertClip(clip, temp);

        let values = Object.values(temp).at(0);
        let path = pathMapping[clip.PathField] ?? clip.PathField;
        node[path] = values;
    }

    private convertClip(clip: AnimationTrack, node: any) {

        switch (clip.TrackType) {
            case TrackType.RealTrack:
                this.fillRealTrack(clip, node);
                break;
            case TrackType.VectorTrack:
                this.fillVectorTrack(clip, node);
                break;
            case TrackType.SizeTrack:
                this.fillContentSizeTrack(clip, node);
                break;
            case TrackType.ColorTrack:
                this.fillColorTrack(clip, node);
                break;
            case TrackType.ObjectTrack:
                this.fillObjectTrack(clip, node);
                break;
        }
    }

    private getComponentsFieldPath(type: string, property: string) {
        let typeMap = [
            type,
            property
        ];
        switch (typeMap) {
            case [CC3Type.Sprite, "color"]:
                return "comps";
            default:
                return "props";
        }
    }

    private fillRealTrack(track: AnimationTrack, node: any) {
        let field = track.PathField;
        let result = [] as frameData[];
        for (const ch of track.Channel) {
            result = this.bindRealCurve(ch);
        }

        node[field] = result;
    }

    private fillVectorTrack(track: AnimationTrack, node: any) {
        let field = track.PathField;
        switch (field) {
            case "scale":
                this.fillScaleTrack(track, node, "scale");
                break;
            case "position":
                this.fillScaleTrack(track, node, "position");
                break;
            case "anchorPoint":
                this.fillAnchorTrack(track, node);
                break;
            case "eulerAngles":
                this.fillRotateTrack(track, node);
                break;
        }
    }

    private fillScaleTrack(track: AnimationTrack, node: any, prop: string) {
        let channel = track.Channel;
        if (channel.length < 2) {
            console.log("channel length not enough");
            return;
        }

        let fields: fieldSelector[] = [
            { Field: "x", Index: 0 },
            { Field: "y", Index: 1 },
        ];

        node[prop] = this.mergeRealCurve(
            channel,
            fields,
            "cc.Vec2"
        );
    }

    private fillAnchorTrack(track: AnimationTrack, node: any) {
        let channel = track.Channel;
        if (channel.length < 2) {
            console.log("channel length not enough");
            return;
        }

        node.anchorX = this.bindRealCurve(channel[0]);
        node.anchorY = this.bindRealCurve(channel[1]);
    }

    private fillRotateTrack(track: AnimationTrack, node: any) {
        let z = this.bindRealCurve(track.Channel[2]);
        node.angle = z;
    }

    private fillContentSizeTrack(track: AnimationTrack, node: any) {
        let channel = track.Channel;
        if (channel.length < 2) {
            console.log("channel length not enough");
            return;
        }

        // console.log("anchor channels", channel);

        node.width = this.bindRealCurve(channel[0]);
        node.height = this.bindRealCurve(channel[1]);
    }

    private fillColorTrack(track: AnimationTrack, node: any) {
        let channel = track.Channel;

        let r = this.bindRealCurve(channel[0]);
        let g = this.bindRealCurve(channel[1]);
        let b = this.bindRealCurve(channel[2]);
        let a = this.bindRealCurve(channel[3]);

        let pickValue = (val: any) => val.value;

        let zips = zipValue(
            CC2Type.Color,
            [
                {
                    field: "r",
                    values: r.map(pickValue),
                },
                {
                    field: "g",
                    values: g.map(pickValue),
                },
                {
                    field: "b",
                    values: b.map(pickValue),
                },
                {
                    field: "a",
                    values: a.map(pickValue),
                },
            ]
        );

        let times = r.map(o => o.frame);
        let result = [] as frameData[];
        for (let index = 0; index < times.length; index++) {
            let time = times[index];
            let value = zips[index];
            result.push({
                frame: time,
                value: value,
            });
        }

        return result;
    }

    private fillObjectTrack(track: AnimationTrack, node: any) {
        let field = track.PathField;
        let channel = track.Channel[0];

        let result = this.bindObjectCurve(channel);
        node[field] = result;
    }

    private bindRealCurve(curve: AnimationCurve) {
        let result = [] as frameData[];
        for (let index = 0; index < curve._times.length; index++) {
            let time = curve._times[index];
            let value = curve._values[index].value;
            result.push({
                frame: time,
                value: value,
            });
        }
        return result;
    }

    private mergeRealCurve(curves: AnimationCurve[], fieldConfig: fieldSelector[], type: string) {
        let result = [] as frameData[];
        let curve = curves[0];
        for (let index = 0; index < curve._times.length; index++) {
            let time = curve._times[index];
            let value: any = {
                __type__: type
            };
            let frameData: any = {
                frame: time,
                value: value
            };

            for (const iterator of fieldConfig) {
                let field = iterator.Field;
                let channelValues = curves[iterator.Index]._values;
                value[field] = channelValues[index].value;
            }

            result.push(frameData);
        }

        return result;
    }

    private bindObjectCurve(curve: AnimationCurve) {
        let result = [] as frameData[];
        for (let index = 0; index < curve._times.length; index++) {
            let time = curve._times[index];
            let value = curve._values[index];
            result.push({
                frame: time,
                value: value,
            });
        }
        return result;
    }
}