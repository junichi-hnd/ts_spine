class SpineImageData {

    private imageList: {[key: string]: HTMLImageElement};

    constructor() {
        this.imageList = {};
    }

    /**
     * 画像を追加する
     * @param url       {string}        追加したい画像のURL
     * @param key       {string}        imageListのhash、Key
     */
    public add(url: string, key: string): void{
        const image: HTMLImageElement = new Image();
        image.src = url;
        this.imageList[key] = image;
    }

    /**
     * keyから画像を取得する
     * @param key
     * @returns {HTMLImageElement}
     */
    public getImageByKey(key: string): HTMLImageElement {
        return this.imageList[key];
    }
}
export default SpineImageData;
