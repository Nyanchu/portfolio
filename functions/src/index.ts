import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import admin from "firebase-admin";

const app = express();
// cors対策
app.use(cors({origin: true}));
// リクエストボディを JSON で取得するための設定
app.use(express.json());

app.get("/job-descriptions", async (req, res) => {
  // Firebaseからデータ取得
  const collection = await admin.firestore().collection("JobDescriptions").get();
  const JobDescriptions = collection.docs.map((d) => d.data());
  res.json(JobDescriptions);
});

// 出力
export const api = functions.https.onRequest(app);

