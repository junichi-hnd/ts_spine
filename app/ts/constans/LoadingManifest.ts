class LoadingManifest {

  static get PARTS_JSON():string {
    return 'parts_json';
  }

  static get SKELTON_JSON():string {
    return 'skelton_json';
  }

  static get SPRITE_JSON_PATH(): string {
    return './data/parts.json';
  }

  static get SKELTON_JSON_PATH(): string {
    return './data/skelton.json';
  }

  static get PARTS_SPRITE_PATH(): string {
    return './images/parts.png';
  }

  static getPartsManifest():Array<any> {
    const prefix: string = './images/parts/';
    const jsonPrefix: string = './data/';
    return [
      { src: './images/parts.png', id: 'sprite'},
      { src: `${prefix}eye_indifferent.png` },
      { src: `${prefix}eye_surprised.png` },
      { src: `${prefix}front_bracer.png` },
      { src: `${prefix}front_fist_closed.png` },
      { src: `${prefix}front_fist_open.png` },
      { src: `${prefix}front_foot_bend1.png` },
      { src: `${prefix}front_foot_bend2.png` },
      { src: `${prefix}front_foot.png` },
      { src: `${prefix}front_shin.png` },
      { src: `${prefix}front_thigh.png` },
      { src: `${prefix}front_upper_arm.png` },
      { src: `${prefix}goggles.png` },
      { src: `${prefix}gun.png` },
      { src: `${prefix}head.png` },
      { src: `${prefix}mouth_grind.png` },
      { src: `${prefix}mouth_oooo.png` },
      { src: `${prefix}mouth_smile.png` },
      { src: `${prefix}muzzle.png` },
      { src: `${prefix}neck.png` },
      { src: `${prefix}rear_bracer.png` },
      { src: `${prefix}rear_foot_bend1.png` },
      { src: `${prefix}rear_foot_bend2.png` },
      { src: `${prefix}rear_foot.png` },
      { src: `${prefix}rear_shin.png` },
      { src: `${prefix}rear_thigh.png` },
      { src: `${prefix}rear_upper_arm.png` },
      { src: `${prefix}torso.png` },/*
      { src: `${prefix}head/complementary.png` },
      { src: `${prefix}head/default.png` },
      { src: `${prefix}mouth_grind/complementary.png` },
      { src: `${prefix}mouth_grind/default.png` },
      { src: `${prefix}mouth_oooo/complementary.png` },
      { src: `${prefix}mouth_oooo/default.png` },
      { src: `${prefix}mouth_smile/complementary.png` },
      { src: `${prefix}mouth_smile/default.png` },
      { src: `${prefix}muzzle/complementary.png` },
      { src: `${prefix}muzzle/default.png` },
      { src: `${prefix}neck/complementary.png` },
      { src: `${prefix}neck/default.png` },
      { src: `${prefix}rear_bracer/complementary.png` },
      { src: `${prefix}rear_bracer/default.png` },
      { src: `${prefix}rear_foot/complementary.png` },
      { src: `${prefix}rear_foot/default.png` },
      { src: `${prefix}rear_foot_bend_01/complementary.png` },
      { src: `${prefix}rear_foot_bend_01/default.png` },
      { src: `${prefix}rear_foot_bend_02/complementary.png` },
      { src: `${prefix}rear_foot_bend_02/default.png` },
      { src: `${prefix}rear_shin/complementary.png` },
      { src: `${prefix}rear_shin/default.png` },
      { src: `${prefix}rear_thigh/complementary.png` },
      { src: `${prefix}rear_thigh/default.png` },
      { src: `${prefix}rear_upper_arm/complementary.png` },
      { src: `${prefix}rear_upper_arm/default.png` },
      { src: `${prefix}torso/complementary.png` },
      { src: `${prefix}torso/default.png` },*/
      { src: `${jsonPrefix}/parts.json`, id: LoadingManifest.PARTS_JSON},
      { src: `${jsonPrefix}/skelton.json`, id: LoadingManifest.SKELTON_JSON}
    ];
  }
}
export default LoadingManifest;
