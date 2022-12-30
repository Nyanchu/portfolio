/* eslint-disable */

import admin from "firebase-admin";
import importer from "firestore-export-import";
import fs from "fs";

/**
 * データ JSON を Firestore に書き込むコマンド
 * 
 * ※ IDが同じ場合は上書きされる
 * ※ IDが違う場合は上書きされず別のドキュメントとして挿入される
 * 
 * Usage
 * 
 * cd functions
 * ./node_modules/.bin/ts-node-esm ./tools/import_firestore.ts
 */

// 秘密鍵JSONファイルを読み込み認証情報としてセットする
const serviceAccount = JSON.parse(fs.readFileSync('./secret/portfolio-8cf27-secret-key.json', 'utf8'));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
// data下のディレクトリ以下のファイルを全部対象にする
fs.readdir('./data/', async function (err, files) {
  if (err) {
    throw err;
  }
  for (const file of files) {
    try {
      // インポート
      await importer.restore('./data/' + file);
    } catch (e) {
      // 1つのファイルが失敗しても処理を止めない
      console.log(e);
    }
  }
});
