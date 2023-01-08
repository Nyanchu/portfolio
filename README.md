# portfolio

酒井智弘 のポートフォリオのサイトです。

https://portfolio-8cf27.web.app/

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
# 秘密鍵を置く
$ touch ./secret/portfolio-8cf27-secret-key.json
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
