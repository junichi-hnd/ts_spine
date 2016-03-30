/**
 * Created by honda on 2016/03/30.
 */


class SkeletonRenderer {

    private lastTime: number;

    public skeletonData: any;
    public state: spine.AnimationState;
    public scale: number;
    public skeleton: spine.Skeleton;


    constructor(public imagesPath: string){
        this.lastTime = Date.now();
    }

    public load(jsonText: string): void {
        const imagesPath: string = this.imagesPath;
        const json: spine.SkeletonJson = new spine.SkeletonJson({
            newRegionAttachment: (skin: any, name: string, path: string) => {
                const image: HTMLImageElement = new Image();
                image.src = `${imagesPath}${path}.png`;
                const attachment: spine.RegionAttachment = new spine.RegionAttachment(name);
                attachment.rendererObject = image;
                return attachment;
            },
            newBoundingBoxAttachment: (skin: any, name: string) => {
                return new spine.BoundingBoxAttachment(name);
            }
        });
        json.scale = this.scale;
        this.skeletonData = json.readSkeletonData(JSON.parse(jsonText));
        spine.Bone.yDown = true;

        this.skeleton = new spine.Skeleton(this.skeletonData);

        const stateData: spine.AnimationStateData = new spine.AnimationStateData(this.skeletonData);
        this.state = new spine.AnimationState(stateData);
    }

    public update(): void {
        const now: number = Date.now();
        const delta: number = (now - this.lastTime) * 0.001;
        this.lastTime = now;

        this.state.update(delta);
        this.state.apply(this.skeleton);
        this.skeleton.updateWorldTransform();
    }

    public render(context: CanvasRenderingContext2D) : void {
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
            const w: number = attachment.width * bone.worldScaleX, h = attachment.height * bone.worldScaleY;

            context.translate(x, y);
            context.rotate(rotation);
            context.drawImage(attachment.rendererObject, -w / 2, -h / 2, w, h);
            context.rotate(-rotation);
            context.translate(-x, -y);
        }
        context.translate(-skeleton.x, -skeleton.y);
    }

    public animate(id: string): void {
        const canvas = <HTMLCanvasElement> document.getElementById(id);
        const context: CanvasRenderingContext2D = canvas.getContext('2d');
        const requestAnimationFrame: any = window.requestAnimationFrame ||
            (<any>window).webkitRequestAnimationFrame ||
            (<any>window).mozRequestAnimationFrame ||
                function(callback: Function) {
                    window.setTimeout(callback, 1000 / 60);
                };
        const renderFrame: Function = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            this.update();
            this.render(context);
            requestAnimationFrame(renderFrame);
        }
        renderFrame();
    }

}
export default SkeletonRenderer;