# TypeScriptでSpineをやってみる

## requirements

- node.js

## install

```ターミナル
sudo npm i
bower install
```


## typingsの設定

``` shell
sudo ./node_modules/.bin/typings init --upgrade
# もしtsd.jsonが存在すればこれを実行。無いならスルー
rm tsd.json
sudo ./node_modules/.bin/typings install
```

## typingsのモジュールインストール

```shell
sudo typings install <typings_name> --save --ambient
```

<typings_name>にインストールしたい名前入れる。

### 例：createjsのtypingsをインストールしてみる。


```shell
sudo typings install createjs
```

### typingsの型定義を検索

```shell
sudo typings search <typings_name>
# こんな感じで
sudo typings search createjs
```
