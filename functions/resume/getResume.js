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

      if (resumeData.experience && Array.isArray(resumeData.experience)) {
        resumeData.experience = resumeData.experience.sort((a, b) => {
          const parseDate = (dateString) => {
            if (dateString.toLowerCase() === "present") {
              return new Date();
            }

            let date = new Date(dateString);

            if (isNaN(date)) {
              const normalized = `01 ${dateString}`;
              date = new Date(normalized);
            }

            return date;
          };

          const dateA = parseDate(a.start_date);
          const dateB = parseDate(b.start_date);

          return dateB - dateA;
        });
      }

      return res.status(200).json(resumeData);
    } catch (err) {
      console.error("Error retrieving resume:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
);
