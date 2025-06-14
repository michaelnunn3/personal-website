import { onRequest } from "firebase-functions/v2/https";
import { db } from "../utils/firestore.js";

export const getResume = onRequest(async (req, res) => {
  try {
    const doc = await db.doc("resume/main").get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Resume not found" });
    }

    return res.status(200).json(doc.data());
  } catch (err) {
    console.error("Error retrieving resume:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
