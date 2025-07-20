import { onRequest } from "firebase-functions/v2/https";
import { db } from "../utils/firestore.js";

export const getResume = onRequest(
  {
    cors: true,
  },
  async (req, res) => {
    try {
      const doc = await db.doc("resume/main").get();

      if (!doc.exists) {
        return res.status(404).json({ error: "Resume not found" });
      }

      const resumeData = doc.data();

      // Sort experience section if it exists
      if (resumeData.experience && Array.isArray(resumeData.experience)) {
        resumeData.experience = resumeData.experience.sort((a, b) => {
          const dateA = new Date(a.start_date);
          const dateB = new Date(b.start_date);
          return dateB - dateA; // Sort by start_date descending (newest first)
        });
      }

      return res.status(200).json(resumeData);
    } catch (err) {
      console.error("Error retrieving resume:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
);
