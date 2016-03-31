declare module spine {
    export class BoneData {
        length: number;
        x: number;
        y: number;
        rotation: number;
        scaleX: number;
        scaleY: number;
        inheritScale: boolean;
        inheritRotation: boolean;
        flipX: boolean;
        flipY: boolean;

        // ...メンバの実装...
        constructor(name:string, parent:any);
    }

    export class BlendMode{
        normal: number;
        additive: number;
        multiply: number;
        screen: number;
    }

    export class SlotData{
        r: number;
        g: number;
        b: number;
        a: number;
        attachmentName: any;
        blendMode: number;
        constructor(name: string, boneData:any);
    }

    export class IkConstraintData{
        name: string;
        boneData: any;
        bones: Array<any>;
        target: any;
        bendDirection: number;
        mix: number;
        constructor(name: string, boneData:any);
    }

    export class Bone {
        data: any;
        skeleton: any;
        parent: any;
        x: number;
        y: number;
        rotation: number;
        rotationIK: number;
        scaleX: number;
        scaleY: number;
        flipX: boolean;
        flipY: boolean;
        m00: number;
        m01: number;
        worldX: number;
        m10: number;
        m11: number;
        worldY: number;
        worldRotation: number;
        worldScaleX: number;
        worldScaleY: number;
        worldFlipX: boolean;
        worldFlipY: boolean;


        setToSetupPose(): void;
        updateWorldTransform(): void;
        setToSetupPose(): void;
        worldToLocal(): void;
        localToWorld(): void;

        static yDown: boolean;

        constructor(boneData: any, skeleton: any, parent: any);
    }

    export class Slot{
        bone: spine.Bone;
        slotData: spine.SlotData;
        r: number;
        g: number;
        b: number;
        a: number;
        _attachmentTime: number;
        attachment: any;
        attachmentVertices: Array<any>;

        setAttachment():void;
        setAttachmentTime():void;
        setToSetupPose():void;
        getAttachmentTime():number;

        constructor(slotData: any, bone: any);
    }

    export class IkConstraint{
        data: any;
        mix: number;
        bendDirection: any;
        bones: Array<any>;
        target: any;

        apply():void;
        apply1():void;
        apply2():void;

        constructor(data: any, skeleton:any);
    }

    export class Skin {
        name: string;
        attachments: Object;

        addAttachment():void;
        _attachAll():void;
        getAttachment():any;

        constructor(name: string);
    }

    export class Animation{
        name: string;
        timelines: any;
        duration: number;

        apply():void;
        mix():void;

        static binarySearch(values: Array<any>, target: number, step: number):void;
        static binarySearch1(values: Array<any>, target: number):void;
        static linearSearch(values: Array<any>, target: number, step: number):number;

        constructor(name: string, timelines:any, duration: number);
    }

    export class Curves{
        curves: Array<any>;

        setLinear(frameIndex:number):void;
        setStepped(frameIndex:number):void;
        setCurve(frameIndex:number, cx1: number, cy1: number, cx2: number, cy2: number):void;
        getCurvePercent(frameIndex: number, percent: number):number;

        constructor(frameCount: number);
    }

    export class RotateTimeline{
        curves: spine.Curves;
        frame: Array<any>;
        boneIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, time: number, angle: number):void;
        apply(skeleton: any, lastTime: number, time: number, firedEvents: any, alpha: number):void;

        constructor(frameCount: number);
    }

    export class TranslateTimeline{
        curves: spine.Curves;
        frames: Array<any>;
        boneIndex: number;

        getFrameCount():number;
        setFrame(frameIndex: number, time: number, x: number, y: number):void;
        apply(skeleton: Object, lastTime: number, time: number, firedEvents: any, alpha: number):void;

        constructor(frameCount: number);
    }

    export class ScaleTimeline{
        curves: spine.Curves;
        frames: Array<any>;
        boneIndex: number;

        getFrameCount():number;
        setFrame(frameIndex: number, time: number, x: number, y: number):void;
        apply(skeleton: Object, lastTime: number, time: number, firedEvents: any, alpha: number):void;

        constructor(frameCount: number);
    }

    export class ColorTimeline{
        curves: spine.Curves;
        frames: Array<any>;
        slotIndex: number;

        getFrameCount():number;
        setFrame(frameIndex: number, time: number, r: number, g: number, b: number, a: number):void;
        apply(skeleton: Object, lastTime: number, time: number, firedEvents: any, alpha: number):void;

        constructor(frameCount: number);
    }

    export class AttachmentTimeline{
        slotIndex: number;

        getFrameCount():number;
        setFrame(frameIndex: number, time: number, attachmentName: string):void;
        apply(skeleton: Object, lastTime: number, time: number, firedEvents: any, alpha: number):void;

        constructor(frameCount: number);
    }

    export class EventTimeline{
        frames: Array<any>;
        events: Array<any>;

        getFrameCount(): number;
        setFrame(frameIndex: number, item: number, event: any):void;
        apply(skeleton: Object, lastTime: number, time: number, firedEvents: any, alpha: number):void;

        constructor(frameCount: number);
    }

    export class DrawOrderTimeline{
        frames: Array<any>;
        drawOrders: Array<any>;

        getFrameCount(): number;
        setFrame(frameIndex: number, item: number, drawOrder: any):void;
        apply(skeleton: Object, lastTime: number, time: number, firedEvents: any, alpha: number):void;

        constructor(frameCount: number);
    }

    export class FfdTimeline{
        curves: spine.Curves;
        frames: Array<any>;
        frameVertices: Array<any>;
        slotIndex: number;
        attachment: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, item: number, vertices: any):void;
        apply(skeleton: Object, lastTime: number, time: number, firedEvents: any, alpha: number):void;

        constructor(frameCount: number);
    }

    export class IkConstraintTimeline{
        curves: spine.Curves;
        frames: Array<any>;
        ikConstraintIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, item: number, mix: any, bendDirection:any):void;
        apply(skeleton: Object, lastTime: number, time: number, firedEvents: any, alpha: number):void;

        constructor(frameCount: number);
    }

    export class FlipXTimeline{
        curves: spine.Curves;
        frames: Array<any>;
        boneIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, time: number, flip: boolean): void;

        apply(skeleton: Object, lastTime: number, time: number, firedEvents: any, alpha: number):void;

        constructor(frameCount: number);
    }

    export class FlipYTimeline{
        curves: spine.Curves;
        frames: Array<any>;
        boneIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, time: number, flip: boolean): void;

        apply(skeleton: Object, lastTime: number, time: number, firedEvents: any, alpha: number):void;

        constructor(frameCount: number);
    }

    export class SkeletonData{
        bones: Array<Object>;
        slots: Array<Object>;
        skins: Array<Object>;
        events: Array<Object>;
        animations: Array<Object>;
        ikConstraints: Array<Object>;
        name: string;
        defaultSkin: any;
        width: number;
        height: number;
        version: any;
        hash: any;

        findBone(boneName: string): Object;
        findBoneIndex(boneName: string): number;
        findSlot(slotName: string): Object;
        findSlotIndex(slotName: string):number;
        findSkin(slotName: string): Object;
        findEvent(eventName: string): Object;
        findAnimation(animationName: string): Object;
        findIkConstraint(ikConstraintName: string): Object;

        constructor();
    }

    export class Skeleton {
        data: spine.SkeletonData;
        bones: Array<spine.Bone>;
        slots: Array<spine.Slot>;
        drawOrder: Array<spine.Slot>;
        ikConstraints: Array<spine.IkConstraint>;
        boneCache: Array<any>;
        x: number;
        y: number;
        skin: any;
        r: number;
        g: number;
        b: number;
        a: number;
        time: number;
        flipX: boolean;
        flipY: boolean;

        updateCache(): void;
        updateWorldTransform(): void;
        setToSetupPose(): void;
        setBonesToSetupPose(): void;
        setSlotsToSetupPose(): void;
        getRootBone(): any;
        findBone(boneName: string): any;
        findBoneIndex(boneName: string): number;
        findSlot(slotName: string): any;
        findSlotIndex(slotName: string): number;
        setSkinByName(skinName: string): void;
        setSkin(newSkin: any):void;
        getAttachmentBySlotName(slotName: string, attachmentName: string): any;
        getAttachmentBySlotIndex(slotIndex: number, attachmentName: string): any;
        setAttachment(slotName: string, attachmentName: string): void;
        findIkConstraint(ikConstraintName: string): any;
        update(delta: number): void;

        constructor(skeletonData: spine.SkeletonData);
    }

    export class EventData {
        name: string;
        intValue: number;
        floatValue: number;
        stringValue: any;

        constructor(name: string);
    }

    export class Event {
        data: any;
        intValue: number;
        floatValue: number;
        stringValue: any;

        constructor(data: any);
    }

    export class AttachmentType {
        region: number;
        boundingbox: number;
        mesh: number;
        skinnedmesh: number;
    }

    export class RegionAttachment {
        name: string;
        offset: number[];
        uvs: number[];
        type: number;
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
        width: number;
        height: number;
        r: number;
        g: number;
        b: number;
        a: number;
        path: any;
        rendererObject: any;
        regionOffsetX: number;
        regionOffsetY: number;
        regionWidth: number;
        regionHeight: number;
        regionOriginalWidth: number;
        regionOriginalHeight: number;
        partsName: any;

        setUVs(u: number, v: number, u2: number, v2: number, rotate: number): void;
        updateOffset(): void;
        computeVertices(x: number, y: number, bone: spine.Bone, vertices: any): void;

        constructor(name: string);
    }

    export class MeshAttachment {
        name: string;
        type: number;
        vertices: number[];
        uvs: number[];
        regionUVs: number[];
        triangles: any;
        hullLength: number;
        r: number;
        g: number;
        b: number;
        a: number;
        path: any;
        rendererObject: any;
        regionU: number;
        regionV: number;
        regionU2: number;
        regionV2: number;
        regionRotate: boolean;
        regionOffsetX: number;
        regionOffsetY: number;
        regionWidth: number;
        regionHeight: number;
        regionOriginalWidth: number;
        regionOriginalHeight: number;
        edges: any;
        width: number;
        height: number;

        updateUVs(): void;
        computeWorldVertices(x: number, y: number, slot: spine.Slot, worldVertices: number[]): void;


        constructor(name: string);
    }

    export class SkinnedMeshAttachment {
        name: string;
        type: number;
        bones: number[];
        weights: Array<any>;
        uvs: number[];
        regionUVs: number[];
        triangles: Array<any>;
        hullLength: number;
        r: number;
        g: number;
        b: number;
        a: number;
        path: any;
        rendererObject: any;
        regionU: number;
        regionV: number;
        regionU2: number;
        regionV2: number;
        regionRotate: boolean;
        regionOffsetX: number;
        regionOffsetY: number;
        regionWidth: number;
        regionHeight: number;
        regionOriginalWidth: number;
        regionOriginalHeight: number;
        edges: any;
        width: number;
        height: number;

        updateUVs(): void;
        computeWorldVertices(x: number, y: number, slot: spine.Slot, worldVertices: number[]): void;

        constructor(name: string);
    }

    export class BoundingBoxAttachment {
        name: string;
        vertices: number[];
        type: number;

        computeWorldVertices(x: number, y: number, bone: spine.Bone, worldVertices: number[]):void;

        constructor(name: string);
    }

    export class AnimationStateData {
        animationToMixTime: Object;
        defaultMix: number;

        setMixByName(fromName: string, toName: string, duration: number): void;
        setMix(from: Object, to: Object, duration: number): void;
        getMix(from: Object, to: Object): number;

        constructor(skeletonData: spine.SkeletonData);
    }

    export class TrackEntry {
        next: any;
        previous: any;
        animation: any;
        loop: boolean;
        delay: number;
        time: number;
        lastTime: number;
        endTime: number;
        timeScale: number;
        mixTime: number;
        mixDuration: number;
        mix: number;
        onStart: Function;
        onEnd: Function;
        onComplete: Function;
        onEvent: Function;

        constructor();
    }

    export class AnimationState {
        data: any;
        tracks: Array<any>;
        events: Array<any>;

        onStart: Function;
        onEnd: Function;
        onComplete: Function;
        onEvent: Function;

        timeScale: number;

        update(delta: number): void;
        apply(skeleton: any): void;
        clearTracks(): void;
        clearTrack(trackIndex: number): void;
        _expandToIndex(index: number): any;
        setCurrent(index: number, entry: any): void;
        setAnimationByName(trackIndex: number, animationName: string, loop: boolean): void;
        setAnimation(trackIndex: number, animation: any, loop: boolean): any;
        addAnimationByName(trackIndex: number, animationName: string, loop: boolean, delay: number): void;
        addAnimation(trackIndex: number, animation: any, loop: boolean, delay: number): any;
        getCurrent(trackIndex: number): any;

        constructor(stateData: any);
    }

    export class SkeletonJson {
        attachmentLoader: any;
        scale: number;

        readSkeletonData(root: Object, name?: string): void;
        readAttachment(skin: any, name: string, map: Object): void;
        readAnimation(name: string, map: Object, skeletonData: spine.SkeletonData): void;
        readCurve(timeline: any, frameIndex: number, valueMap: Object): void;
        toColor(hexString: string, colorIndex: number): number;
        getFloatArray(map: Object, name: string, scale: number): number[];
        getIntArray(map: Object, name: string): number[];

        constructor(attachmentLoader: any);
    }

    export class Atlas {
        textureLoader: any;
        pages: Array<any>;
        regions: Array<any>;


        findRegion(name: string): any;
        dispose(): void;
        updateUVs(page: Object): void;


        static Format: {
            alpha: number;
            intensity: number;
            luminanceAlpha: number;
            rgb565: number;
            rgba4444: number;
            rgb888: number;
            rgba8888: number;

        };
        static TextureFilter: {
            nearest: number;
            linear: number;
            mipMap: number;
            mipMapNearestNearest: number;
            mipMapLinearNearest: number;
            mipMapNearestLinear: number;
            mipMapLinearLinear: number;
        };
        static TextureWrap: {
            mirroredRepeat: number;
            clampToEdge: number;
            repeat: number;
        };

        constructor(atlasText: any, textureLoader: any);
    }

    export class AtlasPage {
        name: any;
        format: any;
        minFilter: any;
        magFilter: any;
        uWrap: any;
        vWrap: any;
        rendererObject: any;
        width: number;
        height: number;
    }

    export class AtlasRegion {
        page: any;
        name: any;
        x: number;
        y: number;
        width: number;
        height: number;
        u: number;
        v: number;
        u2: number;
        v2: number;
        offsetX: number;
        offsetY: number;
        originalWidth: number;
        originalHeight: number;
        index: number;
        rotate: boolean;
        splits: any;
        pads: any;
    }

    export class AtlasReader {
        lines: string[];
        index: number;
        trim(value: string): string;
        readLine(): string;
        readValue(): string;
        readTuple(tuple: string): number;

        constructor(text: string);
    }

    export class AtlasAttachmentLoader {
        atlas: spine.Atlas;

        newRegionAttachment(skin: any, name: string, path: string): spine.RegionAttachment;
        newMeshAttachment(skin: any, name: string, path: string): spine.MeshAttachment;
        newSkinnedMeshAttachment(skin: any, name: string, path: string): spine.SkinnedMeshAttachment;
        newBoundingBoxAttachment(skin: any, name: string): spine.BoundingBoxAttachment;

        constructor(atlas: spine.Atlas);
    }

    export class SkeletonBounds {
        polygonPool: Array<any>;
        polygons: Array<any>;
        boundingBoxes: Array<any>;
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;

        update(skeleton: spine.Skeleton, updateAabb?: boolean): void;
        aabbCompute(): void;
        aabbContainsPoint(x: number, y: number): boolean;
        aabbIntersectsSegment(x1: number, y1: number, x2: number, y2: number): boolean;
        aabbIntersectsSkeleton(bounds: any): boolean;
        containsPoint(x: number, y: number): any;
        intersectsSegment(x1: number, y1: number, x2: number, y2: number): any;
        polygonContainsPoint(polygon: any, x: number, y: number): boolean;
        polygonIntersectsSegment(polygon: any, x: number, y: number): boolean;
        getPolygon(attachment: any): any;
        getWidth(): number;
        getHeight(): number;

        constructor();
    }

    export class SkeletonRenderer {
        imagesPath: string;
        lastTime: string;
        skeletonData: any;
        state: any;
        scale: number;
        skeleton: spine.Skeleton;

        load(jsonText: string): void;
        update(): void;
        render(context: any): void;
        animate(id: string): void;
        // animate(canvas: HTMLCanvasElement): void;
        constructor(imagePath: string);

        // constructor(imagesPath: string, spriteJSON: string);
    }
}