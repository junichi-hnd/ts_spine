class Event {

  private target: any;
  // ------------------------------------------------
  // static getter
  // ------------------------------------------------
  static get COMPLETE(): string {
    return 'complete';
  }

  static get REQUEST_ANIMATION_FRAME():string {
    return 'requestAnimationFrame';
  }

  static get LOAD(): string {
    return 'load';
  }

  static get UNLOAD(): string {
    return 'unload';
  }

  static get FOCUS(): string {
    return 'focus';
  }

  static get BLUR(): string {
    return 'blur';
  }

  static get CHANGE(): string {
    return 'change';
  }

  static get SELECT(): string {
    return 'select';
  }

  static get SUBMIT(): string {
    return 'submit';
  }

  static get RESET(): string {
    return 'reset';
  }

  static get COPY(): string {
    return 'copy';
  }

  static get CONTEXT_MENU(): string {
    return 'contextmenu';
  }

  static get ABORT(): string {
    return 'abort';
  }

  static get ERROR(): string {
    return 'error';
  }

  static get RESIZE(): string {
    return 'resize';
  }

  static get READY_STATE_CHANGE(): string {
    return 'readystatechange';
  }

  static get ON_READY_STATE_CHANGE(): string {
    return `on_${Event.READY_STATE_CHANGE}`;
  }

  static get DOMContentLoaded(): string {
    return 'DOMContentLoaded';
  }

  static get DOM_MOUSE_SCROLL(): string {
    return 'DOMMouseScroll';
  }

  constructor(public type:string, public params: any = {}) {
    this.target = null;
  }
}
export default Event;
