import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import admin from "firebase-admin";

const app = express();
// cors対策
app.use(cors({origin: true}));
// リクエストボディを JSON で取得するための設定
app.use(express.json());
// firebase-admin の初期化
admin.initializeApp();

type Users = {
  name: string;
  kana: string;
  age: number;
  birthday: string;
  sex: string;
  mail: string;
  tel1: string;
  tel2: string;
  postalCode: string;
  address: string;
};

app.get("/users", async (req, res) => {
  const limit = Number(req.query.limit) || 50;
  const offset = Number(req.query.offset) || 0;
  // Firebaseからデータ取得
  const collection = await admin.firestore().collection("users");
  const count = await collection.count().get();
  const result = await collection.limit(limit).offset(offset).get();
  const users = result.docs.map((d) => d.data() as Users);
  res.json({
    limit: limit,
    offset: offset,
    count: count.data().count,
    data: users,
  });
});

// 関数を出力
// TODO: config に切り出し
export const api = functions.runWith({
  maxInstances: 1,
  timeoutSeconds: 30,
  memory: "128MB",
}).https.onRequest(app);

