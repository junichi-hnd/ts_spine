import Event from '../../events/Event';
import IAvator from './IAvator';
import SpineAvatorModel from '../model/SpineAvatorModel';
import SkeletonRenderer from '../skeleton/SkeletonRenderer';

class AbstractAvator implements IAvator {

    private model: SpineAvatorModel;

    protected renderer: SkeletonRenderer;

    /**
     * @class
     * @param model
     */
    constructor(model: SpineAvatorModel) {
        this.model = model;

        this._onLoadingCompleted = this._onLoadingCompleted.bind(this);
    }

    public init(): void {
        this.model.init();
        this.model.one(SpineAvatorModel.LOADING_COMPLETED, this._onLoadingCompleted);
    }

    public play():  void {}

    public stop(): void {}

    public changeParts(id: string, name: string): void {

    }

    private _onLoadingCompleted(event: Event): void {
        this.renderer = new SkeletonRenderer('./images/parts/');
        this.renderer.scale = 0.6;
        this.renderer.load(JSON.stringify(event.params.skeltonJSON));
        this.renderer.state.setAnimationByName(0, 'walk', true);
        this.renderer.state.addAnimationByName(0, 'jump', false, 3);
        this.renderer.state.addAnimationByName(0, 'run', true, 0);
        this.renderer.skeleton.x = 320;
        this.renderer.skeleton.y = 450;
    }
}
