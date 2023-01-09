# portfolio

酒井智弘 のポートフォリオのサイトです。

https://portfolio-8cf27.web.app/

### ディレクトリ構成

以下のようになっています

* **functions**: Firebase Functions
* **public**: Firebase Hosting
* **tools**: 便利ツール

### 技術

**フロントエンド**

* WEBサーバ: Firebase Hosting
* 使用言語: React(TypeScript) + HTML + SCSS
* デザイン: レスポンシブ対応。ブートストラップなどは使わずにイチから作っています。

**REST API**

* APIサーバ: Firebase Function
* 使用言語: Node.js(TypeScript)

**その他**

* DBサーバ: Firestore(NoSQL)
* CI/CD: Github Actions でマージをフックに自動デプロイ

# Usage

以下は開発者(自分)向けです。

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
