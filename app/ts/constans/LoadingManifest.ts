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
      { src: `${prefix}eye_indifferent/complementary.png` },
      { src: `${prefix}eye_indifferent/default.png` },
      { src: `${prefix}eye_surprised/complementary.png` },
      { src: `${prefix}eye_surprised/default.png` },
      { src: `${prefix}front_bracer/complementary.png` },
      { src: `${prefix}front_bracer/default.png` },
      { src: `${prefix}front_fist_closed/complementary.png` },
      { src: `${prefix}front_fist_closed/default.png` },
      { src: `${prefix}front_fist_open/complementary.png` },
      { src: `${prefix}front_fist_open/default.png` },
      { src: `${prefix}front_foot/complementary.png` },
      { src: `${prefix}front_foot/default.png` },
      { src: `${prefix}front_foot_bend_01/complementary.png` },
      { src: `${prefix}front_foot_bend_01/default.png` },
      { src: `${prefix}front_foot_bend_02/complementary.png` },
      { src: `${prefix}front_foot_bend_02/default.png` },
      { src: `${prefix}front_shin/complementary.png` },
      { src: `${prefix}front_shin/default.png` },
      { src: `${prefix}front_thigh/complementary.png` },
      { src: `${prefix}front_thigh/default.png` },
      { src: `${prefix}front_upper_arm/complementary.png` },
      { src: `${prefix}front_upper_arm/default.png` },
      { src: `${prefix}goggles/complementary.png` },
      { src: `${prefix}goggles/default.png` },
      { src: `${prefix}goggles/goggles.png` },
      { src: `${prefix}gun/complementary.png` },
      { src: `${prefix}gun/default.png` },
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
      { src: `${prefix}torso/default.png` },
      { src: `${jsonPrefix}/parts.json`, id: LoadingManifest.PARTS_JSON},
      { src: `${jsonPrefix}/skelton.json`, id: LoadingManifest.SKELTON_JSON}
    ];
  }
}
export default LoadingManifest;
