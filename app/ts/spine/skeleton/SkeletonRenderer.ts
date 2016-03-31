/**
 * Created by honda on 2016/03/30.
 */

import SpineImageData from '../utils/SpineImageData';

/**
 * @required spine.js
 */
class SkeletonRenderer {

    private lastTime: number;
    private imageData: SpineImageData;

    public skeletonData: any;
    public state: spine.AnimationState;
    public scale: number;
    public skeleton: spine.Skeleton;

    /**
     * @class SkeletonRenderer
     * @constructor
     * @param imagesPath    {string}
     */
    constructor(public imagesPath: string) {
        this.lastTime = Date.now();
        this.imageData = new SpineImageData();
    }

    /**
     * JSONを文字列でもらってparseさせる。
     * JSON内の画像を読み込みして、onloadのタイミングでspineのattachmentに渡してる。
     * @param jsonText
     */
    public load(jsonText: string): void {
        const imagesPath: string = this.imagesPath;
        const json: spine.SkeletonJson = new spine.SkeletonJson({
            newRegionAttachment: (skin: spine.Skin, name: string, path: string) => {
                /*const image: HTMLImageElement = new Image();
                image.src = `${imagesPath}${path}.png`;*/
                // console.log(`name is ${name}`);
                this.imageData.add(`${imagesPath}${path}.png`, name);
                const attachment: spine.RegionAttachment = new spine.RegionAttachment(name);
                attachment.partsName = name;
                return attachment;
            },
            newBoundingBoxAttachment: (skin: spine.Skin, name: string) => {
                // console.log(`newBoundingBoxAttachment : ${name}`);
                return new spine.BoundingBoxAttachment(name);
            }
        });
        json.scale = this.scale;
        this.skeletonData = json.readSkeletonData(JSON.parse(jsonText));
        spine.Bone.yDown = true;
        this.skeleton = new spine.Skeleton(this.skeletonData);

        const stateData: spine.AnimationStateData = new spine.AnimationStateData(this.skeletonData);
        this.state = new spine.AnimationState(stateData);

        // console.log(this.skeletonData.defaultSkin.attachments);
    }

    /**
     * stateとskeletonの情報を更新
     */
    public update(): void {
        const now: number = Date.now();
        const delta: number = (now - this.lastTime) * 0.001;
        this.lastTime = now;

        this.state.update(delta);
        this.state.apply(this.skeleton);
        this.skeleton.updateWorldTransform();
    }

    /**
     *
     * @param context   {CanvasRenderingContext2D}
     */
    public render(context: CanvasRenderingContext2D): void {
        const skeleton: spine.Skeleton = this.skeleton;
        const drawOrder: Array<spine.Slot> = skeleton.drawOrder;
        context.translate(skeleton.x, skeleton.y);

        const num: number = drawOrder.length;
        for(let i: number = 0; i < num; i++) {
            const slot: spine.Slot = drawOrder[i];
            const attachment: any = slot.attachment;
            if (!(attachment instanceof spine.RegionAttachment)) continue;
            const bone: spine.Bone = slot.bone;
            const x: number = bone.worldX + attachment.x * bone.m00 + attachment.y * bone.m01;
            const y: number = bone.worldY + attachment.x * bone.m10 + attachment.y * bone.m11;
            const rotation: number = -(bone.worldRotation + attachment.rotation) * Math.PI / 180;
            const w: number = attachment.width * bone.worldScaleX;
            const h: number = attachment.height * bone.worldScaleY;

            context.translate(x, y);
            context.rotate(rotation);
            context.drawImage(this.imageData.getImageByKey(attachment.partsName), -w / 2, -h / 2, w, h);
            context.rotate(-rotation);
            context.translate(-x, -y);
        }
        context.translate(-skeleton.x, -skeleton.y);
    }

    public animate(id: string): void {
        const canvas = <HTMLCanvasElement>document.getElementById(id);
        const context: CanvasRenderingContext2D = canvas.getContext('2d');
        const requestAnimationFrame: any = window.requestAnimationFrame ||
            (<any>window).webkitRequestAnimationFrame ||
            (<any>window).mozRequestAnimationFrame ||
                function(callback: Function): void {
                    window.setTimeout(callback, 1000 / 60);
                };
        const renderFrame: Function = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            this.update();
            this.render(context);
            requestAnimationFrame(renderFrame);
        };
        renderFrame();
    }

    public changeParts(id: string, name: string): void {
        // create <img> tag
        console.log('wanna change parts');
        this.imageData.add(`${this.imagesPath}${id}.png`, name);
        // const image: HTMLImageElement = new Image();
        // image.src = `${this.imagesPath}${id}.png`;

        /*const attachment: spine.RegionAttachment = new spine.RegionAttachment('head');
        attachment.rendererObject = image;
        this.skeletonData.defaultSkin.attachments['19:head'].rendererObject = image;
        console.log(this.skeletonData.defaultSkin.attachments['19:head']);*/




        // image.src = `${imagesPath}${path}.png`;
    }
}
export default SkeletonRenderer;
