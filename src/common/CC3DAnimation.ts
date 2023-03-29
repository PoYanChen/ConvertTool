import { CC3Field } from "./defineType";

interface ID {
    __id__: number;
}

export enum AnimationPathType {
    Node = "cc.animation.HierarchyPath",
    Component = "cc.animation.ComponentPath"
}

export interface AnimationTrack {
    TrackType: TrackType;
    Path: Map<AnimationPathType, AnimationPath>;
    PathField: string;
    Channel: AnimationCurve[];
}

export interface AnimationPath {
    __type__: AnimationPathType;
    path?: string;
    component?: string;
}

export interface ChannelKeyFrame {
    __type__: string;
    __uuid__: string;
    __expectedType__: string;
    interpolationMode: number;
    tangentWeightMode: number;
    value: number;
    rightTangent: number;
    rightTangentWeight: number;
    leftTangent: number;
    leftTangentWeight: number;
    easingMethod: number;
}

export interface AnimationCurve {
    _times: number[];
    _values: ChannelKeyFrame[];
}

enum Field {
    Binding = "_binding",
    Channel = "_channel",
    ChannelList = "_channels",
    Path = "path",
    PathList = "_paths",
    Curve = "_curve",
}

export enum TrackType {
    RealTrack = "cc.animation.RealTrack",
    ColorTrack = "cc.animation.ColorTrack",
    VectorTrack = "cc.animation.VectorTrack",
    SizeTrack = "cc.animation.SizeTrack",
    QuatTrack = "cc.animation.QuatTrack",
    ObjectTrack = "cc.animation.ObjectTrack",
}

export class CC3DAnimation {
    public Element: Map<number, any>;
    constructor(items: any[]) {
        let index = 0;
        this.Element = new Map<number, any>();

        for (const iterator of items) {
            this.Element.set(index, iterator);
            iterator.__metaId = index;
            index++;
        }
    }

    public GetAnimationClip() {
        return this.Element.get(0);
    }

    public ParserTrack(id: number) {
        let item = this.Element.get(id);
        if (item === undefined) {
            return undefined;
        }

        let type = item[CC3Field.Type];
        switch (type) {
            case TrackType.RealTrack:
            case TrackType.ObjectTrack:
                return this.parserRealTrack(item);
            case TrackType.ColorTrack:
            case TrackType.VectorTrack:
            case TrackType.SizeTrack:
                return this.parserMultiChannelTrack(item);
            default:
                return undefined;
        }
    }

    private defaultTrack(track: any) {
        let result = {
            TrackType: track[CC3Field.Type],
            Path: new Map<AnimationPathType, AnimationPath>(),
            PathField: "",
            Channel: [],
        };

        return result as AnimationTrack;
    }

    private parserRealTrack(item: any) {
        let result = this.defaultTrack(item);
        let bindingTrack = item[Field.Binding];
        this.bindPath(bindingTrack, result);

        let channelTrack = item[Field.Channel] as ID;
        this.bindChannel(channelTrack, result);

        return result;
    }

    private parserMultiChannelTrack(item: any) {
        let result = this.defaultTrack(item);
        let bindingTrack = item[Field.Binding];
        this.bindPath(bindingTrack, result);

        let channelTrack = item[Field.ChannelList] as ID[];
        this.bindChannelList(channelTrack, result);

        return result;
    }

    private bindPath(trackItem: any, result: AnimationTrack) {
        let pathId = (trackItem[Field.Path] as ID);
        // console.log("PathId",pathId)
        let trackPath = this.Element.get(pathId.__id__);
        // console.log("trackPath",trackPath)

        for (const iterator of trackPath[Field.PathList]) {
            // console.log("Path Info", iterator);
            if (iterator[CC3Field.ID] === undefined) {
                result.PathField = iterator;
            } else {
                let pathId = (iterator as ID).__id__;
                let pathInfo = this.Element.get(pathId) as AnimationPath;
                // console.log("AnimationPath", pathInfo);
                result.Path.set(pathInfo.__type__, pathInfo);
            }
        }
    }

    private bindChannel(channelTrace: ID, result: AnimationTrack) {
        // console.log("channelTrace", channelTrace);
        let channel = this.Element.get(channelTrace.__id__);
        // console.log("channel", channel);
        let curve = this.Element.get(channel[Field.Curve].__id__) as AnimationCurve;
        result.Channel.push(curve);
    }

    private bindChannelList(channelTrace: ID[], result: AnimationTrack) {
        for (const iterator of channelTrace) {
            this.bindChannel(iterator, result);
        }
    }
}