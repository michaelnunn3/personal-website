import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import InterestsSection from "./components/InterestsSection";

export default function App() {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/personal-website-b0a21/us-central1/getResume")
      .then((res) => res.json())
      .then((data) => setResumeData(data));
  }, []);

  if (!resumeData) return <p>Loading...</p>;

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <AboutSection about={resumeData.about} />
      <ExperienceSection experience={resumeData.experience} />
      <EducationSection education={resumeData.education} />
      <SkillsSection skills={resumeData.skills} />
      <InterestsSection interests={resumeData.interests} />
    </main>
  );
}
