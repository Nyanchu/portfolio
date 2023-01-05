# portfolio

酒井智弘 のポートフォリオのサイトです。

# Usage

### デプロイ

functions

```bash
$ cd functions
$ npm run deploy
```

hosting

```bash
$ cd public
$ npm run deploy
```

firestore のルール更新

```bash
$ firebase deploy --only firestore
```

firestore にデータ一括インポート

```bash
 $ cd tools
 $ npm run import
```

### エミュレーター

エミュレーター起動

```bash
$ firebase emulators:start
```

エミュレーターの Firestore にデータ挿入

```bash
 $ export FIRESTORE_EMULATOR_HOST="localhost:5003"
 $ cd tools
 $ npm run import
```


### 何用だっけこれ

フルパスで指定

```bash
$ export GOOGLE_APPLICATION_CREDENTIALS="/Users/sakaitomohiro/workspace/portfolio/tools/secret/portfolio-8cf27-secret-key.json";
```
