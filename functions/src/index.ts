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

type JobDescription = {
  company: string;
  description: string;
};

app.get("/job-descriptions", async (req, res) => {
  // Firebaseからデータ取得
  const collection = await admin.firestore().collection("JobDescriptions").get();
  const JobDescriptions = collection.docs.map((d) => d.data() as JobDescription);
  res.json(JobDescriptions);
});

// 関数を出力
// TODO: config に切り出し
export const api = functions.runWith({
  maxInstances: 1,
  timeoutSeconds: 30,
  memory: "128MB",
}).https.onRequest(app);

