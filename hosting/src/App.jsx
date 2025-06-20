import { useEffect, useState } from "react";
import AboutSection from "./components/resume/AboutSection";
import ExperienceSection from "./components/resume/ExperienceSection";
import EducationSection from "./components/resume/EducationSection";
import SkillsSection from "./components/resume/SkillsSection";
import InterestsSection from "./components/resume/InterestsSection";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetch("https://getresume-lqrykgpuka-uc.a.run.app")
      .then((res) => res.json())
      .then((data) => setResumeData(data));
  }, []);

  if (!resumeData) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1">
        <section id="about" className="min-h-screen flex items-center px-8">
          <AboutSection about={resumeData.about} />
        </section>
        <section
          id="experience"
          className="min-h-screen flex items-center px-8"
        >
          <ExperienceSection experience={resumeData.experience} />
        </section>
        <section id="education" className="min-h-screen flex items-center px-8">
          <EducationSection education={resumeData.education} />
        </section>
        <section id="skills" className="min-h-screen flex items-center px-8">
          <SkillsSection skills={resumeData.skills} />
        </section>
        <section id="interests" className="min-h-screen flex items-center px-8">
          <InterestsSection interests={resumeData.interests} />
        </section>
      </main>
    </div>
  );
}
