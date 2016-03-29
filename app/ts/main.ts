/// <reference path="../../typings/browser.d.ts"/>

import Event from './events/Event';
import LoadingAction from './actions/LoadingAction';
import LoadingManifest from './constans/LoadingManifest';


class Main {
  private CLASS_NAME: string = 'Main';
  constructor(){
    this.onCompleted = this.onCompleted.bind(this);
  }

  init(){
    const manifest: Array<Object> = LoadingManifest.getPartsManifest();
    const action: LoadingAction = new LoadingAction(manifest);
    action.start();
    action.on(Event.COMPLETE, this.onCompleted, null);
  }

  onCompleted(event:any):void {
    console.log(`${this.CLASS_NAME}.ts >> loading completed!`);
    const renderer: spine.SkeletonRenderer = new spine.SkeletonRenderer(event.params.sprite, event.params.partsJSON);
    renderer.scale = 0.6;
    renderer.load(event.params.skeltonJSON);
    renderer.state.data.defaultMix = 0.4;
    renderer.state.setAnimationByName(0, 'walk', true);
    renderer.state.addAnimationByName(0, 'jump', false, 3);
    renderer.state.addAnimationByName(0, 'run', true, 0);
    renderer.skeleton.x = 320;
    renderer.skeleton.y = 450;

    const canvas: HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    renderer.animate(canvas);
  }
}

const main = new Main();
main.init();
