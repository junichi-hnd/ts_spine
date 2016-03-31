import Event from '../../events/Event';
import EventDispatcher from '../../events/EventDispatcher';
import LoadingAction from '../../actions/LoadingAction';
import LoadingManifest from '../../constans/LoadingManifest';

class SpineAvatorModel extends EventDispatcher {

    public static get LOADING_COMPLETED(): string {
        return 'loadingCompleted';
    }

    constructor() {
        super();
        this._getLoadingManifest = this._getLoadingManifest.bind(this);
        this._onCompleted = this._onCompleted.bind(this);
    }
    
    public init(): void {
        this._getLoadingManifest();
        // action.one(Event.Com)
    }


    private _getLoadingManifest(): void {
        // todo: ここはホントはAPIから取ってくる
        const action: LoadingAction = new LoadingAction(LoadingManifest.getPartsManifest());
        action.start();
        action.one(Event.COMPLETE, this._onCompleted, null);
    }

    /**
     * 画像、JOSONファイルの読み込み完了
     * @param event
     * @private
     */
    private _onCompleted(event: Event): void {
        const params: Object = event.params;

        this.fire(new Event(SpineAvatorModel.LOADING_COMPLETED, {
            target: this
        }));
    }


}
export default SpineAvatorModel;