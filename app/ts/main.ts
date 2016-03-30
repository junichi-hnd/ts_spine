/// <reference path="../../typings/browser.d.ts"/>

import Event from './events/Event';
import LoadingAction from './actions/LoadingAction';
import LoadingManifest from './constans/LoadingManifest';

import SkeletonRenderer from './spine/skeleton/SkeletonRenderer';


class Main {
  private CLASS_NAME: string = 'Main';
  constructor(){
    console.log(`${this.CLASS_NAME}.ts`);
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

    const renderer: SkeletonRenderer = new SkeletonRenderer('./images/parts/');
    renderer.scale = 0.6;
    renderer.load(JSON.stringify(event.params.skeltonJSON));
    renderer.state.data.defaultMix = 0.4;
    renderer.state.setAnimationByName(0, 'walk', true);
    renderer.state.addAnimationByName(0, 'jump', false, 3);
    renderer.state.addAnimationByName(0, 'run', true, 0);
    renderer.skeleton.x = 320;
    renderer.skeleton.y = 450;

    const canvas = <HTMLCanvasElement> document.getElementById('spine');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    renderer.animate('spine');
  }
}

const main: Main = new Main();
main.init();
