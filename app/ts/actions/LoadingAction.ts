import Event from '../events/Event';
import EventDispatcher from '../events/EventDispatcher';
import LoadingManifest from '../constans/LoadingManifest';

class LoadingAction extends EventDispatcher {
  private manifest: Array<any>;
  private queue: createjs.LoadQueue;

  constructor(manifest:Array<any>) {
    super(null);
    this.manifest = manifest;

    this.onCompleted = this.onCompleted.bind(this);
  }

  start():void {
    this.queue = new createjs.LoadQueue(true);
    // 並列で読み込みさせるmax数
    this.queue.setMaxConnections(6);
    this.queue.loadManifest(this.manifest, true);
    this.queue.addEventListener(Event.COMPLETE, this.onCompleted);
  }

  onCompleted(event:createjs.Event):void {
    // console.log(this.queue.getResult('parts_json'));
    super.fire(new Event(Event.COMPLETE, {
      target: this,
      sprite: this.queue.getResult('sprite'),
      partsJSON: this.queue.getResult(LoadingManifest.PARTS_JSON),
      skeltonJSON: this.queue.getResult(LoadingManifest.SKELTON_JSON)
    }));
  }
}
export default LoadingAction;
